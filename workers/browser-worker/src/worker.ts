import puppeteer from '@cloudflare/puppeteer';
import { DurableObject } from 'cloudflare:workers';

function getFormattedDate() {
	const date = new Date(); // Today's date. You can also set a specific date here.
	const year = date.getFullYear();
	let month = date.getMonth() + 1; // getMonth() returns 0-11
	let day = date.getDate(); // getDay() is for the day of the week, getDate() is for the day of the month

	// Add preceding zeros if month or day is less than 10
	month = month < 10 ? '0' + month : month;
	day = day < 10 ? '0' + day : day;

	return `${year}/${month}/${day}`;
}

function executor() {
	return new Readability({}, document).parse();
}

export default {
	async queue(message: MessageBatch<Message>, env: Env): Promise<void> {
		let id = env.BROWSER.idFromName('BROWSER');
		let obj = env.BROWSER.get(id);

		console.log(JSON.stringify(message));
		for (let job of message.messages) {
			console.log(JSON.stringify(job.body.url));
			await obj.queue(job.body);
		}

		return true;
	},
	async fetch(request, env) {
		let id = env.BROWSER.idFromName('BROWSER');
		let obj = env.BROWSER.get(id);

		const { searchParams } = new URL(request.url);
		let url = searchParams.get('url')?.toString();
		if (url == null) {
			return new Response('womp womp');
		}

		// Send a request to the Durable Object, then await its response.
		let resp = await obj.fetch(url);

		return resp;
	},
};

const KEEP_BROWSER_ALIVE_IN_SECONDS = 60;

export class Browser extends DurableObject {
	constructor(state, env) {
		super(state, env);
		this.state = state;
		this.env = env;
		this.keptAliveInSeconds = 0;
		this.storage = this.state.storage;
	}

	async fetch(request) {
		return await this.queue(request);
	}

	async queue(request) {
		//if there's a browser session open, re-use it
		if (!this.browser || !this.browser.isConnected()) {
			console.log(`Browser DO: Starting new instance`);
			try {
				this.browser = await puppeteer.launch(this.env.MYBROWSER);
			} catch (e) {
				console.log(`Browser DO: Could not start browser instance. Error: ${e}`);
			}
		}

		// Reset keptAlive after each call to the DO
		this.keptAliveInSeconds = 0;

		const page = await this.browser.newPage();

		await page.setViewport({ width: 1200, height: 800 });
		await page.goto(request.url);

		const canonicalUrl = await page.evaluate(() => {
			const canonicalLink = document.querySelector('link[rel=canonical]');
			if (canonicalLink) return canonicalLink.href;

			const ogUrlMeta = document.querySelector('meta[property="og:url"]');
			if (ogUrlMeta) return ogUrlMeta.content;

			return window.location.href;
		});

		let folder = getFormattedDate();
		let screenshotFile = canonicalUrl
			.replace(/:\/\//g, '__')
			.replace(/\//g, '_')
			.replace(/\./g, '-')
			.replace(/\//g, '_')
			.replace(/\?/g, '-')
			.replace(/=/g, '_');

		let screenshotKey = `${folder}/${screenshotFile}.png`;

		await autoScroll(page);
		let img = (await page.screenshot({ path: screenshotFile + '.png', fullPage: true })) as Buffer;

		await this.env.BUCKET.put(screenshotKey, img);

		await page.addScriptTag({ url: 'https://unpkg.com/turndown@7.1.3/dist/turndown.js' });
		await page.addScriptTag({ url: 'https://unpkg.com/@mozilla/readability@0.5.0/Readability.js', module: true });
		const resultArticle = await page.evaluate(`
				    (function(){

					${executor}
					let article = executor()
					let td = new TurndownService();
					let markdown = td.turndown(article.content)

					return { article: article, markdown: markdown };
				    }())
				  `);

		let article = { resultArticle, canonicalUrl, screenshotKey };

		console.log(JSON.stringify(article));
		await this.env.BROWSER_KV.put(`text:${request.url}`, JSON.stringify(article), {});
		await this.env.BROWSER_KV.put(request.job_id, `text:${request.url}`, {});

		// Close tab when there is no more work to be done on the page
		await page.close();

		// Reset keptAlive after performing tasks to the DO.
		this.keptAliveInSeconds = 0;

		this.browser.close();
		// set the first alarm to keep DO alive
		let currentAlarm = await this.storage.getAlarm();
		if (currentAlarm == null) {
			console.log(`Browser DO: setting alarm`);
			const TEN_SECONDS = 10 * 1000;
			await this.storage.setAlarm(Date.now() + TEN_SECONDS);
		}

		return new Response('success');
	}

	async alarm() {
		this.keptAliveInSeconds += 10;

		// Extend browser DO life
		if (this.keptAliveInSeconds < KEEP_BROWSER_ALIVE_IN_SECONDS) {
			//console.log(`Browser DO: has been kept alive for ${this.keptAliveInSeconds} seconds. Extending lifespan.`);
			await this.storage.setAlarm(Date.now() + 10 * 1000);
			// You could ensure the ws connection is kept alive by requesting something
			// or just let it close automatically when there  is no work to be done
			// for example, `await this.browser.version()`
		} else {
			console.log(`Browser DO: exceeded life of ${KEEP_BROWSER_ALIVE_IN_SECONDS}s.`);
			if (this.browser) {
				console.log(`Closing browser.`);
				await this.browser.close();
			}
		}
	}
}

async function autoScroll(page) {
	await page.evaluate(async () => {
		await new Promise((resolve) => {
			var totalHeight = 0;
			var distance = 100;
			var timer = setInterval(() => {
				var scrollHeight = document.body.scrollHeight;
				window.scrollBy(0, distance);
				totalHeight += distance;

				if (totalHeight >= scrollHeight - window.innerHeight) {
					clearInterval(timer);
					resolve();
				}
			}, 100);
		});
	});
}
