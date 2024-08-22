<script>
	import Bottle from '$lib/assets/bottle.svg';

	export let data;
</script>

<svelte:head>
	<title>Weer met gevoelstemperatuur widget</title>
	<meta
		name="description"
		content="Deze widget laat de huidige temperatuur en gevoelstemperatuur zien."
	/>
</svelte:head>

<section class="widget">
	<h1><img src={Bottle} alt="" />Proefperiodes</h1>

	<ol id="history">
		{#each data.data as item}
			<li>
				<div>
					<h2>{item.name}</h2>
					<p class="name">{item.employee}</p>
				</div>
			</li>
		{/each}
	</ol>
</section>

<style>
	section {
		background-color: white;
	}
	#history {
		display: flex;
		flex-direction: column-reverse;
		position: relative;
		z-index: 1;
	}
	li {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-top: 1px solid var(--c-border-default);
		border-bottom: 1px solid var(--c-border-default);
		padding: 0 1.7rem;
		width: 100%;
		height: 5.2rem;
	}
	li > div {
		display: flex;
		flex-direction: column;
		gap: 0.1rem;
		width: 100%;
	}
	h2, .name {
		display: block;

		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
