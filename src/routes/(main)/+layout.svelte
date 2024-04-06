<script>
	import { fade } from 'svelte/transition';
	import '../../app.pcss';
	import { dev } from '$app/environment';

	import TagCloud from '@/nav/TagCloud.svelte';
	import SearchForm from '@/nav/SearchForm.svelte';
	import BookmarkCompact from '@/nav/BookmarkCompact.svelte';
	import Auth from '@/Auth/Auth.svelte';
	import NewBookmark from '@/nav/NewBookmark.svelte';

	import { Button } from '@/components/ui/button';

	import { LogOut, List, PlusCircle } from 'lucide-svelte';

	import { SESSION, USER, FAUNA, initializeSession, setFaunaClient, getSession } from '$lib/index';

	import { onMount } from 'svelte';
	import Corbado from '@corbado/webcomponent';
	import { PUBLIC_CORBADO_PROJECT_ID } from '$env/static/public';
	const corbadoSession = new Corbado.Session(PUBLIC_CORBADO_PROJECT_ID);
	corbadoSession.refresh((user) => console.log(user));

	let session;
	let authenticated = false;
	initializeSession().then((sess) => {
		console.log('sess', sess);
		session = sess;
		authenticated = sess.isAuthenticated;
	});

	onMount(() => {
		(function () {
			var script = document.createElement('script');
			script.src = 'https://analyze.corbado.com/assets/bundle.js';
			script.defer = true;
			var head = document.getElementsByTagName('head')[0];
			var done = false;

			script.onload = script.onreadystatechange = function () {
				if (
					!done &&
					(!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')
				) {
					done = true;
					tracking.visit({
						projectID: 'pro-1694494494712887582'
					});
					script.onload = script.onreadystatechange = null;
					head.removeChild(script);
				}
			};
			head.appendChild(script);
		})();
	});
</script>

<svelte:head>
	<title>Bookmark Manager</title>
</svelte:head>

{#if authenticated}
	<div class="container grid gap-6 px-4 md:grid-cols-[250px_1fr] md:px-6">
		<div class="flex flex-col gap-4">
			<div
				class="mt-2 flex items-center justify-between overflow-hidden rounded-xl bg-white bg-opacity-50"
			>
				<Button
					class="flex-inline ml-auto flex w-full gap-4 rounded-none"
					size="sm"
					variant="secondary"
					href="/"><List />List</Button
				>
				<NewBookmark />
			</div>
			<div>
				<h2 class="text-2xl font-bold text-white">Tags</h2>
				<TagCloud />
			</div>
			<div>
				<h2 class="mt-4 text-2xl font-bold text-white">Search</h2>
				<SearchForm />
			</div>
			<div>
				<h2 class="mt-4 text-2xl font-bold text-white">Bookmarks</h2>
				<BookmarkCompact />
			</div>
		</div>
		<div class="flex flex-col gap-4">
			<div class="flex items-center justify-between">
				<h1 class=" text-3xl font-bold tracking-tighter text-white sm:text-5xl">
					Bookmark Manager
				</h1>
				<div class="rounded-xl bg-white bg-opacity-50">
					<span class="px-3">{session.user.email || ''}</span>
					<Button size="icon" variant="destructive" on:click={session.logoff}>
						<LogOut class="h-4 w-4" />
					</Button>
				</div>
			</div>
			<slot />
		</div>
	</div>
{:else}
	<Auth />
{/if}
