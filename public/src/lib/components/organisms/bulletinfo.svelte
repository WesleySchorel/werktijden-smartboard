<script>
	import { Bullet, UnderlinedWord } from '$lib/index.js';
	import tv from '$lib/assets/tv.svg';
	import widgets from '$lib/assets/widgets-icon.svg';
	import style from '$lib/assets/style-icon.svg';
	import clock from '$lib/assets/clock-icon.svg';
</script>

<div class="bullet-container">
	<div class="steps">
		<h2><UnderlinedWord content={'Jouw dashboard, jouw inrichting!'} /></h2>
		<Bullet icon={ widgets } heading={'Widgets'} text={'Talloze categorieën met behulpzame widgets.'} />
		<Bullet
			icon={ style }
			heading={'Jouw eigen stijl'}
			text={'Pas alles aan naar de wensen van jouw organisatie.'}
		/>
		<Bullet
			icon={ clock }
			heading={'Bespaar tijd'}
			text={'Wees minder tijd kwijt aan het zoeken naar informatie.'}
		/>
	</div>
	<img src={tv} alt="" width="336" height="336" />
</div>

<style>
	.bullet-container {
		display: flex;
		gap: 6rem;
		margin-top: 9rem;
	}

	.bullet-container img {
		width: auto;
		height: 21rem;
		border-radius: 1rem;
		position: relative;
		transform: translateY(5.5rem) rotate(-2.21deg);
	}

	.steps {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		text-align: left;
		gap: 1rem;
	}

	h2 {
		max-width: 20rem;
		margin-bottom: 2rem;
	}

	@media screen and (max-width: 720px) {
		.steps {
			padding: 0 1rem 0 1rem;
			margin: 0;
			gap: 3rem;
		}
		.bullet-container {
			flex-direction: column;
			margin-inline: auto;
			gap: 2rem;
			height: auto;
			overflow: inherit;
		}

		.bullet-container img {
			height: 16rem;
			transform: translateY(0) rotate(-2.21deg);
		}

		h2 {
			margin-bottom: 0rem;
		}
	}
</style>
