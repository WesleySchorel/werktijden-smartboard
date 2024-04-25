<script>
	export let weatherData;
    
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

	$: weekverwachting = weatherData.wk_verw.slice(0, 5);

	$: weekverwachting.forEach((element, index) => {
		let day_of_week = currentDayIndex + index;
		if (day_of_week > 6) {
			day_of_week -= 7;
		}

		element.naam = index === 0 ? 'vandaag' : days[day_of_week];
	});

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
</script>

<div class="current">
	<div>
		<div>
			<p class="temp">{temperature}°</p>
			<img src="/weather_icons/{image}.svg" alt="" />
		</div>
	</div>
	<div class="info">
		<p class="gtemp">Voelt als: {gtemp}°</p>
		<p>
			<span class="wind">{wind} km/h</span>
		</p>
	</div>
</div>
<p class="now">
	{location}
	{hoursOfUpdate}:{minutesOfUpdate}
</p>
