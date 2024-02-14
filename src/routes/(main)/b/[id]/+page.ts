import type { PageLoad } from './$types';
import { FAUNA } from '$lib/index';
import { get } from 'svelte/store';

import { fql, NullDocument } from 'fauna';

export const load: PageLoad = ({ params }) => {
	const bookmarkId = params.id;

	const bookmarkPromise = get(FAUNA)
		.query(fql`bookmarks.byId(id)`, { arguments: { id: bookmarkId } })
		.then((ret) => {
			if (ret.data instanceof NullDocument) {
				throw new Error(`Bookmark ${bookmarkId} not found`);
			}
			return ret.data;
		})
		.catch((error) => {
			throw error;
		});

	return {
		bookmark: bookmarkPromise
	};
};
