<script>
	import iphone from '$lib/assets/iphone.svg';
	import { QRcode } from '$lib/index.js';

	export let qrcodesrc;
</script>

<div>
	<img src={iphone} alt="" width="320" height="576" />
	<QRcode {qrcodesrc} />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: end;
		position: relative;
		width: 20rem;
		height: 32rem;
	}
	img {
		position: absolute;
		top: 1rem;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
</style>
