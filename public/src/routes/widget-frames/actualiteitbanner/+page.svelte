<script>
	import { onMount } from 'svelte';

	export let data;
	const xmlString = data.xmlString;

	let items = [];
	onMount(async () => {
		const parser = new DOMParser();
		const xmlDOM = parser.parseFromString(xmlString, 'text/xml');

		const rssItems = xmlDOM.querySelectorAll('item');

		items = Array.from(rssItems)
			.map((item) => ({
				title: item.querySelector('title').textContent
				// link: item.querySelector('link').textContent,
				// description: item.querySelector('description').textContent,
				// pubDate: item.querySelector('pubDate').textContent
			}))
			.filter((item) => !isRTLNieuws(item.title));

			setInterval(() => document.getElementById('currentTime').innerText = new Date().toLocaleTimeString(), 990);

			
	});

	function isRTLNieuws(title) {
		const rtlKeywords = ['rtl weer', 'rtl z', 'rtl nieuws', 'aflevering'];
		return rtlKeywords.some((keyword) => title.toLowerCase().includes(keyword));
	}
</script>

<svelte:head>
	<title>LiveWidgets Werktijden</title>
	<meta name="description" content="Actualiteits banner widget" />
</svelte:head>

<div id="rss-feed">
	<h1 id="currentTime"> </h1>
	<div class="banner">
		<div class="banner-content">
			{#each items as item}
				<h2>{item.title}</h2>
				-
			{/each}
		</div>
		<div class="banner-content">
			{#each items as item}
				<h2>{item.title}</h2>
				-
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

	#rss-feed {
		display: flex;
		overflow: hidden;
	}

	h1 {
		color: white;
		background-color: #404052;
		text-transform: uppercase;
		margin-right: 0;
		z-index: 1;
		padding: 0.3rem 0.6rem 0.3rem 0.6rem;
		font-size: 2rem;
		height: 3rem;
	}

	h2 {
		display: flex;
		justify-content: center;
		align-items: baseline;
		font-size: 2rem;
		padding: 0.2rem;
	}

	.banner {
		color: white;
		background-color: #1941A7;
		position: relative;
		flex-shrink: 0;
		display: flex;
		overflow: hidden;
		z-index: 1;
		font-size: 1.85rem;
		height: 3rem;
	}

	.banner-content {
		position: relative;
		display: flex;
		flex-direction: row;
		gap: 2rem;
		flex-shrink: 0;
		animation: scroll 100s linear infinite;
	}

	@keyframes scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(calc(-100% - 0.5rem));
		}
	}
</style>
