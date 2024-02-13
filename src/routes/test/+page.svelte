<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<form action="/api/verify" method="post">
	<input type="text" name="name" value="test" />
	<button type="submit">Submit</button>
</form>
