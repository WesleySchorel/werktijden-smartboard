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
		border-radius: 20px;
		border: 4px solid transparent;
	}
</style>
