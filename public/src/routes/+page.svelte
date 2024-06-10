<script>
	import { KoppelMobile } from '$lib/index.js';
	import { onMount } from 'svelte';
	import { pusher } from '$lib/index.js';
	import { goto } from '$app/navigation';

	export let data;

	const generatedKoppelcode = data.koppelcode;
	const QRcodeSrc = data.QRcodeSrc;
	const delay = (ms) => new Promise((res) => setTimeout(res, ms));

	onMount(() => {
		console.log(generatedKoppelcode);
		const presenceChannel = pusher.subscribe(`presence-${generatedKoppelcode.replace(/\s/g, '')}`);
		presenceChannel.bind('pusher:subscription_succeeded', () => {
			presenceChannel.bind('pusher:member_added', async () => {
				const img = document.querySelector('#check');
				const qrcode = document.querySelector('#qr-code');

				img.classList.add('connected');
				qrcode.classList.add('fadeout');

				await delay(500);
				console.log(generatedKoppelcode);
				goto(generatedKoppelcode);
			});
		});
	});
</script>

<svelte:head>
	<title>LiveWidgets Werktijden</title>
	<meta name="description" content="Koppel met het Werktijden Smartboard." />
</svelte:head>

	<KoppelMobile qrcodesrc={QRcodeSrc} koppelcode={generatedKoppelcode} />
