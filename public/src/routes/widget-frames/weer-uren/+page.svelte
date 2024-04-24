<script>
	import { pusher } from '$lib/index.js';
	import { onMount } from 'svelte';

	export let data;

	$: weatherData = data;

	// $: console.log(weatherData);

	$: image = weatherData.liveweer[0].image;
	$: temperature = Math.round(weatherData.liveweer[0].temp);
	$: gtemp = Math.round(weatherData.liveweer[0].gtemp);
	// $: hoursOfUpdate = ('0' + new Date(weatherData.liveweer[0].time).getHours()).slice(-2);
	// $: minutesOfUpdate = ('0' + new Date(weatherData.liveweer[0].time).getMinutes()).slice(-2);
	$: location = weatherData.liveweer[0].plaats;
	$: wind = Math.round(weatherData.liveweer[0].windkmh);

	$: bg = [];
	$: color = '';

	$: timeOfUpdate = weatherData.liveweer[0].time;
	$: hoursOfUpdate = timeOfUpdate.slice(11, 13);
	$: minutesOfUpdate = timeOfUpdate.slice(14, 16);

	$: uurvoorspellingen = weatherData.uur_verw.slice(0, 5);

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
		// image = 'bliksem';
		const liveWeerChannel = pusher.subscribe('liveweer-channel');

		liveWeerChannel.bind('update-liveweer', (data) => {
			// console.log(data);
			weatherData = data.data;
		});
	});
</script>

<svelte:head>
	<title>Weer met urenvoorspelling widget</title>
	<meta
		name="description"
		content="Deze widget laat de huidige temperatuur en gevoelstemperatuur zien met een urenvoorspelling."
	/>
</svelte:head>

<div class="widget" style="color: {color}; background: linear-gradient({bg[0]}, {bg[1]});">
	<div class="current">
		<div>
			<p class="temp">{temperature}°</p>
			<img src="/weather_icons/{image}.svg" alt="" />
		</div>
		<div class="info">
			<p class="gtemp">Voelt als: {gtemp}°</p>
			<p>
				<span class="wind">{wind} km/h</span>
			</p>
			<p class="now">
				{location}
				{hoursOfUpdate}:{minutesOfUpdate}
			</p>
		</div>
	</div>
	<ol>
		{#each uurvoorspellingen as uurvoorspelling}
			<li>
				<span>{uurvoorspelling.uur.slice(11, 16)}</span>
				<img src="/weather_icons/{uurvoorspelling.image}.svg" alt="" />
				<span>{uurvoorspelling.temp}°</span>
			</li>
		{/each}
	</ol>
</div>

<style>
	p {
		margin: 0;
		font-size: 1rem;
	}
	.widget {
		position: relative;
		display: flex;
		flex-direction: column;
		color: white;
		padding: 0.8rem;
	}
	.current {
		display: flex;
		justify-content: space-between;
		flex-grow: 1;
	}
	.current div:first-of-type {
		position: relative;
		top: -.7rem;
	}
	.current .temp {
		font-size: 4rem;
		margin: 0;
	}
	.current img {
		height: 3rem;
		width: 3rem;
		margin: .6rem 0 auto 0.5rem;
	}
	.current > div {
		display: flex;
	}
	.info {
		flex-direction: column;
		text-align: right;
	}
	.now {
		margin-top: auto;
		opacity: 0.7;
		font-weight: 300;
	}
	ol {
		display: flex;
		justify-content: space-between;
		list-style: none;
		border-top: 1px solid rgba(255, 255, 255, 0.2);
		margin-top: 6px;
		padding-top: 6px;
	}
	ol li {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: fit-content;
	}
	ol li img {
		height: 2rem;
		width: 2rem;
	}
</style>
