<script>
	import CheckBadge from '$lib/assets/check-badge.svg';

	export let data;

	console.log(data);
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
						<p>{item.employee.name}</p>
						<span class="name">{item.name} <span class="dot">●</span> {item.employees_count}</span>
					</div>
			</li>
		{/each}
	</ol>
</section>

<style>
    img {
        height: 1.9rem;
        margin-right: .6rem;
    }
    .dot {
        font-size: .5rem;
    }
	section {
		background-color: white;
	}
	#history {
		display: flex;
		flex-direction: column-reverse;
		position: relative;
		z-index: 1;
	}
	h1 {
		margin: 0;
		font-size: 2.5rem;
		padding: 1.7rem;
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
	p {
		margin: 0;
		font-size: 1.7rem;
	}
    .name {
        display: flex;
        align-items: center;
        gap: .4rem;
        font-size: 1.2rem;
    }
</style>
