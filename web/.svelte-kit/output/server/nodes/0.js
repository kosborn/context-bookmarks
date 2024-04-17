

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.CveWEt7o.js","_app/immutable/chunks/disclose-version.BDr9Qe-U.js","_app/immutable/chunks/runtime.PSreMutw.js","_app/immutable/chunks/render.CzD__4ML.js"];
export const stylesheets = [];
export const fonts = [];
