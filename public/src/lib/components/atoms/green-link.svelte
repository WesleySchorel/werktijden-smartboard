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

	a:hover {
		opacity: 0.7;
	}

	a:hover img {
		padding-left: 0.7rem;
	}

	img {
		transition: 0.3s;
		height: 0.8rem;
		padding-left: 0.5rem;
	}
</style>