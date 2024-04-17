import type { RequestHandler } from './$types';
import { llmSummarize } from '$lib/api/bookmarks.ts';
import { json, error } from '@sveltejs/kit';
import { sanitizeUrl } from '@braintree/sanitize-url';

export const POST: RequestHandler = async ({ request }) => {
	const article = await request.json();
	// let req_url = sanitizeUrl(article.url);
	const stream = await llmSummarize(article.markdown);
	// const summary = completion.choices[0]['message']['content'];
	// article.llm = summary;
	return stream;
	// return json(stream);
};
