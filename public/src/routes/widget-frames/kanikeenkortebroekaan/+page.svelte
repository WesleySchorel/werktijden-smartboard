<script>
    import kortebroek from '$lib/assets/kortebroek.svg';
    import langebroek from '$lib/assets/langebroek.svg';

	export let data;

	$: weatherData = data;

	$: gtemp = Math.round(weatherData.liveweer[0].gtemp);

	$: korteBroekAan = gtemp > 20;
</script>

<div class="widget">
{#if korteBroekAan}
<img src={kortebroek} alt="" />
    <h1>JA</h1>
	<p>Je kan een korte broek aan!</p>
{:else}
<img src={langebroek} alt="" />
    <h1>NEE</h1>
	<p>Je kan geen korte broek aan!</p>
{/if}
</div>

<style>
	.widget {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		color: white;
        background-color: black;
		padding: 0.8rem;
	}
    h1 {
        font-size: 10rem;
        line-height: 8rem;
    }
    p {
        font-size: 1.2rem;
    }
	img {
        position: absolute;
        height: 9rem;
        width: auto;
	}
</style>
