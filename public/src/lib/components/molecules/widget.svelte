<script>
	import { page } from '$app/stores';
	import { sizes } from '$lib/index.js';

	export let size;
	export let path;

	$: sizeInPx = sizes.find(({ reference }) => reference === size);
</script>

<iframe
	width={sizeInPx.x}
	height={sizeInPx.y}
	src="{$page.url.origin}/widget-frames/{path}"
	title={`${path} Widget, size ${size}`}
	frameborder="1"
></iframe>
