import type { PageLoad } from './$types';
import { SESSION, USER } from '$lib/index';
import { PUBLIC_READ_ALL } from '$env/static/public';

import { Client, fql, FaunaError, NullDocument } from 'fauna';
console.log()


export const load: PageLoad = ({ params }) => {
    const bookmarkId = params.id;
    const client = new Client({ secret: PUBLIC_READ_ALL });

    const bookmarkPromise = client.query(fql`bookmarks.byId(id)`, { arguments: { id: bookmarkId } })
        .then((ret) =>{
            if(ret.data instanceof  NullDocument){
                throw new Error(`Bookmark ${bookmarkId} not found`);
            }
            console.log(ret.data); 
            return ret.data
        })
        .catch(error => {
            throw error;
        });

    return {
        bookmark: bookmarkPromise
    };
};

