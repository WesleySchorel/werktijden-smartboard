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
		<div class="widgets" style="transform: rotate(-5deg);">
			<img src={weerWidget} alt="" width="94" height="94" style="margin-right: 10rem" />
			<img src={clockWidget} alt="" width="64" height="64" style="margin-left: 10rem;" />
			<img src={sportWidget} alt="" width="54" height="54" style="margin-right: 5rem" />
			<img
				src={actualiteitbannerWidget}
				alt=""
				width="34"
				height="34"
				style="margin-left: 4.5rem;"
			/>
			<img src={werktijdenWidget} alt="" width="74" height="74" style="margin-right: 10rem;" />
		</div>

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

		<div class="widgets" style="transform: rotate(5deg);">
			<img src={clockWidget} alt="" width="84" height="84" style="margin-left: 10rem" />
			<img src={werktijdenWidget} alt="" width="64" height="64" style="margin-right: 10rem;" />
			<img src={weerWidget} alt="" width="54" height="54" style="margin-left: 5rem" />
			<img src={sportWidget} alt="" width="44" height="44" style="margin-right: 4.5rem;" />
			<img
				src={actualiteitbannerWidget}
				alt=""
				width="64"
				height="64"
				style="margin-left: 10rem;"
			/>
		</div>
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

	.widgets {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	h1,
	p {
		text-align: center;
	}

	.widgets:first-child img {
		animation:
			moveDown1 1s ease forwards,
			fadeIn 1s ease forwards;
	}

	.widgets:last-child img {
		animation:
			moveDown2 1s ease forwards,
			fadeIn 1s ease forwards;
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
