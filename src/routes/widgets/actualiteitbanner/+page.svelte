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
	});

	function isRTLNieuws(title) {
		const rtlKeywords = ['rtl weer', 'rtl z', 'rtl nieuws', 'aflevering'];
		return rtlKeywords.some((keyword) => title.toLowerCase().includes(keyword));
	}
</script>

<div id="rss-feed">
	<h1>Nieuws</h1>
	<div class="banner">
		<div class="banner-content">
			{#each items as item}
				<h2>{item.title}</h2>●
			{/each}
		</div>
		<div class="banner-content">
			{#each items as item}
				<h2>{item.title}</h2>●
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
		color: #ffff;
		background-color: #27ae60;
		text-transform: uppercase;
		margin-right: 0;
		padding: 0.75rem;
		z-index: 1;
	}

	.banner {
		position: relative;
		flex-shrink: 0;
		display: flex;
		overflow: hidden;
		gap: 2rem;
		z-index: 1;
		padding: 1rem;
		border: 2px solid #27ae60;
	}

	.banner-content {
		position: relative;
		display: flex;
		flex-direction: row;
		gap: 2rem;
		flex-shrink: 0;
		animation: scroll 60s linear infinite;
	}

	@keyframes scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(calc(-100% - 0.5rem));
		}
	}

	/* .nieuws-container {
  display: flex;
  flex-wrap: nowrap;
  animation: marquee 30s linear infinite; 
}

.nieuws-item {
  margin-right: 1.5rem;
  white-space: nowrap;
}

@keyframes marquee {
  0% {
    transform: translateX(25%);
  }
  100% {
    transform: translateX(-100%);
  }
} */
</style>
