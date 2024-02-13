<script lang="ts">
	import { enhance } from '$app/forms';
	import { PlusCircle } from 'lucide-svelte';
	import { writable } from 'svelte/store';

	import * as Dialog from '$lib/components/ui/dialog';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Button } from '$lib/components/ui/button';
	import SvelteMarkdown from 'svelte-markdown';

	import 'github-markdown-css/github-markdown.css';

	import { OpenAIStream } from 'ai';

	let md = `"### Summary:
This page provides a list of updated FIDO2/WebAuthn libraries categorized by programming languages, including Rust, TypeScript, Java, .NET, Go, Python, and Ruby.

### Requirements/Instructions:
N/A

### Details:
- The page is divided into two sections: "Updated for passkeys" and "Other FIDO2/WebAuthn libraries."
- Under the "Updated for passkeys" section, there are three libraries listed:
  - Rust:
    - [webauthn_rs](https://docs.rs/webauthn-rs/latest/webauthn_rs/): A WebAuthn library for Rust server applications.
  - TypeScript:
    - [SimpleWebAuthn](https://simplewebauthn.dev/): A library for implementing WebAuthn in TypeScript.
  - Java:
    - [java-webauthn-server](https://github.com/Yubico/java-webauthn-server): A library provided by Yubico for implementing WebAuthn in Java.
- The "Other FIDO2/WebAuthn libraries" section provides links to additional libraries in different programming languages:
  - .NET: 
    - [FIDO2 .NET Library](https://fido2-net-lib.passwordless.dev/): A library for FIDO2 and WebAuthn in .NET.
  - Go:
    - [Go WebAuthn Library](https://github.com/go-webauthn/webauthn): A fork of the Duo Labs library for implementing WebAuthn in Go.
  - Java:
    - [WebAuthn4J](https://github.com/webauthn4j/webauthn4j): A library for WebAuthn in Java.
  - Python:
    - [py_webauthn](https://github.com/duo-labs/py_webauthn): A library for WebAuthn in Python by Duo Labs.
  - Ruby:
    - [webauthn-ruby](https://github.com/cedarcode/webauthn-ruby): A library for WebAuthn in Ruby provided by Cedarcode.
    - [devise-passkeys](https://github.com/ruby-passkeys/devise-passkeys): A wrapper around webauthn-ruby for Devise integration.
    - [warden-webauthn](https://github.com/ruby-passkeys/warden-webauthn): A wrapper around webauthn-ruby for Warden integration.

### Other Links:
N/A

Tags:
- #FIDO2
- #WebAuthn
- #libraries
- #Rust
- #TypeScript
- #Java
- #.NET
- #Go
- #Python
- #Ruby

Category:
- Library Resources"`;

	let message = writable('');
	import * as Form from '$lib/components/ui/form';

	import { Readability } from '@mozilla/readability';
	import TurndownService from 'turndown';
	import { get_encoding } from 'tiktoken';
	import { Progress } from '$lib/components/ui/progress';

	// create state ENUM here
	type USER_INPUT =
		| 'IDLE'
		| 'LOADING'
		| 'PROCESSING'
		| 'STREAMING'
		| 'ERROR'
		| 'SUCCESS'
		| 'PREVIEW';
	const PROGRESS = {
		IDLE: 0,
		ERROR: 50,
		LOADING: 25,
		PROCESSING: 50,
		OPENAI: 75,
		SUCCESS: 100,
		PREVIEW: 100
	};
	let ERROR_REASON = '';
	let FORM_DISABLED = () => !['IDLE', 'SUCCESS', 'ERROR'].includes(state);

	let form;
	let urlInput;
	let dialog;
	let state: USER_INPUT = 'IDLE';
	let results = writable('');

	const parser = new DOMParser();
	const turndownService = new TurndownService();

	const tokenizer = get_encoding('cl100k_base');

	const formSubmit = async (e) => {
		let id = Number(new Date());

		state === 'IDLE';
		e.preventDefault();

		try {
			state = 'LOADING';
			const res = await fetch(`/api/bookmarks/get_url?url=${urlInput}`);
			if (!res.ok) {
				state = 'ERROR';
				throw new Error(
					'Network response was not ok, code: ' + res.status + ', reason: ' + res.statusText
				);
			}

			state = 'PROCESSING';

			const htmlString = await res.text();
			const parsed = parser.parseFromString(htmlString, 'text/html');
			let article = Object(new Readability(parsed).parse());

			let md = turndownService.turndown(article['content']);
			article['markdown'] = md;

			let tokenLength = tokenizer.encode(md).length;

			state = 'STREAMING';

			let createRequest = await fetch(`/api/bookmarks/create`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(article)
			});
			readFromStream(createRequest.body.getReader(), id).then(() => {
				state = 'SUCCESS';
			});
		} catch (err) {
			state = 'ERROR';
			ERROR_REASON = err;
			console.error('Error:', err);
		}
	};

	export async function readFromStream(reader, id) {
		try {
			const { done, value } = await reader.read();
			if (done) {
				return;
			}

			$results = $results + new TextDecoder().decode(value);

			readFromStream(reader, id);
		} catch (error) {
			throw new Error(`${error}`);
		}
	}
