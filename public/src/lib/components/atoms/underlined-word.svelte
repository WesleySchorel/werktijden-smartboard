<script>
	import underline from '$lib/assets/underline.svg';

	export let content;
</script>

<span>{content}<img alt="" src={underline} /></span>

<style>
	span {
		display: flex;
		flex-direction: column;
		width: fit-content;
	}
	span img {
		width: fit-content;
	}
</style>
