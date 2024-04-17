import { j as json } from "../../../../../../chunks/index.js";
import { generateRegistrationOptions } from "@simplewebauthn/server";
const rpName = "SimpleWebAuthn Example";
const rpID = "localhost";
const getUserFromDB = (userId) => {
  return { id: `id:${userId}`, username: `user:${userId}`, idk: "test" };
};
const getUserAuthenticators = (user) => {
  return [];
};
const GET = async ({ url }) => {
  const user = getUserFromDB(url.searchParams.get("userid"));
  const userAuthenticators = getUserAuthenticators();
  const options = await generateRegistrationOptions({
    rpName,
    rpID,
    userID: user.id,
    userName: user.username,
    // Don't prompt users for additional information about the authenticator
    // (Recommended for smoother UX)
    attestationType: "none",
    // Prevent users from re-registering existing authenticators
    excludeCredentials: userAuthenticators.map((authenticator) => ({
      id: authenticator.credentialID,
      type: "public-key",
      // Optional
      transports: authenticator.transports
    })),
    // See "Guiding use of authenticators via authenticatorSelection" below
    authenticatorSelection: {
      // Defaults
      residentKey: "preferred",
      userVerification: "preferred",
      // Optional
      authenticatorAttachment: "platform"
    }
  });
  return json(options);
};
export {
  GET
};
