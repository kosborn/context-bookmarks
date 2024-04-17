import { w as writable, g as get_store_value } from "./index4.js";
import { fql, Client } from "fauna";
import * as jose from "jose";
let FAUNA, PUBLIC_CORBADO_PROJECT_ID, authVerify, faunaReady, initializeSession;
let __tla = (async () => {
  const JWKS = jose.createLocalJWKSet({
    keys: [
      {
        alg: "RS256",
        e: "AQAB",
        kid: "pki-6009621403329666133",
        kty: "RSA",
        n: "r8MTlck5bV0vhy8vjIU8vZLPMtt-gYZy125nal-dzVE-Fm_cWVqsEh-4Lej1YoB24Gep8DUwhR8oNCX26N63wLL9VIke8xUCK05VooBg8UzWYyM3-RKi7mfk1xJREgoKSJJcJRVmQL5aLxQjRibtkQHiGbohX4J8GewDLkt17ebcWXdJcfEHf9vZxupOxjM3tr87WqS7uzSvgY4WtLcE12LnIuRdN25SOgx49yWADGYv1IvD9eHj_GlQDQj_xYHqaeJpA1euTXfWO99QDrCe09cpNCY3wJgiURvTxpOyhtDQGGfKmk8xIWdTWB9pl1sM2NhNxHxe9bTpHHLHeeGMQQ",
        use: "sig"
      }
    ]
  });
  const jwtVerify = async (jwt) => {
    return await jose.jwtVerify(jwt, JWKS);
  };
  const parseCookies = (cookie) => {
    return Object.fromEntries(cookie.split(";").map((c) => {
      const [key, ...v] = c.split("=");
      return [
        key.trim(),
        v.join("=")
      ];
    }));
  };
  authVerify = async (cookies) => {
    let cbo_session;
    if (typeof cookies === "string") {
      cookies = parseCookies(cookies);
      cbo_session = cookies["cbo_short_session"];
    } else {
      cbo_session = cookies.get("cbo_short_session");
    }
    try {
      if (!cbo_session) {
        throw new Error("No session");
      }
      return await jwtVerify(cbo_session);
    } catch (e) {
      throw new Error(e);
    }
  };
  PUBLIC_CORBADO_PROJECT_ID = "pro-1694494494712887582";
  const USER = writable({
    session: false
  });
  let SESSION = writable();
  FAUNA = writable();
  faunaReady = writable();
  let Corbado = writable();
  faunaReady.subscribe((value) => {
    console.log("faunaReady value updated:", value);
  });
  initializeSession = async () => {
    if (get_store_value(SESSION)) {
      console.log(get_store_value(SESSION));
      return get_store_value(SESSION);
    }
    {
      let imp = await import("@corbado/web-js").then(async (m) => {
        await m.__tla;
        return m;
      });
      Corbado.set(imp.default);
      await get_store_value(Corbado).load({
        projectId: PUBLIC_CORBADO_PROJECT_ID
      });
      if (get_store_value(Corbado).isAuthenticated) {
        USER.set({
          email: get_store_value(Corbado).user.email,
          name: get_store_value(Corbado).user.name,
          session: true
        });
        setFaunaClient(get_store_value(Corbado).shortSession).then((client) => {
          client.query(fql`createOrGetUser()`);
        });
      }
      return get_store_value(Corbado);
    }
  };
  const setFaunaClient = async (jwt) => {
    const client = new Client({
      secret: jwt
    });
    FAUNA.set(client);
    faunaReady.set(true);
    return client;
  };
})();
export {
  FAUNA as F,
  PUBLIC_CORBADO_PROJECT_ID as P,
  __tla,
  authVerify as a,
  faunaReady as f,
  initializeSession as i
};
