<script>
	import Intercom from '$lib/assets/intercom.svg';
	import All from '$lib/assets/all.svg';
	import Assigned from '$lib/assets/assigned.svg';
	import Unassigned from '$lib/assets/unassigned.svg';

	export let data;

	console.log(data.data);
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
				<p>All</p>
			</div>
			<span>{data.data.open}</span>
		</li>
		<li>
			<div>
				<img src={Unassigned} alt="" />
				<p>Unassigned</p>
			</div>
			<span>{data.data.unassigned}</span>
		</li>
		<li>
			<div>
				<img src={Assigned} alt="" />
				<p>Assigned</p>
			</div>
			<span>{data.data.assigned}</span>
		</li>
	</ol>
</section>

<style>
	img {
		height: 1.9rem;
		margin-right: 0.6rem;
	}
	.dot {
		font-size: 0.5rem;
	}
	section {
		background-color: white;
	}
	#history {
		display: flex;
		flex-direction: column;
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
	div {
		display: flex;
	}
	p {
		margin: 0;
		font-size: 1.7rem;
	}
	span {
		font-size: 1.7rem;
	}
</style>
