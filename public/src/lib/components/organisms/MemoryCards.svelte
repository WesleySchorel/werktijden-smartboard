<script>
	import memoryCard from '$lib/assets/memoryGame/memoryCard.svg';

	export let card;
	export let handleChoice;
	export let flipped;
	export let disabled;

	const handleClick = () => {
		if (!disabled) {
			handleChoice(card);
		}
	};
</script>

<div class="card">
	<div class:flipped>
		<img src={card.src} class="front" alt="Voorkant speelkaart" />
		<img src={memoryCard} class="back" on:click={handleClick} alt="Achterkant speelkaart" />
	</div>
</div>

<style>
	.card {
		position: relative;
	}
	.card img {
		display: block;
		height: 13rem;
		width: 9rem;
		cursor: pointer;
	}

	.card .front {
		transform: rotateY(90deg);
		transition: all ease-in 0.2s;
		position: absolute;
	}

	.card:hover {
		transform: perspective(600px) rotateY(-12deg);
	}

	.flipped .front {
		transform: rotateY(0deg);
		transition-delay: 0.2s;
	}

	.card .back {
		transition: all ease-in 0.2s;
		transition-delay: 0.2s;
	}
	.flipped .back {
		transform: rotateY(90deg);
		transition-delay: 0s;
	}
</style>
