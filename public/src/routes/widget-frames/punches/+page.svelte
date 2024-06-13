<script>
	import Ingeklokt from '$lib/assets/ingeklokt.svg';
	import All from '$lib/assets/all.svg';
	import Assigned from '$lib/assets/assigned.svg';
	import Unassigned from '$lib/assets/unassigned.svg';

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
	<h1><img src={Ingeklokt} alt="" />Ingeklokt</h1>

	<ol id="history">
		{#each data.data as item}
			<li>
				<div class="employee">
					<img src={item.employee.avatar} alt="" />
					<h2>{item.employee.name}</h2>
				</div>
				<div class="time">
					<span
						>{('0' + new Date(item.timestamp).getHours()).slice(-2)}:{(
							'0' + new Date(item.timestamp).getMinutes()
						).slice(-2)}</span
					>
				</div>
			</li>
		{/each}
	</ol>
</section>

<style>
	li {
		animation: 0.5s flash forwards;
	}
	li img {
		height: 2rem;
		margin-right: 0.6rem;
	}
	section {
		background-color: white;
	}
	div {
		display: flex;
		align-items: center;
	}
	.employee {
		width: 80%;
	}

	.employee h2 {
		display: block;

		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.time span {
		display: block;
		font-size: 1.4rem;
	}
	@keyframes flash {
		from {
			background-color: var(--c-primary-werktijden);
			color: white;
		}
		to {
			background-color: transparent;
			color: initial;
		}
	}
</style>
