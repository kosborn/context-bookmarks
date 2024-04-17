interface Env {
	BROWSER_KV: KVNamespace;
	//BROWSER_QUEUE: Queue<any>;
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const { searchParams } = new URL(request.url);
		let url = searchParams.get('url');
		let article: string;
		if (url) {
			const job_id = crypto.randomUUID();
			article = await env.BROWSER_KV.get(`text:${url}`);
			if (article === null) {
				await env.BROWSER_QUEUE.send({ url: url, job_id });
				return new Response(JSON.stringify({ status: 'Executing', job_id }), {
					headers: {
						'content-type': 'application/json',
					},
				});
			}
			return new Response(JSON.stringify(article), {
				headers: {
					'content-type': 'application/json',
				},
			});
		} else {
			return new Response('Please add an ?url=https://example.com/ parameter');
		}
	},
};