</script>

<Dialog.Root>
	<Dialog.Trigger
		class="flex-inline flex h-full w-full flex-row items-center justify-center gap-4 rounded-none bg-green-500"
	>
		<PlusCircle />New
	</Dialog.Trigger>
	<Dialog.Overlay class="bg-background/20" />
	<Dialog.Content
		class="dialogContent top-[50%] {state === 'SUCCESS'
			? 'w-[90%] sm:max-w-[925px]'
			: 'w-[50%] sm:max-w-[525px]'} max-h-screen overflow-y-auto transition-all duration-300"
	>
		<div class="formElement" data-state={state}>
			<Dialog.Header>
				<Dialog.Title>Create New Bookmark</Dialog.Title>
				<Dialog.Description>Submit a URL to generate a new bookmark.</Dialog.Description>
			</Dialog.Header>
			<div class="grid gap-4 py-4">
				<div class=" items-center">
					<Input id="url" placeholder="https://...." bind:value={urlInput} />
				</div>
			</div>
			<Dialog.Footer>
				<Button type="submit" on:click={formSubmit} disabled={FORM_DISABLED()}>Submit URL</Button>
			</Dialog.Footer>
		</div>
		<div class:hidden={state === 'IDLE'}>
			<Progress
				value={PROGRESS[state]}
				class="drop-shadow-md {state === 'ERROR' ? 'animate-bounce bg-red-500' : ''}"
			/>
			{#if state === 'ERROR'}
				{ERROR_REASON}
			{/if}
		</div>
		<div class:hidden={state !== 'SUCCESS' && state !== 'OPENAI'}>
			<div class="float-right">
				<Dialog.Close>
					<Button>Save</Button>
				</Dialog.Close>
				<Dialog.Close>
					<Button variant="destructive">Close</Button>
				</Dialog.Close>
			</div>
			<div class="markdown-body h-auto w-full rounded-sm border-gray-700 bg-gray-200 p-5">
				<SvelteMarkdown source={$results} />
			</div>
		</div>
	</Dialog.Content>
</Dialog.Root>

<style>
	.formElement {
		opacity: 1;
		height: auto;
		transition: 1000ms ease-in-out;
	}

	.formElement[data-state='IDLE'] {
		opacity: 1;
	}

	.formElement[data-state='LOADING'] {
		opacity: 0.5;
	}

	.formElement[data-state='PROCESSING'] {
		opacity: 0.5;
	}

	.formElement[data-state='OPENAI'] {
		opacity: 0.5;
	}

	.formElement[data-state='ERROR'] {
		opacity: 1;
	}

	.formElement[data-state='SUCCESS'] {
		opacity: 0;
		transform: scaleY(-100%);
		animation-duration: 500ms;
		height: 0px;
		/* @apply -translate-y-full; */
	}

	.dialog[data-state='SUCCESS'] {
		opacity: 0.25;
		/* @apply -translate-y-full; */
	}
</style>
