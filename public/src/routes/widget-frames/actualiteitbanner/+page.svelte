<script>
	import { pusher } from '$lib/index.js';
	import { onMount } from 'svelte';

	export let data;

	$: headlines = data.data;
	onMount(() => {
		setInterval(
			() => (document.getElementById('currentTime').innerText = new Date().toLocaleTimeString()),
			990
		);

		const actualiteitChannel = pusher.subscribe('actualiteit-channel');

		actualiteitChannel.bind('update-actualiteit', (data) => {
			console.log(data);
			headlines = data.data;
		});
	});
</script>

<svelte:head>
	<title>LiveWidgets Werktijden</title>
	<meta name="description" content="Actualiteits banner widget" />
</svelte:head>

<div id="rss-feed">
	<h1 id="currentTime"></h1>
	<div class="banner">
		<div class="banner-content">
			{#each headlines as item}
				<h2>{item}</h2>
				<span>●</span>
			{/each}
		</div>
		<div class="banner-content">
			{#each headlines as item}
				<h2>{item}</h2>
				<span>●</span>
			{/each}
		</div>
	</div>
</div>

<style>
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		scroll-behavior: smooth;
	}

	span {
		display: flex;
		align-items: center;
		font-size: 0.8rem;
		margin: 0 1rem 0 1rem;
	}

	#rss-feed {
		position: relative;
		/* top: 2px; */
		/* height: fill-available; */
		display: flex;
		overflow: hidden;
		background-color: #524040;
	}

	h1 {
		color: white;
		text-transform: uppercase;
		font-size: 2rem;
		margin: auto 0.5rem auto 0.5rem;
		z-index: 1;
	}

	h2 {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 2rem;
	}

	.banner {
		color: white;
		background-color: #1941a7;
		position: relative;
		flex-shrink: 0;
		display: flex;
		overflow: hidden;
		z-index: 1;
		font-size: 1.85rem;
		height: calc(3rem + 2px);
	}

	.banner-content {
		position: relative;
		display: flex;
		flex-direction: row;
		flex-shrink: 0;
		animation: scroll 100s linear infinite;
	}

	@keyframes scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(calc(-100%));
		}
	}
</style>
