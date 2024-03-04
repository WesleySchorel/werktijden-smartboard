<script>
	import { page } from '$app/stores';
	import { sizes } from '$lib/index.js';

	export let size;
	export let path;
	export let title;

	const sizeInPx = sizes.find(({ reference }) => reference === size);
</script>

<iframe
	width={sizeInPx.x}
	height={sizeInPx.y}
	src="{$page.url.origin}/widgets/{path}"
	{title}
	frameborder="1"
></iframe>
