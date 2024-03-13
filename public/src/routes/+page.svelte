<script>
	import { Intro, KoppelMobile, BulletInfo, Demo, CTA,  } from '$lib/index.js';
	import { onMount } from 'svelte';
	import { pusher } from '$lib/index.js';
	import { goto } from '$app/navigation';

	export let data;

	const generatedKoppelcode = data.koppelcode;
	const presenceChannel = pusher.subscribe(`presence-${generatedKoppelcode.replace(/\s/g, '')}`);
	const delay = (ms) => new Promise((res) => setTimeout(res, ms));

	onMount(() => {
		presenceChannel.bind('pusher:member_added', async () => {
			const img = document.querySelector('#check');
			const qrcode = document.querySelector('#qr-code');

			img.classList.add('connected');
			qrcode.classList.add('fadeout');

			await delay(1000);
			goto(generatedKoppelcode.replace(/\s/g, ''));
		});
		presenceChannel.bind('client-change-setting', (data) => {
			alert(`setting ID: "${data.settingId}" is updated to "${data.isTrue}"`);
		});
	});
</script>

<svelte:head>
	<title>LiveWidgets Werktijden</title>
	<meta name="description" content="Uitleg over het LiveWidgets dashboard van Werktijden.nl" />
</svelte:head>

<div>
	<Intro />
	<KoppelMobile koppelcode={generatedKoppelcode} />
	<BulletInfo />
	<Demo />
	<CTA />
</div>

<a href="/overzicht">overzicht</a>

<div style="margin-bottom: 10rem;"></div>

<style>
	div {
		display: flex;
		justify-content: space-between;
		margin-inline: auto;
		margin-top: 4rem;
		font-family:
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			Oxygen,
			Ubuntu,
			Cantarell,
			'Open Sans',
			'Helvetica Neue',
			sans-serif;
		font-weight: 500;

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
