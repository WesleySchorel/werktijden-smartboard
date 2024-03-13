<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { pusher, availableWidgets } from '$lib/index.js';
	import { enhance } from '$app/forms';
	import { ListItem } from '$lib/index.js';

	// console.log(availableWidgets);
	export let data;

	const dashboardSettings = data.dashboardSettings[0].enabledSettings;

	const { dashboardKoppelcode } = $page.params;
	const presenceChannel = pusher.subscribe(`presence-${dashboardKoppelcode}`);
	let enabledSettings;

	// console.log(dashboardSettings);

	onMount(() => {
		presenceChannel.bind('pusher:subscription_succeeded', () => {
			presenceChannel.trigger('client-request-data', {});
		});
	});
</script>

<h1>
	Widget overzicht voor dashboard: {dashboardKoppelcode}
</h1>

{#each availableWidgets as availableWidget}
	<ListItem
		title={availableWidget.title}
		size={availableWidget.size}
		path={availableWidget.path}
		checked={dashboardSettings.find((e) => e === availableWidget.path)}
	/>
{/each}
