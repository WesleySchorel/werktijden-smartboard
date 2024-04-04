<script>
	import { pusher } from '$lib/index.js';
	import { onMount } from 'svelte';

	export let data;

	$: weatherData = data;

	onMount(() => {
		const liveWeerChannel = pusher.subscribe('liveweer-channel');

		liveWeerChannel.bind('update-liveweer', (data) => {
			// console.log(data);
			weatherData = data.data;
		});
	});
</script>

<div class="widget">
	<div class="top">
		<img src="/weather_icons/{weatherData.liveweer[0].image}.svg" alt="" />
		<div class="gtemp">Gvl temp: {weatherData.liveweer[0].gtemp}</div>
	</div>
	<p class="temp">{weatherData.liveweer[0].temp}°</p>
	<div class="bottom">
		<p>
			{weatherData.liveweer[0].plaats}
			{new Date(weatherData.liveweer[0].time).getHours()}:{new Date(
				weatherData.liveweer[0].time
			).getMinutes()}
		</p>
	</div>
</div>

<style>
	.widget {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		background: linear-gradient(#5586cf, #30afd7);
		color: white;
		padding: 0.6rem;
	}
	.top {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}
	img {
		height: 3rem;
		width: 3rem;
	}
	.temp {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 4rem;
		margin: auto;
	}
	.bottom p {
		font-size: 0.8rem;
		margin-bottom: 0;
	}
</style>
