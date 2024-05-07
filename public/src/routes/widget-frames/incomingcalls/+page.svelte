<script>
	import Phone from '$lib/assets/phone.svg';
	import { Call, pusher } from '$lib/index.js';
	import { onMount } from 'svelte';

	$: history = [];

	onMount(() => {
		const privateCallChannel = pusher.subscribe('private-call');

		privateCallChannel.bind('caller-status', async (data) => {
			if (!history.find((obj) => obj.id === data.id)) {
				history.push(data);
			} else {
				history.splice(
					history.indexOf(
						history.find((obj) => {
							return obj.id === data.id;
						})
					),
					1,
					data
				);
			}
			history = history;
		});
	});
</script>

<section class="widget">
	<h1><img src={Phone} alt="" />Gesprekken</h1>

	<ol id="history">
		{#if history.length == 0}
			<li>
				<p>Er heeft nog niemand gebeld...</p>
			</li>
		{/if}
		{#each history as callData}
			<Call data={callData} />
		{/each}
	</ol>
</section>

<style>
	img {
		height: 1.9rem;
		margin-right: 0.6rem;
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
		background-color: rgb(240, 240, 240);
		padding: 1.7rem;
		height: 5.2rem;
	}
	p {
		padding: 0;
		margin: 0;
	}
</style>
