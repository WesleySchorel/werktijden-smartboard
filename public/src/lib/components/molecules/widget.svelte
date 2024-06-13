<script>
	import { page } from '$app/stores';

	export let size;
	export let path;
</script>

<iframe
	style=""
	width={size.x}
	height={size.y}
	src="{$page.url.origin}/widget-frames/{path}"
	title={`${path} Widget`}
	frameborder="0"
></iframe>

<style>
	iframe {
		display: block;
		border-radius: var(--border-radius-widget);
		border: 5px solid transparent;
	}
</style>
