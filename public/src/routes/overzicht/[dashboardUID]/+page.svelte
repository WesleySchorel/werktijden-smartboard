<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	
	import { pusher } from '$lib/index.js';

	const channel = pusher.subscribe('private-channel');
	function verstuur() {
		channel.trigger('client-my-event', { message: 'dooooeiiii' });
	}

	onMount(() => {
		channel.bind('client-my-event', function (data) {
			alert(JSON.stringify(data));
		});
	});
</script>

<h1>
	Widget overzicht voor dashboard: {$page.params.dashboardUID}
</h1>

<button on:click={verstuur}>verstuuurrr!!!!!</button>
