<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { pusher } from '$lib/index.js';
	import { enhance } from '$app/forms';
	import { ListItem } from '$lib/index.js';

	const { dashboardKoppelcode } = $page.params;
	const presenceChannel = pusher.subscribe(`presence-${dashboardKoppelcode}`);
	let enabledSettings;

	onMount(() => {
		presenceChannel.bind('pusher:subscription_succeeded', () => {
			presenceChannel.trigger('client-request-data', {});
		});
	});
</script>

<h1>
	Widget overzicht voor dashboard: {dashboardKoppelcode}
</h1>

<ListItem path={'weer-1'} size={'l'} {enabledSettings} />
<ListItem path={'analogeklok-1'} size={'m'} {enabledSettings} />
<ListItem path={'actualiteitbanner'} size={'banner'} {enabledSettings} />
