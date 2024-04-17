import { e as error } from "../../../../../../chunks/index.js";
import { sanitizeUrl } from "@braintree/sanitize-url";
import { a as authVerify } from "../../../../../../chunks/index2.js";
const GET = async ({ url, cookies }) => {
  let session;
  {
    try {
      session = await authVerify(cookies);
    } catch (e) {
      return error(500, { error: e.message });
    }
    if (!session) {
      return error(403, { error: "Not logged in" });
    }
  }
  const req_url = sanitizeUrl(url.searchParams.get("url"));
  if (/^https?:\/\//.test(req_url) === false) {
    return error(500, { error: "Invalid URL" });
  }
  return new Response(await fetch(req_url).then((res) => res.text()));
};
export {
  GET
};
