<script>
	import arrow from '$lib/assets/arrow.svg';

	import { StepBlock, StepHeading, StepText } from '$lib/index.js';
	export let step;
	export let heading;
	export let text;
</script>

<section>
	<div>
		<StepBlock {step} />
		<StepHeading {heading} />
	</div>
	<StepText {text} />
	<img src={arrow} alt="" width="90" height="63" border="0"/>
</section>

<style>
	div {
		display: flex;
		align-items: flex-end;
		gap: 0.5rem;
		margin-bottom: 0.5rem;
	}
	section {
		padding-right: 0rem;
		max-width: 19rem;
	}

	img {
		transform: rotate(5deg);
		opacity: 0.35;
	}

	@media screen and (max-width: 720px) {
		section {
			margin-bottom: 0;
		}

		img {
			display: none;
		}
	}
</style>
