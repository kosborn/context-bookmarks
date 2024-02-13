// place files you want to import through the `$lib` alias in this folder.
import type { RequestHandler } from './$types';

import { writable } from 'svelte/store';
import * as jose from 'jose';

export const USER = writable();
export const SESSION = writable();

export const JWKS = jose.createLocalJWKSet({
	keys: [
		{
			alg: 'RS256',
			e: 'AQAB',
			kid: 'pki-6009621403329666133',
			kty: 'RSA',
			n: 'r8MTlck5bV0vhy8vjIU8vZLPMtt-gYZy125nal-dzVE-Fm_cWVqsEh-4Lej1YoB24Gep8DUwhR8oNCX26N63wLL9VIke8xUCK05VooBg8UzWYyM3-RKi7mfk1xJREgoKSJJcJRVmQL5aLxQjRibtkQHiGbohX4J8GewDLkt17ebcWXdJcfEHf9vZxupOxjM3tr87WqS7uzSvgY4WtLcE12LnIuRdN25SOgx49yWADGYv1IvD9eHj_GlQDQj_xYHqaeJpA1euTXfWO99QDrCe09cpNCY3wJgiURvTxpOyhtDQGGfKmk8xIWdTWB9pl1sM2NhNxHxe9bTpHHLHeeGMQQ',
			use: 'sig'
		}
	]
});

export const jwtVerify = async (jwt) => {
	return await jose.jwtVerify(jwt, JWKS);
};

export const authVerify = async (cookies: RequestHandler.cookies) => {
	try {
		const cbo_session = cookies.get('cbo_short_session');
		if (!cbo_session) {
			throw new Error('No session');
		}
		return await jwtVerify(cbo_session);
	} catch (e) {
		throw new Error(e);
	}
};
