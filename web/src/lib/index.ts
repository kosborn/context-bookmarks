// place files you want to import through the `$lib` alias in this folder.
import { writable, get } from 'svelte/store';
import { Client } from 'fauna';
import { dev } from '$app/environment';
import { getSession } from '$lib/jwt';
import { PUBLIC_CORBADO_PROJECT_ID } from '$env/static/public';
export * from '$lib/jwt';
import { fql } from 'fauna';

type UserSession = {
	email?: string;
	name?: string;
	session?: string | boolean;
};

export const USER = writable<UserSession>({ session: false });
export let SESSION = writable();

export let FAUNA = writable();
export let faunaReady = writable();

export let Corbado = writable();

faunaReady.subscribe((value) => {
	console.log('faunaReady value updated:', value);
});

export const initializeSession = async () => {
	if (get(SESSION)) {
		console.log(get(SESSION));
		return get(SESSION);
	}
	if (dev && false) {
		USER.set({ email: 'local@user', session: true });
		return false;
	} else {
		let imp = await import('@corbado/web-js');

		Corbado.set(imp.default);
		await get(Corbado).load({ projectId: PUBLIC_CORBADO_PROJECT_ID });

		if (get(Corbado).isAuthenticated) {
			USER.set({ email: get(Corbado).user.email, name: get(Corbado).user.name, session: true });
			setFaunaClient(get(Corbado).shortSession).then((client) => {
				client.query(fql`createOrGetUser()`);
			});
		}

		return get(Corbado);

		// Corbado..refresh((user) => {
		// 	if (!user) {
		// 		console.log('No session found');
		// 		USER.set({ session: false });
		// 	} else {
		// 		console.log('Session started');
		// 		USER.set({ email: 'local@user', session: true, name: user.name });

		// 		getSession(document.cookie)
		// 			.then((session) => setFaunaClient(session))
		// 			.then((client) => FAUNA.set(client));
		// 	}
		// });
	}
	// return false;
};

// export const faunaInitialize = new Promise((resolve, reject) => {

// 		    let client = await fauna.Client(sess);
// 		    resolve(client);
// 		}
// });

// async function useFaunaClient() {
//     await faunaClient; // Implicitly awaits if not initialized yet
//     const res = await faunaClient.query(...);
//     displayData(res);
// }

export const getFaunaClient = (secret: string) => {
	return;
};

export const setFaunaClient = async (jwt) => {
	const client = new Client({ secret: jwt });
	FAUNA.set(client);
	faunaReady.set(true);
	return client;
};
