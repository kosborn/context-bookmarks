<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';
	import { X } from 'lucide-svelte';
	import { Dialog as DialogPrimitive } from 'bits-ui';
	import * as Dialog from '.';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<DialogPrimitive.Close>
	<slot />
</DialogPrimitive.Close>
