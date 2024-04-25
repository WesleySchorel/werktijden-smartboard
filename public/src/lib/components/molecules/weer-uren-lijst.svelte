<script>
	export let uurvoorspellingen;
</script>

<ol>
	{#each uurvoorspellingen as uurvoorspelling}
		<li>
			<span>{uurvoorspelling.uur.slice(11, 16)}</span>
			<img src="/weather_icons/{uurvoorspelling.image}.svg" alt="" />
			<span>{uurvoorspelling.temp}°</span>
		</li>
	{/each}
</ol>

<style>
	ol {
		display: flex;
		justify-content: space-between;
		list-style: none;
		border-top: 1px solid rgba(255, 255, 255, 0.2);

		/* margin: auto 0 auto 0; */
		margin-top: 8px;
		padding-top: 8px;
		/* height: inherit; */
	}
	ol li {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		width: fit-content;
		/* height: auto; */
	}
	ol li img {
		height: 2rem;
		width: 2rem;
	}
</style>
