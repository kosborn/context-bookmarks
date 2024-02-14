<script>
	import { Button } from '@/components/ui/button';
	import { Star, ChevronRight, ListOrdered } from 'lucide-svelte';
	import { PUBLIC_READ_ALL } from '$env/static/public';
	import { writable } from 'svelte/store';

	import { fql } from 'fauna';
	import { FAUNA } from '$lib/index';
	import { onMount } from 'svelte';

	let bookmarkList = [];

	$FAUNA.query(fql`bookmarks.all()`, { format: 'simple' }).then((ret) => {
		bookmarkList = [...ret.data.data, ...bookmarkList];
		bookmarkList = bookmarkList.filter((a) => a);
	});
</script>

<div class="mt-2 flex items-center justify-between">
	<Button size="icon" variant="secondary">
		<ListOrdered class="h-4 w-4" />
		<span class="sr-only">Order by date</span>
	</Button>
	<Button class="justify-start gap-2" size="sm" variant="secondary">
		<Star class="h-4 w-4" />
		Favorites
	</Button>
</div>
<div class="mt-4 space-y-2">
	{#each bookmarkList as bookmark}
		<a class="flex items-center justify-between text-sm text-white" href="/b/{bookmark.id}">
			<div>
				<div class="font-medium">{bookmark.title}</div>
				<div class="text-xs">Domain: {new URL(bookmark.url).host}</div>
				<div class="text-xs">Category: {bookmark.category}</div>
			</div>
			<ChevronRight class="h-4 w-4" />
		</a>
	{/each}
</div>
