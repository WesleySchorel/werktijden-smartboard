<script>
    export let heading
</script>

<h2><span>&#124;</span>{heading}</h2>

<style>
    h2 {
        font-size: clamp(1rem, 1.25vw + 0.75rem, 1.5rem);
        color: white;
    }

	span {
        font-size: clamp(1rem, 1.25vw + 0.75rem, 1.5rem);
		color: #009f66;
        margin-right: 0.3rem;
	}
</style>