<script>
	import { PipeHeading, QRcode } from '$lib/index.js';
	import werktijden from '$lib/assets/werktijden-green.svg';
	import Check from '$lib/assets/check.svg';

	export let koppelcode;
	export let qrcodesrc;
</script>

<div class="koppel-container">
	<ol>
		<img src={werktijden} alt="" />
		<li>
			<PipeHeading heading={'Scan qr-code'} />
			Scan de qr-code om uw apparaten te koppelen.
		</li>
		<li>
			<PipeHeading heading={'Activeer widgets'} />
			Stel de widgets handmatig in of activeer een template.
		</li>
	</ol>
	<div class="qr-border">
		<div id="qr-code">
			<QRcode {qrcodesrc} {koppelcode} />
		</div>
		<img id="check" src={Check} alt="" />
	</div>
</div>

<style>
	.qr-border {
		position: relative;
	}
	#check {
		display: none;
		height: 10rem;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.koppel-container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: auto;
		width: 100%;

		gap: 4rem;
		color: #333333;
	}

	img {
		height: 3rem;
		margin-bottom: 1rem;
	}

	li {
		font-size: 1.5rem;
		list-style: none;
		margin-bottom: 2rem;
		width: 20ch;
		color: #888888;
	}

	@media screen and (max-width: 720px) {
		.koppel-container {
			flex-direction: column;
			margin-inline: auto;
			gap: 2rem;
			overflow: inherit;
			padding: 5rem 0;
		}
	}
</style>
