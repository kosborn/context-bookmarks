<script lang="ts">
	import '@corbado/webcomponent';
	import '@corbado/webcomponent/pkg/auth_cui.css';
	import { startRegistration, startAuthentication } from '@simplewebauthn/browser';

	import { onMount } from 'svelte';

	let resp;
	onMount((e) => {
		fetch(`/api/auth/register`).then((r) => {
			r.json().then((a) => {
				startAuthentication(a).then((authResults) => {
					console.log(authResults);
				});

				// let regResults = startRegistration(a);
				// console.log(regResults);
				//receiveRegistration(regResults);
			});
		});
	});

	const receiveRegistration = async (regResults) => {
		const resp = await fetch('/api/verify', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(regResults.detail)
		});
		console.log(await resp.json());
	};
</script>

{JSON.stringify(resp)}
