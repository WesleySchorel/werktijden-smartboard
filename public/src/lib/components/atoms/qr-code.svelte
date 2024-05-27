<script>
	import check from '$lib/assets/check.svg';
	import { qr } from '@svelte-put/qr/svg';
	export let qrcodesrc;
</script>

<div>
	<svg
		id="qr-code"
		use:qr={{
			data: `${qrcodesrc}`,
			logo: 'werktijden-logo.svg'
		}}
	/>
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
	svg {
		width: 180px;
		height: 180px;
	}
</style>
