<script>
	export let content;
	export let filter;
	export let checked;
</script>

<label>
	{content}
	<input data-filter={filter} name="widget-filter" type="radio" {checked} />
</label>

<style>
	label {
		position: relative;
		display: inline-block;
		color: var(--c-text-secondary);
		border-radius: var(--border-radius-default);
		padding: 0.3rem 0.6rem;
	}
	label:has(input:checked) {
		color: var(--c-text-primary);
		background-color: white;
	}
	input {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		/* display: none; */
		opacity: 0;
	}
</style>
