<script>
	import iphone from '$lib/assets/iphoneframe.png';
	import { QRcode, Koppelcode } from '$lib/index.js';

	export let koppelcode;
</script>

<div>
	<img src={iphone} alt="" />
	<QRcode />
	<Koppelcode {koppelcode} />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: end;
		position: relative;
		width: 20rem;
		height: 36rem;
	}
	img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
</style>
