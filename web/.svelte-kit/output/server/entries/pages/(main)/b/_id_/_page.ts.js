import { i as initializeSession, f as faunaReady, F as FAUNA } from "../../../../../chunks/index2.js";
import { g as get_store_value } from "../../../../../chunks/index4.js";
import { fql, NullDocument } from "fauna";
const load = async ({ params }) => {
  const bookmarkId = params.id;
  if (!get_store_value(faunaReady)) {
    console.log("no session");
    await initializeSession();
  }
  const bookmarkPromise = get_store_value(FAUNA).query(fql`bookmarks.byId(id)`, {
    arguments: { id: bookmarkId }
  }).then((ret) => {
    if (ret.data instanceof NullDocument) {
      throw new Error(`Bookmark ${bookmarkId} not found`);
    }
    console.log(ret.data);
    return ret.data;
  }).catch((error) => {
    throw error;
  });
  return { bookmark: bookmarkPromise };
};
export {
  load
};
