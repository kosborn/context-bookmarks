import { json } from '@sveltejs/kit';
import { generateRegistrationOptions, verifyRegistrationResponse } from '@simplewebauthn/server';

import type { RequestHandler } from './$types';

import type { UserModel, Authenticator } from '../../models';

// Human-readable title for your website
const rpName = 'SimpleWebAuthn Example';
// A unique identifier for your website
const rpID = 'localhost';
// The URL at which registrations and authentications should occur
const origin = `httpd://${rpID}`;

const getUserFromDB: UserModel = (userId) => {
	return { id: `id:${userId}`, username: `user:${userId}`, idk: 'test' };
};

const getUserAuthenticators: Authenticator[] = (user) => {
	return [];
};

export const GET: RequestHandler = async ({ url }) => {
	// (Pseudocode) Retrieve the user from the database
	// after they've logged in
	const user: UserModel = getUserFromDB(url.searchParams.get('userid'));
	// (Pseudocode) Retrieve any of the user's previously-
	// registered authenticators
	const userAuthenticators: Authenticator[] = getUserAuthenticators(user);

	const options = await generateRegistrationOptions({
		rpName,
		rpID,
		userID: user.id,
		userName: user.username,
		// Don't prompt users for additional information about the authenticator
		// (Recommended for smoother UX)
		attestationType: 'none',
		// Prevent users from re-registering existing authenticators
		excludeCredentials: userAuthenticators.map((authenticator) => ({
			id: authenticator.credentialID,
			type: 'public-key',
			// Optional
			transports: authenticator.transports
		})),
		// See "Guiding use of authenticators via authenticatorSelection" below
		authenticatorSelection: {
			// Defaults
			residentKey: 'preferred',
			userVerification: 'preferred',
			// Optional
			authenticatorAttachment: 'platform'
		}
	});

	// (Pseudocode) Remember the challenge for this user
	// setUserCurrentChallenge(user, options.challenge);
	return json(options);
};
