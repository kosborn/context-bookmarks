
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const AXIOM_TOKEN: string;
	export const AXIOM_ORG_ID: string;
	export const AXIOM_DATASET: string;
	export const CORBADO_API_SECRET: string;
	export const CORBADO_PROJECT_ID: string;
	export const OPENAI_API_KEY: string;
	export const STARSHIP_CACHE: string;
	export const MANPATH: string;
	export const TERM_PROGRAM: string;
	export const NODE: string;
	export const PYENV_ROOT: string;
	export const TERM: string;
	export const SHELL: string;
	export const SAVEHIST: string;
	export const MAXMIND_API_KEY: string;
	export const HISTSIZE: string;
	export const TMPDIR: string;
	export const HOMEBREW_REPOSITORY: string;
	export const CENSYS_KEY: string;
	export const TERM_PROGRAM_VERSION: string;
	export const TERM_SESSION_ID: string;
	export const GITHUB_API_TOKEN: string;
	export const SHOW_AWS_PROMPT: string;
	export const GITHUB_BOT_ACCESS_TOKEN: string;
	export const npm_config_local_prefix: string;
	export const USER: string;
	export const CASE_SENSITIVE: string;
	export const COMMAND_MODE: string;
	export const SSH_AUTH_SOCK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_execpath: string;
	export const PAGER: string;
	export const AWS_PROFILE: string;
	export const JFROG_AUTH_TOKEN: string;
	export const LSCOLORS: string;
	export const PATH: string;
	export const _: string;
	export const LaunchInstanceID: string;
	export const npm_package_json: string;
	export const __CFBundleIdentifier: string;
	export const PWD: string;
	export const npm_lifecycle_event: string;
	export const npm_package_name: string;
	export const LANG: string;
	export const ITERM_PROFILE: string;
	export const XPC_FLAGS: string;
	export const KAGI_API_KEY: string;
	export const npm_package_version: string;
	export const XPC_SERVICE_NAME: string;
	export const COLORFGBG: string;
	export const SHLVL: string;
	export const HOME: string;
	export const PYENV_SHELL: string;
	export const LC_TERMINAL_VERSION: string;
	export const HOMEBREW_PREFIX: string;
	export const ATUIN_HISTORY_ID: string;
	export const ITERM_SESSION_ID: string;
	export const LESS: string;
	export const LOGNAME: string;
	export const ATUIN_SESSION: string;
	export const BUN_INSTALL: string;
	export const npm_config_user_agent: string;
	export const PROMPT_EOL_MARK: string;
	export const HOMEBREW_CELLAR: string;
	export const INFOPATH: string;
	export const DISPLAY: string;
	export const LC_TERMINAL: string;
	export const SECURITYSESSIONID: string;
	export const COLORTERM: string;
	export const npm_node_execpath: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	export const PUBLIC_CORBADO_PROJECT_ID: string;
	export const PUBLIC_READ_ALL: string;
	export const PUBLIC_CORBADO_AUTH_CNAME: string;
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		AXIOM_TOKEN: string;
		AXIOM_ORG_ID: string;
		AXIOM_DATASET: string;
		CORBADO_API_SECRET: string;
		CORBADO_PROJECT_ID: string;
		OPENAI_API_KEY: string;
		STARSHIP_CACHE: string;
		MANPATH: string;
		TERM_PROGRAM: string;
		NODE: string;
		PYENV_ROOT: string;
		TERM: string;
		SHELL: string;
		SAVEHIST: string;
		MAXMIND_API_KEY: string;
		HISTSIZE: string;
		TMPDIR: string;
		HOMEBREW_REPOSITORY: string;
		CENSYS_KEY: string;
		TERM_PROGRAM_VERSION: string;
		TERM_SESSION_ID: string;
		GITHUB_API_TOKEN: string;
		SHOW_AWS_PROMPT: string;
		GITHUB_BOT_ACCESS_TOKEN: string;
		npm_config_local_prefix: string;
		USER: string;
		CASE_SENSITIVE: string;
		COMMAND_MODE: string;
		SSH_AUTH_SOCK: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_execpath: string;
		PAGER: string;
		AWS_PROFILE: string;
		JFROG_AUTH_TOKEN: string;
		LSCOLORS: string;
		PATH: string;
		_: string;
		LaunchInstanceID: string;
		npm_package_json: string;
		__CFBundleIdentifier: string;
		PWD: string;
		npm_lifecycle_event: string;
		npm_package_name: string;
		LANG: string;
		ITERM_PROFILE: string;
		XPC_FLAGS: string;
		KAGI_API_KEY: string;
		npm_package_version: string;
		XPC_SERVICE_NAME: string;
		COLORFGBG: string;
		SHLVL: string;
		HOME: string;
		PYENV_SHELL: string;
		LC_TERMINAL_VERSION: string;
		HOMEBREW_PREFIX: string;
		ATUIN_HISTORY_ID: string;
		ITERM_SESSION_ID: string;
		LESS: string;
		LOGNAME: string;
		ATUIN_SESSION: string;
		BUN_INSTALL: string;
		npm_config_user_agent: string;
		PROMPT_EOL_MARK: string;
		HOMEBREW_CELLAR: string;
		INFOPATH: string;
		DISPLAY: string;
		LC_TERMINAL: string;
		SECURITYSESSIONID: string;
		COLORTERM: string;
		npm_node_execpath: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		PUBLIC_CORBADO_PROJECT_ID: string;
		PUBLIC_READ_ALL: string;
		PUBLIC_CORBADO_AUTH_CNAME: string;
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
