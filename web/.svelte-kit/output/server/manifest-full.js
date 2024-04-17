export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","placeholder.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.Z-Qtyrst.js","app":"_app/immutable/entry/app.4XAKCv6e.js","imports":["_app/immutable/entry/start.Z-Qtyrst.js","_app/immutable/chunks/entry.DT7XnUlp.js","_app/immutable/chunks/runtime.PSreMutw.js","_app/immutable/chunks/index.ChcU8woL.js","_app/immutable/entry/app.4XAKCv6e.js","_app/immutable/chunks/index.CncxOQDq.js","_app/immutable/chunks/index.ChcU8woL.js","_app/immutable/chunks/runtime.PSreMutw.js","_app/immutable/chunks/render.CzD__4ML.js","_app/immutable/chunks/disclose-version.BDr9Qe-U.js","_app/immutable/chunks/main-client.PbirmUuu.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		routes: [
			{
				id: "/(main)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/(api)/api/bookmarks/create",
				pattern: /^\/api\/bookmarks\/create\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/(api)/api/bookmarks/create/_server.ts.js'))
			},
			{
				id: "/(api)/api/bookmarks/get_url",
				pattern: /^\/api\/bookmarks\/get_url\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/(api)/api/bookmarks/get_url/_server.ts.js'))
			},
			{
				id: "/(api)/api/localAuth/auth",
				pattern: /^\/api\/localAuth\/auth\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/(api)/api/localAuth/auth/_server.ts.js'))
			},
			{
				id: "/(api)/api/localAuth/register",
				pattern: /^\/api\/localAuth\/register\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/(api)/api/localAuth/register/_server.ts.js'))
			},
			{
				id: "/(api)/api/localAuth/verify",
				pattern: /^\/api\/localAuth\/verify\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/(api)/api/localAuth/verify/_server.ts.js'))
			},
			{
				id: "/(main)/b",
				pattern: /^\/b\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(main)/b/[id]",
				pattern: /^\/b\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
