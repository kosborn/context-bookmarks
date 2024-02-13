<script lang="ts">
	import type { PageData } from '../routes/(auth)/auth/$types';
	import { redirect } from '@sveltejs/kit';

	import '@corbado/webcomponent';
	import '@corbado/webcomponent/pkg/auth_cui.css';

	import { PUBLIC_CORBADO_PROJECT_ID } from '$env/static/public';

	export let data: PageData;
</script>

<corbado-auth isDevMode={true} project-id={PUBLIC_CORBADO_PROJECT_ID} conditional="yes">
	<input name="username" id="corbado-username" required autocomplete="webauthn" />
</corbado-auth>
