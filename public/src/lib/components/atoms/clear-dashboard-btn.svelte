<script>
	import { onMount } from 'svelte';

	let allListItemCheckboxes;

	function clear() {
		let allChecked = Array.from(allListItemCheckboxes).filter((obj) => obj.checked === true);
		allChecked.forEach((obj) => {
			obj.click();
		});
	}
	onMount(() => {
		allListItemCheckboxes = Array.from(
			document.querySelectorAll('.widget-setting input[type="checkbox"]')
		);
	});
</script>

<button class="warning" on:click={clear}>Leeg dashboard</button>

<style>
	button {
		all: unset;
		cursor: pointer;
		display: block;
		/* width: -webkit-fill-available; */
		/* min-width: 9rem; */
		padding: 0.6rem;
		border-radius: var(--border-radius-default);
        border: 1px solid red;
	}
	button.warning {
		color: red;
	}
	button:hover {
		background-color: var(--c-background);
	}
	button.warning:hover {
		background-color: rgba(255, 0, 0, 0.05);
	}
</style>
