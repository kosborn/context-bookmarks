import type { PageLoad } from './$types';
import { FAUNA, faunaReady, initializeSession } from '$lib/index';
import { get } from 'svelte/store';

import { fql, NullDocument } from 'fauna';

export const load: PageLoad = async ({ params }) => {
	const bookmarkId = params.id;

	if (!get(faunaReady)) {
		console.log('no session');
		await initializeSession();
	}

	const bookmarkPromise = get(FAUNA)
		.query(fql`bookmarks.byId(id)`, {
			arguments: { id: bookmarkId }
		})
		.then((ret) => {
			if (ret.data instanceof NullDocument) {
				throw new Error(`Bookmark ${bookmarkId} not found`);
			}
			console.log(ret.data);
			return ret.data;
		})
		.catch((error) => {
			throw error;
		});

	// return {
	// 	bookmark: bookmarkPromise
	// };
	return { bookmark: bookmarkPromise };
};
