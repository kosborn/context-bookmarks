

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(api)/_layout@.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.07_fDtYi.js","_app/immutable/chunks/disclose-version.BDr9Qe-U.js","_app/immutable/chunks/runtime.PSreMutw.js"];
export const stylesheets = [];
export const fonts = [];
