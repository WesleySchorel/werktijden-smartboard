<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	import { pusher } from '$lib/index.js';

	const { dashboardKoppelcode } = $page.params;
	const channel = pusher.subscribe(`private-${dashboardKoppelcode}`);

	function verstuur() {
		channel.trigger('client-setting-change', {
			message: 'a client changed a setting on this channel'
		});
	}

	onMount(() => {
		// channel.trigger('client-join', { join: true });

		channel.bind('client-setting-change', function (data) {
			alert(JSON.stringify(data));
		});
	});
</script>

<h1>
	Widget overzicht voor dashboard: {dashboardKoppelcode}
</h1>

<button on:click={verstuur}>verstuuurrr!!!!!</button>
