<script lang="ts">
	import { dev } from '$app/environment';
	import '@corbado/webcomponent';
	import '@corbado/webcomponent/pkg/auth_cui.css';

	import { PUBLIC_CORBADO_PROJECT_ID, PUBLIC_CORBADO_AUTH_CNAME } from '$env/static/public';
</script>

<corbado-auth isDevMode={dev} project-id={PUBLIC_CORBADO_PROJECT_ID} conditional="yes">
	<input name="username" id="corbado-username" required autocomplete="webauthn" />
</corbado-auth>
