<script>
	import kortebroek from '$lib/assets/kortebroek.svg';
	import langebroek from '$lib/assets/langebroek.svg';

	export let data;

	$: weatherData = data;

	$: gtemp = Math.round(weatherData.liveweer[0].gtemp);

	$: korteBroekAan = gtemp > 20;
</script>

<svelte:head>
	<title>Werktijden Widget - Kan ik een korte broek aan?</title>
	<meta name="description" content="Een widget die aangeeft of je vandaag een korte broek aan kan?" />
</svelte:head>

<div
	class="widget"
	style="--background-color: {korteBroekAan
		? 'linear-gradient(#0053A2, #407EBE)'
		: 'linear-gradient(#91bbd1, #3286aa)'};"
>
	<p>Kan je een korte broek aan?</p>
	{#if korteBroekAan}
		<div class="content">
			<h1>JA</h1>
			<img src={kortebroek} alt="" />
		</div>
	{:else}
		<div class="content">
			<h1>NEE</h1>
			<img src={langebroek} alt="" />
		</div>
	{/if}
</div>

<style>
	.widget {
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
		text-align: center;
		padding: 0.8rem;
		color: white;
		background: var(--background-color);
	}

	.content {
		display: flex;
		justify-content: center;
		flex-direction: row;
		gap: 0.8rem;
	}

	h1 {
		font-size: 6rem;
		margin-bottom: 0;
	}

	p {
		margin-bottom: 0;
		font-size: 1.2rem;
	}
	img {
		height: 8rem;
		width: auto;
	}
</style>
