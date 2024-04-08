<script>
	import { MemoryCards, ErrorPagina } from '$lib/index.js';

	import bagImg from '$lib/assets/memoryGame/memoryBag.svg';
	import clockImg from '$lib/assets/memoryGame/memoryClock.svg';
	import plannerImg from '$lib/assets/memoryGame/memoryPlanner.svg';
	import ringImg from '$lib/assets/memoryGame/memoryRing.svg';

	const cardImages = [
		{ src: bagImg, matched: false },
		{ src: clockImg, matched: false },
		{ src: plannerImg, matched: false },
		{ src: ringImg, matched: false }
	];

	let cards = [];
	let turns = 0;
	let choiceOne = null;
	let choiceTwo = null;
	let disabled = false;
	let flips = 0;

	const shuffledCards = () => {
		const shuffledCards = [...cardImages, ...cardImages]
			.sort(() => Math.random() - 0.5)
			.map((card, index) => ({ ...card, id: index }));
		cards = shuffledCards;
		turns = 0;
		flips = 0;
	};

	const handleChoice = (card) => {
		flips++;
		if (choiceOne) {
			choiceTwo = card;
		} else {
			choiceOne = card;
		}
	};

	$: if (choiceOne && choiceTwo) {
		disabled = true;
		if (choiceOne.src === choiceTwo.src) {
			cards = cards.map((card) => {
				if (card.src === choiceOne.src) {
					return { ...card, matched: true };
				} else {
					return card;
				}
			});
			resetTurn();
		} else {
			setTimeout(resetTurn, 1000);
		}
	}

	$: shuffledCards();

	const resetTurn = () => {
		choiceOne = null;
		choiceTwo = null;
		turns++;
		disabled = false;
	};
</script>

<div class="container">
	<section class="game">
		<div class="card-grid">
			{#each cards as card (card.id)}
				<MemoryCards
					{card}
					{disabled}
					{handleChoice}
					flipped={card === choiceOne || card === choiceTwo || card.matched}
				/>
			{/each}
		</div>

		<div class="game-info">
			<span>Flips: {flips} Turns: {turns}</span>
			<button on:click={shuffledCards}>Start een nieuwe game →</button>
		</div>
	</section>

	<aside class="content">
		<ErrorPagina />
	</aside>
</div>


<style>
	.container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr;
		gap: 0rem;
		grid-template-areas: 'game content';
		margin: 15rem 20rem 3rem 20rem;
	}

	.game {
		grid-area: game;
		display: grid;
		justify-content: center;
	}

	.card-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
		justify-content: center;
		gap: 1rem;
		max-width: calc(4 * (9rem + 1rem * 2) + 1rem * 2);
	}

	.content {
		grid-area: content;
		display: flex;
		justify-content: center;
		align-items: center;
	}

    .game-info {
        display: flex;
        align-items: center;
		margin-top: 1rem;
    }

    .game-info span {
        color: var(--c-text-secondary);
        font-size: 1rem;
        margin-right: 1rem;
    }

    .game-info button {
        color: var(--c-primary-werktijden);
        background-color: var(--c-background);
        border: none;
        font-size: 1rem;
        cursor: pointer;
    }
</style>
