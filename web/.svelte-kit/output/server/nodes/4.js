import * as server from '../entries/pages/(main)/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(main)/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(main)/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.CxPXU4-E.js","_app/immutable/chunks/disclose-version.BDr9Qe-U.js","_app/immutable/chunks/runtime.PSreMutw.js","_app/immutable/chunks/github-markdown.CASm2bYB.js","_app/immutable/chunks/index.ChcU8woL.js","_app/immutable/chunks/main-client.PbirmUuu.js"];
export const stylesheets = ["_app/immutable/assets/github-markdown.BxKBDjno.css"];
export const fonts = [];
