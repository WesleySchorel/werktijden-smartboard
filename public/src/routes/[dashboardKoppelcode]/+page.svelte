<script>
	import { page } from '$app/stores';
	import { Weer1, Analogeklok1, Actualiteitbanner } from '$lib/index.js';

	import { pusher } from '$lib/index.js';
	import { onMount } from 'svelte';

	const { dashboardKoppelcode } = $page.params;
	const presenceChannel = pusher.subscribe(`presence-${dashboardKoppelcode}`);

	onMount(() => {
		presenceChannel.bind('client-change-setting', (data) => {
			alert(`setting ID: "${data.settingId}" is updated to "${data.isTrue}"`);
		});
	});
</script>

<h1>
	Dashboard: {dashboardKoppelcode}
</h1>

<Weer1 size={'l'} path={'weer-1'} title={'Weer 1 widget'} />
<Analogeklok1 size={'m'} path={'analogeklok-1'} title={'Analoge klok 1 widget'} />
<Actualiteitbanner size={'banner'} path={'actualiteitbanner'} title={'Actualiteitbanner widget'} />
