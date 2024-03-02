<script>
	import check from '$lib/assets/check.svg';
	import placeholderqrcode from '$lib/assets/placeholder_qr-code.svg';
</script>

<div>
	<img id="qr-code" src={placeholderqrcode} alt="" />
	<img id="check" src={check} alt="" />
</div>

<style>
	div {
		display: grid;
		place-items: center;
		position: relative;
		margin: auto 0;
	}
	#check {
		display: none;
		position: absolute;
	}
</style>
