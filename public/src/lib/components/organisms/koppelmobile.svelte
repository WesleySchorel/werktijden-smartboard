<script>
	import { PipeHeading, QRcode } from '$lib/index.js';
	import werktijden from '$lib/assets/werktijden.svg';

	export let koppelcode;
	export let qrcodesrc;
</script>

<div class="werktijden">
	<div class="koppel-container">
		<ol>
			<img id="check" src={werktijden} alt="" />
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
			<QRcode {qrcodesrc} {koppelcode} />
		</div>
	</div>
</div>

<style>
	.werktijden {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background-color: var(--c-primary-werktijden);
	}

	.koppel-container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		width: 100vw;

		border: 12px solid var(--c-primary-werktijden);
		border-radius: 24px;

		gap: 4rem;
		color: #333333;
		background-color: #333333;
	}

	.qr-border {
		border: 6px solid white;
	}

	img {
		height: 3rem;
		margin-bottom: 1rem;
	}

	li {
		font-size: clamp(0.75rem, 1vw + 0.5rem, 1.25rem);
		list-style: none;
		margin-bottom: 2rem;
		width: 20ch;
		color: #d2d2d2;
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
