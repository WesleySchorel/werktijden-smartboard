<script>
	import { UnderlinedWord, Button, Link } from '$lib/index.js';
</script>

<div>
	<section>
		<h1><span>Oeps!</span> Er is iets mis gegaan</h1>
		<p>Helaas, we konden de pagina die je zocht niet vinden.</p>
		<Button url={'/'} content={'Terug naar home'} />
		<Link url={'mailto:info@werktijden.nl'} content={'Neem contact op →'} />
	</section>
</div>

<style>
	div {
		display: flex;
		justify-content: center;
		max-width: 85rem;
		margin-inline: auto;
		margin-top: 6rem;
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
		text-align: center;
		margin: 0.5rem;
		margin-top: 5rem;
		
	}

	span {
		color: #008649;
	}
</style>
