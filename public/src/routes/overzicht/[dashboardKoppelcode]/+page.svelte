<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { pusher } from '$lib/index.js';
	import { enhance } from '$app/forms';
	import { ListItem } from '$lib/index.js';

	const { dashboardKoppelcode } = $page.params;
</script>

<h1>
	Widget overzicht voor dashboard: {dashboardKoppelcode}
</h1>

<ListItem path={'weer-1'} size={'l'} />
<ListItem path={'analogeklok-1'} size={'m'} />
<ListItem path={'actualiteitbanner'} size={'banner'} />
