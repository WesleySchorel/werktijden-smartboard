<script>
	import { QRcode, Koppelcode } from '$lib/index.js';
	import { onMount } from 'svelte';
	import { pusher } from '$lib/index.js';

	export let data;

	const generatedKoppelcode = data.koppelcode;

	const channel = pusher.subscribe(`private-${generatedKoppelcode}`);

	onMount(() => {
		channel.bind('client-setting-change', function (data) {
			alert(JSON.stringify(data));
		});
	});
</script>

<h1>Homepage</h1>

<QRcode />
<Koppelcode koppelcode={generatedKoppelcode} />

<a href="/overzicht">overzicht</a>
