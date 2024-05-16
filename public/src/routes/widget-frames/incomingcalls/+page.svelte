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
				<h2>Er heeft nog niemand gebeld...</h2>
			</li>
		{/if}
		{#each history as callData}
			<Call data={callData} />
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
		background-color: rgb(240, 240, 240);
		padding: 1.7rem;
		height: 5.2rem;
	}
</style>
