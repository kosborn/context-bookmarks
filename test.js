const { promisify } = require('node:util');
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');

const fetchJwksUri = async (issuer) => {
	return `${issuer}/.well-known/jwks`;
	// const response = await fetch(`${issuer}/.well-known/jwks`);
	// const { jwks_uri } = await response.json();
	// return jwks_uri;
};

const getKey = (jwksUri) => (header, callback) => {
	const client = jwksClient({ jwksUri });
	client.getSigningKey(header.kid, (err, key) => {
		if (err) {
			return callback(err);
		}
		callback(null, key.publicKey || key.rsaPublicKey);
	});
};

/**
 * Verify an OpenID Connect ID Token
 * @param {string} token - The JWT Token to verify
 */
const verify = async (token) => {
	const { iss: issuer } = jwt.decode(token);
	const jwksUri = await fetchJwksUri(issuer);
	return promisify(jwt.verify)(token, getKey(jwksUri));
};

const token =
	'eyJhbGciOiJSUzI1NiIsImtpZCI6InBraS02MDA5NjIxNDAzMzI5NjY2MTMzIiwidHlwIjoiSldUIn0.eyJpc3MiOiJodHRwczovL2Eua29zLmlvIiwic3ViIjoidXNyLTU3ODA1NzEyMTMwNTg4NjAwOTkiLCJleHAiOjE3MDc3MTk4NzQsIm5iZiI6MTcwNzcxODk2NCwiaWF0IjoxNzA3NzE4OTc0LCJqdGkiOiJTTG9RV3dOcGg4eG9wQURIQUZGeTVzZGpTYXhzNWciLCJuYW1lIjoiS3lsZSIsIm9yaWciOiJrLnAub3Nib3JuQGdtYWlsLmNvbSIsImVtYWlsIjoiay5wLm9zYm9ybkBnbWFpbC5jb20iLCJ2ZXJzaW9uIjoxfQ.A9LF5xpwV9yswENEVQkNfZWYrK0QHTTaIfkNSk2qr87VnIZ7zeIM3A3hGx6yHzPm9fwgi_PtLYbByMs72GoMSRSajKH4vvJETT1iVdRITR-upSoaKZLtg_G2wT6X-6JF5CY1WC5-Z9Wx2u-nNhZCORQ16oPh2GcVtn6mrRi_Hs-m2n8-k5lj8xRkc8bJOyAN0SJbhv-xsphnKwR6gSr_DawxFniEnkCuI5JLbIrzALP1_ZWoSEckavENopECi_2WqS9v4rQWawC7As5ZjHiy3-fwog3MuVh3Qdren-rsbWJ1l2SLcyL6rhoTdnwxLP60nOSsZlM-q836rYobzrtHbQ';
verify(token)
	.then(() => console.log('Token verified successfully.'))
	.catch(console.error);
