<script>
	import { Intro, KoppelMobile, BulletInfo, Demo, CTA } from '$lib/index.js';
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
				console.log(generatedKoppelcode)
				goto(generatedKoppelcode);
			});
		});
	});
</script>

<svelte:head>
	<title>LiveWidgets Werktijden</title>
	<meta name="description" content="Uitleg over het LiveWidgets dashboard van Werktijden.nl" />
</svelte:head>

<div>
	<Intro />
	<KoppelMobile qrcodesrc={QRcodeSrc} koppelcode={generatedKoppelcode} />
	<BulletInfo />
	<!-- <Demo /> -->
	<CTA />
</div>

<div style="margin-bottom: 10rem;"></div>

<style>
	div {
		display: flex;
		justify-content: space-between;
		margin-inline: auto;
		margin-top: 4rem;
		align-items: center;
		flex-direction: column;
		max-width: none;
		gap: 0;
	}

	a {
		position: absolute;
		top: 1rem;
		left: 1rem;
	}

	@media screen and (max-width: 720px) {
		div {
			margin: 1rem;
		}

		div {
			margin: 0;
			align-items: normal;
		}
	}
</style>
