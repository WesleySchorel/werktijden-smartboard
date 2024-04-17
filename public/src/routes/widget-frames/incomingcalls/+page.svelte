<script>
	import { Call, pusher } from '$lib/index.js';
	import { onMount } from 'svelte';

	$: history = [];

	onMount(() => {
		const incomingCallNotifier = document.querySelector('#incoming-call');
		const privateCallChannel = pusher.subscribe('private-call');

		privateCallChannel.bind('caller-status', async (data) => {
			// console.log(data);
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

			console.log(history);
		});
	});
</script>

<section class="widget">
	<h1>Gesprekken</h1>

	<ol id="history">
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
	h1 {
		margin: 0;
		font-size: 2.5rem;
		padding: 1.7rem;
	}
</style>
