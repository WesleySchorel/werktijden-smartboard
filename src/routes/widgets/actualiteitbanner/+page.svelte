<script>
	import { onMount } from 'svelte';

	export let data;
	const xmlString = data.xmlString;

    let items = [];
	onMount(async () => {
		const parser = new DOMParser();
		const xmlDOM = parser.parseFromString(xmlString, 'text/xml');

		const rssItems = xmlDOM.querySelectorAll('item');
        
		items = Array.from(rssItems).map((item) => ({
			title: item.querySelector('title').textContent,
			link: item.querySelector('link').textContent,
			description: item.querySelector('description').textContent,
			pubDate: item.querySelector('pubDate').textContent
		}));
	});
</script>

<h1>Laatste nieuws</h1>
<div id="rss-feed">
	{#each items as item}
		<div>
			<h2>{item.title}</h2>
		</div>
	{/each}
</div>
