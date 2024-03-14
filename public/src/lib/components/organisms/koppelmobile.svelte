<script>
	import { Step, Iphone } from '$lib/index.js';

	export let koppelcode;
</script>

<div class="koppel-container">
	<Iphone {koppelcode} />
	<div class="steps">
		<Step
			step={'1'}
			heading={'QR-code'}
			text={'Scan deze qr-code om te starten met de koppeling.'}
		/>
		<Step
			step={'2'}
			heading={'Unieke koppelcode'}
			text={'Gebruik deze code om je mobiel met het dashboard te koppelen.'}
		/>
	</div>
</div>

<style>
	.koppel-container {
		display: flex;
		justify-content: center;
		height: 33rem;
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
