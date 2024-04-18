<script>
	import { page } from '$app/stores';
	// import { sizes } from '$lib/index.js';

	// export let size;
	export let x;
	export let y;
	export let path;

	const defaultPixels = 50;

	// $: sizeInPx = sizes.find(({ reference }) => reference === size);
</script>

{#if x === 'full' && y === 'full'}
	<iframe
		style="position: absolute; bottom: 0; left: 0"
		width="100%"
		height="100%"
		src="{$page.url.origin}/widget-frames/{path}"
		title={`${path} Widget`}
		frameborder="0"
	></iframe>
{:else if x === 'full'}
	<iframe
		style="position: absolute; bottom: 0; left: 0"
		width="100%"
		height={defaultPixels * y}
		src="{$page.url.origin}/widget-frames/{path}"
		title={`${path} Widget`}
		frameborder="0"
	></iframe>
{:else if y === 'full'}
	<iframe
		style="position: absolute; bottom: 0; left: 0"
		width={defaultPixels * x}
		height="100%"
		src="{$page.url.origin}/widget-frames/{path}"
		title={`${path} Widget`}
		frameborder="0"
	></iframe>
{:else}
	<iframe
		style="margin: .6rem;"
		width={defaultPixels * x}
		height={defaultPixels * y}
		src="{$page.url.origin}/widget-frames/{path}"
		title={`${path} Widget`}
		frameborder="0"
	></iframe>
{/if}
