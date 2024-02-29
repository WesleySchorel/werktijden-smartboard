<script>
	import { goto } from '$app/navigation';
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
		channel.bind('client-join', function () {
			goto(`/${generatedKoppelcode.replace(/\s/g, '')}`);
		});
	});
</script>

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
		max-width: 80rem;
		margin-inline: auto;
		margin-top: 4rem;
	}
	.intro {
		margin-top: 5rem;
		max-width: 30rem;
	}
	h1 {
		margin: 0 0 1rem 0;
		font-size: 3.2rem;
	}
	p {
		margin: 0 0 2.5rem 0;
		font-size: 1.3rem;
	}

	@media screen and (max-width: 1170px) {
		div {
			align-items: center;
			flex-direction: column;
			max-width: none;
			gap: 7rem;
		}
		div * {
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: center;
		}
	}
	@media screen and (max-width: 720px) {
		div {
			margin: 1rem;
			align-items: normal;
		}
		div * {
			align-items: start;
			text-align: left;
		}
	}
</style>
