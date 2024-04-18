<script>
	import { Button } from '$lib/index.js';
</script>

<div>
	<section>
		<h1>Pagina niet gevonden</h1>
		<p>Helaas, we konden de pagina die je zocht niet vinden.</p>
		<Button url={'/'} content={'Terug naar home'} />
	</section>
</div>

<style>
	div {
		display: flex;
		justify-content: left;
		max-width: 85rem;
		margin-inline: auto;
		font-family:
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			Oxygen,
			Ubuntu,
			Cantarell,
			'Open Sans',
			'Helvetica Neue',
			sans-serif;
		font-weight: 500;
	}

	section {
		text-align: left;
	}
</style>
