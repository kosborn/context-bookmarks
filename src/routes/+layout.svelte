<script lang="ts">
	import { onMount } from 'svelte';

	import '../app.pcss';
	import type { LayoutData } from './$types';

	import { page } from '$app/stores';

	let data: LayoutData;
</script>

<section>
	<slot />
</section>
