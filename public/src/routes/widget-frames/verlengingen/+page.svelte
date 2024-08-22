<script>
	import CheckBadge from '$lib/assets/check-badge.svg';

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
	<h1><img src={CheckBadge} alt="" />Verlengingen</h1>

	<ol id="history">
		{#each data.data as item}
			<li>
				<div>
					<h2>
						<span class="company">{item.name}</span><span class="employees-count"
							>{item.employees_count}</span
						>
					</h2>
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
	h2 {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		width: 100%;
	}
	.company,
	.name {
		display: block;

		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.employees-count {
		display: grid;
		place-items: center;
		padding: 0.1rem 0.3rem;
		border-radius: 6px;
		width: fit-content;
		color: white;
		font-size: 1.1rem;
		background-color: var(--c-primary-werktijden);
	}
</style>
