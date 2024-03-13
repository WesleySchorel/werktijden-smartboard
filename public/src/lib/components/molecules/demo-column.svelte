<script>
    import { PipeHeading, Button, GreenLink } from '$lib/index.js';
</script>

<div class="container">
    <section>
        <h3 style="font-size: 2rem;">Intresse gekregen?</h3>
        <p>
            Maak dan nu 14 dagen gratis gebruik van alle functionaliteiten van het <span>LiveWidgets</span> dashboard van Werktijden.
        </p>
        <div>
            <Button url={'/'} content={'Probeer gratis'} /> 
            <GreenLink url={'/'} content={'Check demo'} />
        </div>
    </section>

    <section>
        <PipeHeading heading={'Ontelbaar veel mogelijkheden'} />
        <p>
            Breidt het aantal widgets gemakkelijk uit met onze widget store. Er zijn ook gratis widgets beschikbaar!
        </p>
        <GreenLink url={'/'} content={'Widget store'} />
    </section>

    <section>
        <PipeHeading heading={'Gratis persoonlijke demo'} />
        <p>
            Hulp nodig bij het navigeren door de <span>LiveWidgets</span> tool? Wij staan voor u klaar en helpen u erdoorheen!
        </p>
        <GreenLink url={'/'} content={'Neem contact op'} />
    </section>
</div>

<style>
    p {
        color: #696969;
        font-size: 1.3rem;
        margin: 0 0 1.5rem 0;
    }

    span {
        color: #009f66;
    }

    .container {
        margin: 12rem auto 0 auto;
        max-width: 90vw;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
    }

    .container > section {
        padding: 1rem;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    section {
        align-self: end;
    }

    @media (max-width: 768px) {
        .container {
            margin: 0;
            grid-template-columns: 1fr;
        }
    }
</style>
