<script>
	export let koppelcode;
</script>

<section>
	<h3>Unieke koppelcode</h3>
	<p>{koppelcode}</p>
</section>

<style>
	section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .5rem;
        margin-bottom: 2.5rem;
        z-index: 0;
    }
    h3, p {
        margin: 0;
    }
    h3 {
        font-size: 1.2rem;
    }
    p {
        border: 1px solid #202020;
        border-radius: 4px;
        padding: .3rem .8rem;
        font-size: 1.7rem;
    }
</style>
