<script>
	import iphone from '$lib/assets/iphoneframe.png';
	import { QRcode, Koppelcode } from '$lib/index.js';

	export let koppelcode;
</script>

<div>
	<img src={iphone} alt="" />
	<div>
		<QRcode />
		<Koppelcode {koppelcode} />
	</div>
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
    div > div {
        margin-bottom: 2.2rem;
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
