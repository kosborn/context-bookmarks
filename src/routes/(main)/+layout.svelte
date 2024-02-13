<script>
	import { fade } from 'svelte/transition';
	import '../../app.pcss';

	import TagCloud from '@/nav/TagCloud.svelte';
	import SearchForm from '$lib/nav/SearchForm.svelte';
	import BookmarkCompact from '$lib/nav/BookmarkCompact.svelte';
	import Auth from '@/Auth.svelte';
	import NewBookmark from '@/nav/NewBookmark.svelte';

	import { Button } from '@/components/ui/button';

	import { LogOut, List, PlusCircle } from 'lucide-svelte';

	import { SESSION, USER } from '$lib/index';
</script>

{#if $USER}
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
					<span class="px-3">{$USER.email || ''}</span>
					<Button size="icon" variant="destructive" on:click={$SESSION.logout}>
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
