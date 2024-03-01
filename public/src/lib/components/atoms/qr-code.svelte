<script>
	import check from '$lib/assets/check.svg';
</script>

<div>
	<p>qr-code</p>
	<img id="check" src={check} alt="" />
</div>

<style>
	div {
		display: grid;
		place-items: center;
		position: relative;
		margin: auto 0;
	}
	p {
		margin: auto;
	}
	img {
		display: none;
		position: absolute;
	}
</style>
