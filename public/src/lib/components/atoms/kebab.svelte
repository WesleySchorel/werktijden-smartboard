<script>
	import kebab from '$lib/assets/kebab.svg';
	import { onMount } from 'svelte';

	let allListItemCheckboxes;
	let kebabBtn;

	function clear() {
		let allChecked = Array.from(allListItemCheckboxes).filter((obj) => obj.checked === true);
		allChecked.forEach((obj) => {
			obj.click();
		});
		kebabBtn.click();
	}
	onMount(() => {
		kebabBtn = document.querySelector('#kebab');
		allListItemCheckboxes = Array.from(
			document.querySelectorAll('.widget-setting input[type="checkbox"]')
		);
	});
</script>

<div>
	<label aria-label="options menu">
		<input type="checkbox" id="kebab" />
		<img src={kebab} alt="" width="24" height="24" />
	</label>

	<ul>
		<li><button>Toon QR-code</button></li>
		<li><button class="warning" on:click={clear}>Leeg dashboard</button></li>
	</ul>
</div>

<style>
	div {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: end;
	}
	label {
		position: relative;
		margin: auto;
		cursor: pointer;
		opacity: 0.5;
	}
	label:hover,
	label:has(input:checked) {
		opacity: 1;
	}
	input {
		position: absolute;
		cursor: pointer;
		opacity: 0;
	}
	label img {
		transition: 0.2s;
	}
	input:checked + img {
		rotate: 90deg;
	}
	div:has(input:checked) ul {
		display: flex;
	}
	ul {
		display: none;
		flex-direction: column;
		gap: 6px;
		align-items: center;
		position: absolute;
		list-style: none;
		background-color: white;
		padding: 0.6rem;
		top: 2.5rem;
		box-shadow: var(--box-shadow-extra);
		border-radius: var(--border-radius-default);
		z-index: 1;
	}
	li {
		min-width: max-content;
		width: 100%;
	}
	/* button {
		all: unset;
        cursor: pointer;
		display: block;
		text-align: center;
		width: -webkit-fill-available;
		padding: 0.4rem 0.8rem;
		border: 1px solid var(--c-text-primary);
		border-radius: var(--border-radius-default);
	}
    button:hover {
        box-shadow: var(--box-shadow-extra);
    }
	.warning {
		border: 1px solid red;
		background-color: rgba(255, 0, 0, 0.05);
		color: red;
	} */

	/* alternative button styling */

	button {
		all: unset;
		cursor: pointer;
		display: block;
		width: -webkit-fill-available;
		min-width: 9rem;
		padding: 0.6rem;
		border-radius: var(--border-radius-default);
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
