import { j as json } from "../../../../../../chunks/index.js";
import { verifyRegistrationResponse } from "@simplewebauthn/server";
const rpID = "localhost";
const origin = `https://${rpID}`;
const getUserCurrentChallenge = (user) => {
  return user;
};
const POST = async ({ request }) => {
  let body = {};
  const expectedChallenge = getUserCurrentChallenge("test");
  let verification;
  try {
    verification = await verifyRegistrationResponse({
      response: body,
      expectedChallenge,
      expectedOrigin: origin,
      expectedRPID: rpID
    });
  } catch (error) {
    console.error(error);
    return new Response("Failed to verify registration response");
  }
  const { verified } = verification;
  return json(verified);
};
export {
  POST
};
