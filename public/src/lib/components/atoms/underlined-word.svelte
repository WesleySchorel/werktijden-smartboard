<script>
	import underline from '$lib/assets/underline.svg';

	export let content;
</script>

<span>{content}<img alt="" src={underline} width="307" height="15" /></span>

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
