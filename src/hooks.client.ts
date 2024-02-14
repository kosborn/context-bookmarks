import { SESSION, USER, FAUNA, setFaunaClient, getSession } from '$lib/index';
import { get } from 'svelte/store';
import { dev } from '$app/environment';

import Corbado from '@corbado/webcomponent';
import { PUBLIC_CORBADO_PROJECT_ID } from '$env/static/public';

if (dev) {
	USER.set({ email: 'local@user' });
} else {
	SESSION.set(new Corbado.Session(PUBLIC_CORBADO_PROJECT_ID));

	get(SESSION).refresh((user) => {
		if (!user) {
			USER.set(false);
		} else {
			USER.set(user);

			getSession(document.cookie)
				.then((session) => setFaunaClient(session))
				.then((client) => FAUNA.set(client));
		}
	});
}
