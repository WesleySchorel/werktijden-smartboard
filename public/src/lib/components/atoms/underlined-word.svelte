<script>
	import underline from '$lib/assets/underline.svg';

	export let content;
</script>

<span>{content}<img alt="" src={underline} /></span>

<style>
	span {
		display: inline-flex;
		flex-direction: column;
		width: fit-content;
	}
	span img {
		width: fit-content;
		z-index: -1;
	}
</style>
