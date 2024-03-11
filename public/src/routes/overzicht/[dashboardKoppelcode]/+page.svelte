<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { pusher } from '$lib/index.js';
	import { enhance } from '$app/forms';
	import { Weer1, Analogeklok1, Actualiteitbanner, Widget, ListItem } from '$lib/index.js';

	const { dashboardKoppelcode } = $page.params;
	const presenceChannel = pusher.subscribe(`presence-${dashboardKoppelcode}`);

	let loading = false;

	onMount(() => {
		presenceChannel.bind('client-change-setting', (data) => {
			// alert(`Widget: "${data.path}", size "${data.size}" is updated to "${data.enabled}"`);
		});
	});
</script>

<h1>
	Widget overzicht voor dashboard: {dashboardKoppelcode}
</h1>

<form
	method="POST"
	action="?/update"
	use:enhance={() => {
		loading = true;
		return async ({ update }) => {
			loading = false;
			update({ reset: false });
		};
	}}
>
	<ListItem path={'weer-1'} size={'l'} />

	{#if loading}
		<div class="submit">
			<button class="submit"> Loading </button>
		</div>
	{:else}
		<button class="submit"> Opslaan </button>
	{/if}
</form>

<form
	method="POST"
	action="?/update"
	use:enhance={() => {
		loading = true;
		return async ({ update }) => {
			loading = false;
			update({ reset: false });
		};
	}}
>
	<ListItem path={'actualiteitbanner'} size={'banner'} />

	{#if loading}
		<div class="submit">
			<button class="submit"> Loading </button>
		</div>
	{:else}
		<button class="submit"> Opslaan </button>
	{/if}
</form>

<form
	method="POST"
	action="?/update"
	use:enhance={() => {
		loading = true;
		return async ({ update }) => {
			loading = false;
			update({ reset: false });
		};
	}}
>
	<ListItem path={'analogeklok-1'} size={'m'} />

	{#if loading}
		<div class="submit">
			<button class="submit"> Loading </button>
		</div>
	{:else}
		<button class="submit"> Opslaan </button>
	{/if}
</form>
