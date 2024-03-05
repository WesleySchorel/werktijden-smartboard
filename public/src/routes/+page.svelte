<script>
	import { UnderlinedWord, Button, KoppelMobile } from '$lib/index.js';
	import { onMount } from 'svelte';
	import { pusher } from '$lib/index.js';

	export let data;

	const generatedKoppelcode = data.koppelcode;
	const channel = pusher.subscribe(`private-${generatedKoppelcode.replace(/\s/g, '')}`);
	onMount(() => {
		channel.bind('client-setting-change', function (data) {
			alert(JSON.stringify(data));
		});
		channel.bind('join', async function () {
			const img = document.querySelector('#check');
			const qrcode = document.querySelector('#qr-code');
			img.classList.add('connected');
			qrcode.classList.add('fadeout');
			console.log(img);
			await delay(1500);
			window.location.href = generatedKoppelcode.replace(/\s/g, '');
		});
	});
	const delay = (ms) => new Promise((res) => setTimeout(res, ms));
</script>

<svelte:head>
	<title>LiveWidgets Werktijden</title>
	<meta name="description" content="Uitleg over het LiveWidgets dashboard van Werktijden.nl" />
</svelte:head>

<div>
	<section class="intro">
		<h1>
			Creeër overzicht met
			<UnderlinedWord content={'LiveWidgets'} />
		</h1>
		<p>
			Met de Werktijden LiveWidgets kan je eenvoudig een gepersonaliseerd dashboard maken voor op
			het grote scherm.
		</p>
		<Button content={'Probeer Gratis'} />
	</section>

	<KoppelMobile koppelcode={generatedKoppelcode} />
</div>

<a href="/overzicht">overzicht</a>

<style>
	div {
		display: flex;
		justify-content: space-between;
		max-width: 85rem;
		margin-inline: auto;
		margin-top: 6rem;
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
	}
	.intro {
		margin-top: 5rem;
		max-width: 30rem;
		color: #202020;
	}
	h1 {
		margin: 0 0 1rem 0;
		font-size: clamp(3.1rem, 13vw, 3.5rem);
		line-height: 110%;
	}
	p {
		margin: 0 0 2.5rem 0;
		font-size: 1.4rem;
	}

	@media screen and (max-width: 1221px) {
		div {
			align-items: center;
			flex-direction: column;
			max-width: none;
			gap: 4rem;
		}
		div *:not(h1, p) {
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: center;
		}
	}
	@media screen and (max-width: 720px) {
		div {
			margin-top: 3.5rem;
			align-items: normal;
		}
		.intro,
		p {
			display: flex;
			align-items: start;
		}
		div * {
			align-items: start;
			text-align: left;
		}
	}
</style>
