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
        gap: 1rem;
    }
    h3, p {
        margin: 0;
    }
    h3 {
        font-size: 1.3rem;
    }
    p {
        border: 2px solid black;
        border-radius: 3px;
        padding: .4rem 1rem;
        font-size: 2rem;
    }
</style>
