<script>
	import check from '$lib/assets/check.svg';
	// import qrcode from '$lib/assets/qr-code.svg';

	export let qrcodesrc;
</script>

<div>
	<img id="qr-code" src={qrcodesrc} alt="" width="170" height="170" />
	<img id="check" src={check} alt="" />
</div>

<style>
	div {
		display: grid;
		place-items: center;
		position: relative;
		margin: 6rem 0 auto 0;
	}
	#check {
		display: none;
		position: absolute;
	}
</style>
