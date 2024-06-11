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
</div>

<style>
	div {
		display: flex;
	}
	svg {
		width: 280px;
		height: 280px;
		background-color: white;
		border: 6px solid #333333;
	}
</style>
