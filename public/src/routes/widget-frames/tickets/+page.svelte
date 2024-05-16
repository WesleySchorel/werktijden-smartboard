<script>
	import Intercom from '$lib/assets/intercom.svg';
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
	<h1><img src={Intercom} alt="" />Tickets</h1>

	<ol id="history">
		<li>
			<div>
				<img src={All} alt="" />
				<h2>All</h2>
			</div>
			<p>{data.data.open}</p>
		</li>
		<li>
			<div>
				<img src={Unassigned} alt="" />
				<h2>Unassigned</h2>
			</div>
			<p>{data.data.unassigned}</p>
		</li>
		<li>
			<div>
				<img src={Assigned} alt="" />
				<h2>Assigned</h2>
			</div>
			<p>{data.data.assigned}</p>
		</li>
	</ol>
</section>

<style>
	li img {
		height: 1.9rem;
		margin-right: 0.6rem;
	}
	section {
		background-color: white;
	}
	div {
		display: flex;
	}
	p {
		margin: 0;
		font-size: 1.7rem;
	}
</style>
