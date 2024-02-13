import type { RequestHandler } from './$types';
import { json, error } from '@sveltejs/kit';
import { sanitizeUrl } from '@braintree/sanitize-url';
import { authVerify } from '$lib/index.ts';
import { dev } from '$app/environment';

export const GET: RequestHandler = async ({ url, cookies }) => {
	let session;
	if (!dev) {
		try {
			session = await authVerify(cookies);
		} catch (e) {
			return error(500, { error: e.message });
		}

		if (!session) {
			return error(403, { error: 'Not logged in' });
		}
	}
	const req_url = sanitizeUrl(url.searchParams.get('url'));
	if (/^https?:\/\//.test(req_url) === false) {
		return error(500, { error: 'Invalid URL' });
	}

	return new Response(await fetch(req_url).then((res) => res.text()));
};
