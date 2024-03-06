<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { pusher } from '$lib/index.js';

	const { dashboardKoppelcode } = $page.params;
	const presenceChannel = pusher.subscribe(`presence-${dashboardKoppelcode}`);

	function verstuur() {
		presenceChannel.trigger('client-change-setting', {
			settingId: '123',
			isTrue: true
		});
	}

	onMount(() => {
		presenceChannel.bind('client-change-setting', (data) => {
			alert(`setting ID: "${data.settingId}" is updated to "${data.isTrue}"`);
		});
	});
</script>

<h1>
	Widget overzicht voor dashboard: {dashboardKoppelcode}
</h1>

<button on:click={verstuur}>verstuuurrr!!!!!</button>
