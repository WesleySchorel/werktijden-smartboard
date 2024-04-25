<script>
	export let weekverwachting;
	import rain from '$lib/assets/rain.svg';
	import wind from '$lib/assets/wind.svg';
</script>

<ol>
	{#each weekverwachting as dag}
		<li>
			<h2>{dag.naam}</h2>
			<ul class="conditions">
				<li class="rain"><img src={rain} alt="" />{dag.neersl_perc_dag}%</li>
				<li class="wind"><img src={wind} alt="" />{dag.windkmh}km/h</li>
			</ul>
			<img class="icon" src="/weather_icons/{dag.image}.svg" alt="" />
			<ul class="temps">
				<li class="max">{dag.max_temp}°</li>
				<li class="min">{dag.min_temp}°</li>
			</ul>
		</li>
	{/each}
</ol>

<style>
	.conditions li {
		display: flex;
		gap: 2px;
	}
	.conditions img {
		height: 0.8rem;
		width: 0.8rem;
	}
	h2 {
		font-size: 1.2rem;
		margin: 0 auto 0 0;
	}
	ol {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 6px;
		list-style: none;
		border-top: 1px solid rgba(255, 255, 255, 0.2);

		/* margin: auto 0 auto 0; */
		margin-top: 8px;
		padding-top: 8px;
		height: inherit;
	}
	ol li {
		display: flex;
		align-items: center;
	}
	ul {
		display: flex;
		gap: 8px;
	}
	.temps {
		display: flex;
		width: 3.4rem;
		justify-content: end;
		text-align: right;
	}
	li .icon {
		margin: 0 8px 0 12px;
		height: 1.8rem;
		width: 1.8rem;
	}
	.min {
		opacity: 0.7;
	}
</style>
