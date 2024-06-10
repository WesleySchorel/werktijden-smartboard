<script>
	import { UnderlinedWord } from '$lib/index.js';
	import weerWidget from '$lib/assets/weer-widget.svg';
	import clockWidget from '$lib/assets/clock-widget.svg';
	import sportWidget from '$lib/assets/sport-widget.svg';
	import actualiteitbannerWidget from '$lib/assets/actualiteitbanner-widget.svg';
	import werktijdenWidget from '$lib/assets/werktijden-widget.svg';
</script>

<div class="container">
	<div class="intro">
		<section>
			<h1>
				Een groot en uniek aanbod met
				<UnderlinedWord content={'LiveWidgets'} />
			</h1>
			<p>
				LiveWidgets heeft een groot aanbod van unieke- en hedendaagse widgets die perfect passen
				binnen uw organisatie.
			</p>
		</section>
	</div>
</div>

<style>
	section {
		width: 42rem;
		margin: 0 2rem 0 2rem;
	}

	.container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.intro {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	h1,
	p {
		text-align: center;
	}

	@keyframes moveDown1 {
		from {
			transform: translateY(-2rem) translateX(-2rem);
		}
		to {
			transform: translateY(0rem);
		}
	}

	@keyframes moveDown2 {
		from {
			transform: translateY(-3rem) translateX(3rem);
		}
		to {
			transform: translateY(0rem);
		}
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@media screen and (max-width: 720px) {
		section {
			width: 18rem;
		}

		h1,
		p {
			text-align: left;
		}

		.container {
			flex-direction: column;
			align-items: center;
		}

		.intro {
			margin: 2rem 0 3rem 0;
			flex-direction: column;
			align-items: center;
		}

		.widgets {
			display: none;
		}

		.widgets:last-child img {
			display: none;
		}
	}
</style>
