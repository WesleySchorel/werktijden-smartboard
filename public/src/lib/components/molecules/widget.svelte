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
		border-radius: 18px;
		border: 3px solid transparent;
	}
</style>
