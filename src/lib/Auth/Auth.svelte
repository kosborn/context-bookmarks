<script lang="ts">
	import { dev } from '$app/environment';

	import AuthLocal from './AuthLocal.svelte';
	import Corbado from './Corbado.svelte';
</script>

{#if dev}
	<AuthLocal />
{:else}
	<Corbado />
{/if}
