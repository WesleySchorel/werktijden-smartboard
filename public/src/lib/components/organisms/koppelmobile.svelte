<script>
	import { Step, Iphone } from '$lib/index.js';

	export let koppelcode;
	export let qrcodesrc;
</script>

<div class="koppel-container">
	<Iphone {qrcodesrc} {koppelcode} />
	<div class="steps">
		<Step
			heading={'QR-code'}
			text={'Scan deze qr-code om te koppelen met het dashboard.'}
		/>
	</div>
</div>

<style>
	.koppel-container {
		display: flex;
		justify-content: center;
		height: 23rem;
		overflow: hidden;
		gap: 1rem;

		padding-top: 2.5rem;
		width: 90vw;
		background-color: rgba(199, 232, 216, 0.2);
		border-radius: 2rem;
	}

	.steps {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		text-align: left;
		margin-bottom: 2.5rem;
	}

	@media screen and (max-width: 720px) {
		.steps {
			padding: 0 1rem 0 1rem;
			margin: 0;
			gap: 2rem;
		}
		.koppel-container {
			flex-direction: column-reverse;
			margin-inline: auto;
			gap: 2rem;
			height: auto;
			overflow: inherit;
		}
	}
</style>
