// import {SDK, Config} from '@corbado/node-sdk';
// import {CORBADO_PROJECT_ID, CORBADO_API_SECRET} from '$env/static/private';


// const config = new Config(CORBADO_PROJECT_ID, CORBADO_API_SECRET);
// const sdk = new SDK(config);
export const ssr = false;


// /** @type {import('@sveltejs/kit').Handle} */
// export async function handle({ event, resolve }) {

//     logEvent(event);

// 	//TODO: implement serverside auth state verification here. FIX!!
// 	const jwt = event.cookies.get('cbo_short_session')!;

//     console.log(await sdk.sessions().getCurrentUser(jwt))


// 	const response = await resolve(event);
// 	return response;
// }

// const logEvent = async (event: RequestEvent) => {
//     let logline = `${event.request.method} ${event.url.pathname}`;
    
//     if (event.request.method === 'POST') {
//         logline += ` | ${await event.request.text()}`;
//     }
//     console.log(logline);
// }