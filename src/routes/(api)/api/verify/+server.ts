import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import {
  generateRegistrationOptions,
  verifyRegistrationResponse,
} from '@simplewebauthn/server';

import type { RequestHandler } from './$types';

import type { UserModel, Authenticator } from './models';


// Human-readable title for your website
const rpName = 'SimpleWebAuthn Example';
// A unique identifier for your website
const rpID = 'localhost';
// The URL at which registrations and authentications should occur
const origin = `https://${rpID}`;

const getUserFromDB: UserModel = (userId) => {
    return {id:userId, username: userId }
}

const getUserAuthenticators: Authenticator[] = (user) => {
    return []
}

const getUserCurrentChallenge = (user) => {
    return user
}

  
export const POST: RequestHandler = async ({request}) => {
    // let body = await request.json()
    let body = {}

    // (Pseudocode) Retrieve the logged-in user
    const user: UserModel = getUserFromDB("test");
    // (Pseudocode) Get `options.challenge` that was saved above
    const expectedChallenge: string = getUserCurrentChallenge("test");

    let verification;
    try {
    verification = await verifyRegistrationResponse({
        response: body,
        expectedChallenge,
        expectedOrigin: origin,
        expectedRPID: rpID,
    });
    } catch (error) {
        console.error(error);
        return new Response('Failed to verify registration response');
    }

    const { verified } = verification;


    return json(verified);
};