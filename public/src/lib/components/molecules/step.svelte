<script>
	import arrow from '$lib/assets/arrow.svg';

    import { StepBlock, StepHeading, StepText } from "$lib/index.js";
    export let step
    export let heading
    export let text
</script>

<section>
    <StepBlock {step} />
    <StepHeading {heading} />
    <StepText {text} />
    <img src={arrow} alt="" />
</section>

<style>
    section {
        padding-right: 2rem;
        max-width: 18rem;
    }
    img {
        float: right;
    }
    @media screen and (max-width: 720px) {
		img {
            display: none;
        }
	}
</style>