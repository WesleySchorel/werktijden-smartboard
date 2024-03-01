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
    }
    h3, p {
        margin: 0;
    }
    h3 {
        font-size: 1.3rem;
    }
    p {
        border: 1px solid black;
        border-radius: 4px;
        padding: .3rem 1rem;
        font-size: 2rem;
    }
</style>
