<script>
  import { onMount } from 'svelte';

  let items = [];

  onMount(async () => {
    const proxyURL = 'https://cors-anywhere.herokuapp.com/';
    const rssURL = 'https://www.rtlnieuws.nl/rss.xml';
    const fullURL = proxyURL + rssURL;

    try {
      const response = await fetch(fullURL);
      const xmlString = await response.text();
      const parser = new DOMParser();
      const xmlDOM = parser.parseFromString(xmlString, 'text/xml');
      const rssItems = xmlDOM.querySelectorAll('item');

      items = Array.from(rssItems).map(item => ({
        title: item.querySelector('title').textContent,
        link: item.querySelector('link').textContent,
        description: item.querySelector('description').textContent,
        pubDate: item.querySelector('pubDate').textContent
      }));
    } catch (error) {
      console.error('Oh nee! Error fetching RSS feed:', error);
    }
  });
</script>

<h1>Laatste nieuws</h1>
<div id="rss-feed">
  {#each items as item}
    <div>
      <h2><a href={item.link} target="_blank">{item.title}</a></h2>
      <p>{item.description}</p>
      <p>Publicatiedatum: {item.pubDate}</p>
    </div>
  {/each}
</div>