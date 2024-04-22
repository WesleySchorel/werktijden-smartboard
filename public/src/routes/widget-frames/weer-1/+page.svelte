<script>
	import { pusher } from '$lib/index.js';
	import { onMount } from 'svelte';

	export let data;

	$: weatherData = data;

	$: image = weatherData.liveweer[0].image;
	$: temperature = Math.round(weatherData.liveweer[0].temp);
	$: gtemp = Math.round(weatherData.liveweer[0].gtemp);
	// $: hoursOfUpdate = ('0' + new Date(weatherData.liveweer[0].time).getHours()).slice(-2);
	// $: minutesOfUpdate = ('0' + new Date(weatherData.liveweer[0].time).getMinutes()).slice(-2);
	$: location = weatherData.liveweer[0].plaats;
	
	$: bg = [];
	$: color = '';

	$: timeOfUpdate = weatherData.liveweer[0].time
	$: hoursOfUpdate = timeOfUpdate.slice(11, 13)
	$: minutesOfUpdate = timeOfUpdate.slice(14, 16)
	
	$: switch (image) {
		case 'zonnig':
			bg = ['#0053A2', '#407EBE'];
			color = '#ffffff';
			break;
		case 'bewolkt':
			bg = ['#233858', '#2C333F'];
			color = '#ffffff';
			break;
		case 'bliksem':
			bg = ['#233858', '#2C333F'];
			color = '#ffffff';
			break;
		case 'buien':
			bg = ['#6A7F9B', '#344B66'];
			color = '#ffffff';
			break;
		case 'hagel':
			bg = ['#6A7F9B', '#344B66'];
			color = '#ffffff';
			break;
		case 'halfbewolkt_regen':
			bg = ['#6A7F9B', '#344B66'];
			color = '#ffffff';
			break;
		case 'halfbewolkt':
			bg = ['#0053A2', '#407EBE'];
			color = '#ffffff';
			break;
		case 'helderenacht':
			bg = ['#320064', '#100527'];
			color = '#ffffff';
			break;
		case 'lichtbewolkt':
			bg = ['#0053A2', '#407EBE'];
			color = '#ffffff';
			break;
		case 'mist':
			bg = ['#0053A2', '#407EBE'];
			color = '#ffffff';
			break;
		case 'nachtbewolkt':
			bg = ['#320064', '#100527'];
			color = '#ffffff';
			break;
		case 'nachtmist':
			bg = ['#320064', '#100527'];
			color = '#ffffff';
			break;
		case 'regen':
			bg = ['#6A7F9B', '#344B66'];
			color = '#ffffff';
			break;
		case 'sneeuw':
			bg = ['#6A7F9B', '#344B66'];
			color = '#ffffff';
			break;
		case 'zwaarbewolkt':
			bg = ['#233858', '#2C333F'];
			color = '#ffffff';
			break;
		default:
			bg = ['#000000', '#ffffff'];
			color = '#ffffff';
	}

	onMount(() => {
		// image = 'zonnig';
		const liveWeerChannel = pusher.subscribe('liveweer-channel');

		liveWeerChannel.bind('update-liveweer', (data) => {
			console.log(data);
			weatherData = data.data;
		});
	});
</script>

<svelte:head>
	<title>Weer met gevoelstemperatuur widget</title>
	<meta
		name="description"
		content="Deze widget laat de huidige temperatuur en gevoelstemperatuur zien."
	/>
</svelte:head>

<div class="widget" style="color: {color}; background: linear-gradient({bg[0]}, {bg[1]});">
	<div class="top">
		<img src="/weather_icons/{image}.svg" alt="" />
		<div class="gtemp">Voelt als: {gtemp}°</div>
	</div>
	<p class="temp">{temperature}°</p>
	<div class="bottom">
		<p>
			{location}
			{hoursOfUpdate}:{minutesOfUpdate}
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
		color: white;
		padding: 0.8rem;
	}
	.top {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}
	img {
		height: fit-content;
		max-height: 3rem;
		width: 2.8rem;
	}
	.gtemp {
		margin-top: 0.1rem;
	}
	.temp {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 5rem;
		margin: auto;
	}
	.bottom p {
		font-size: 0.8rem;
		margin-bottom: 0;
	}
</style>
