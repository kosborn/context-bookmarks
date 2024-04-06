import * as jose from 'jose';

// Shouldn't be static, need to pull from corbado directly and cache
const JWKS = jose.createLocalJWKSet({
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

const parseCookies = (cookie: string) => {
	return Object.fromEntries(
		cookie.split(';').map((c) => {
			const [key, ...v] = c.split('=');
			return [key.trim(), v.join('=')];
		})
	);
};

export const getSession = async (cookies: RequestHandler.cookies | string) => {
	let cbo_session;
	if (typeof cookies === 'string') {
		cookies = parseCookies(cookies);
		cbo_session = cookies['cbo_short_session'];
	} else {
		cbo_session = cookies.get('cbo_short_session');
	}

	if (!cbo_session) {
		return null;
	}
	return cbo_session;
};

export const authVerify = async (cookies: RequestHandler.cookies | string) => {
	let cbo_session;
	if (typeof cookies === 'string') {
		cookies = parseCookies(cookies);
		cbo_session = cookies['cbo_short_session'];
	} else {
		cbo_session = cookies.get('cbo_short_session');
	}
	try {
		if (!cbo_session) {
			throw new Error('No session');
		}
		return await jwtVerify(cbo_session);
	} catch (e) {
		throw new Error(e);
	}
};
