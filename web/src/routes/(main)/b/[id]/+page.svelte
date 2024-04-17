<script lang="ts">
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import { AlertCircle } from 'lucide-svelte';
	import * as Alert from '$lib/components/ui/alert';

	import BookmarkCard from '@/bookmark/Card.svelte';
	import { onMount } from 'svelte';

	import { FAUNA, USER, faunaReady, setFaunaClient, getSession } from '$lib/index';
	import { fql, NullDocument } from 'fauna';
	import { PUBLIC_CORBADO_PROJECT_ID } from '$env/static/public';
	import Corbado from '@corbado/webcomponent';

	export let data;

	// let bookmarkId = ;
	let previousBookmarkId;
</script>

{#await data.bookmark}
	<p>Loading...</p>
{:then bookmark}
	<div in:fade>
		<BookmarkCard {bookmark} />
	</div>
{:catch error}
	<Alert.Root variant="destructive">
		<AlertCircle class="h-4 w-4" />
		<Alert.Title>Error</Alert.Title>
		<Alert.Description>{error}</Alert.Description>
	</Alert.Root>
{/await}
