<script>
	import { Bulletchecks, Button } from '$lib/index.js';
	import phones from '$lib/assets/phones.svg';
</script>

<div class="container">
	<div class="img">
		<img src={phones} alt="" />
	</div>
	<div class="content">
		<h2>Waar wacht je nog op?</h2>
		<p>
			Maak dan nu 14 dagen gratis gebruik van alle functionaliteiten van het LiveWidgets dashboard
			van Werktijden.
			<Bulletchecks />
		</p>
		<Button url={'/'} content={'Probeer gratis'} />
	</div>
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr;
		grid-auto-columns: 1fr;
		grid-auto-flow: row;
		grid-template-areas: 'img content';
		margin: 9rem auto 0 auto;
		width: 58rem;
	}

	.img {
		grid-area: img;
	}

	img {
		height: 32rem;
		width: auto;
	}

	.content {
		grid-area: content;
	}

	@media screen and (max-width: 720px) {
		.container {
			grid-template-columns: 1fr;
			grid-template-rows: auto auto;
			grid-template-areas:
				'content'
				'img';
			width: auto;
			margin: 6rem 1rem 0 1rem;
		}

		img {
			height: 24rem;
			margin: 3rem 0 2rem 2rem;
		}
	}
</style>
