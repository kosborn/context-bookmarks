<script>
	import { Input } from '@/components/ui/input';
	import { Search } from 'lucide-svelte';
</script>

<form class="relative" method="POST" action="/test">
	<Search class="absolute left-2.5 top-2.5 h-4 w-4 text-gray-300" />
	<Input
		class="w-full appearance-none bg-white pl-8 shadow-none"
		placeholder="Filter bookmarks by tags..."
		type="search"
		name="search"
	/>
	<!-- <Input type="submit" /> -->
</form>
