<script lang="ts">
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import { AlertCircle } from 'lucide-svelte';
	import * as Alert from '$lib/components/ui/alert';

	import BookmarkCard from '@/bookmark/Card.svelte';

	export let data;
	let resolvedBookmark = data.bookmark;
</script>

{#await data.bookmark}
	<p>Loading...</p>
{:then resolvedBookmark}
	<div transition:fade>
		<BookmarkCard bookmark={resolvedBookmark} />
	</div>
{:catch error}
	<Alert.Root variant="destructive">
		<AlertCircle class="h-4 w-4" />
		<Alert.Title>Error</Alert.Title>
		<Alert.Description>{error}</Alert.Description>
	</Alert.Root>
{/await}
