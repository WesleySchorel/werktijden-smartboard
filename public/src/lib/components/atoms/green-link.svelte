<script>
    export let url, content
	import ArrowRight from '$lib/assets/arrow-right.svg';
</script>

<a href={url}>{content}<img src={ArrowRight} alt="" /></a>

<style>
	a {
		text-decoration: none;
		cursor: pointer;
		color: #009f66;
		font-size: 1.4rem;
	}

	img {
		height: 1rem;
		padding-left: 0.5rem;
	}
</style>