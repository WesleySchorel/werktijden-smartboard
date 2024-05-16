<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { Template, availableTemplates } from '$lib/index.js';

	let templatesBtn;
	let templatesList;

	function open() {
		templatesList.classList.toggle('open');
		templatesBtn.classList.toggle('open');
	}

	onMount(() => {
		templatesBtn = document.querySelector('#templatesBtn');
		templatesList = document.querySelector('#templatesList');
	});
</script>

<button id="templatesBtn" on:click={open} class:active={$page.url.pathname.includes('widgets')}
	><svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M8.50156 1.21255L1.19015 8.84997C1.06809 8.9774 1 9.14671 1 9.32277C1 9.49883 1.06809 9.66813 1.19015 9.79556L1.19841 9.80379C1.25758 9.86578 1.3288 9.91514 1.40774 9.94887C1.48669 9.9826 1.5717 10 1.65761 10C1.74352 10 1.82853 9.9826 1.90747 9.94887C1.98641 9.91514 2.05764 9.86578 2.11681 9.80379L9.00138 2.61176L15.8832 9.80379C15.9424 9.86578 16.0136 9.91514 16.0925 9.94887C16.1715 9.9826 16.2565 10 16.3424 10C16.4283 10 16.5133 9.9826 16.5923 9.94887C16.6712 9.91514 16.7424 9.86578 16.8016 9.80379L16.8099 9.79556C16.9319 9.66813 17 9.49883 17 9.32277C17 9.14671 16.9319 8.9774 16.8099 8.84997L9.49844 1.21255C9.43414 1.14539 9.35681 1.09191 9.27113 1.05538C9.18545 1.01884 9.09321 1 9 1C8.90679 1 8.81455 1.01884 8.72887 1.05538C8.64319 1.09191 8.56585 1.14539 8.50156 1.21255Z"
			fill="white"
			stroke="white"
		/>
	</svg>
	templates</button
>
<div id="templatesList" class="" class:active={$page.url.pathname.includes('widgets')}>
	<ul>
		{#each availableTemplates as template}
			<Template title={template.title} preview={template.preview} widgets={template.widgets} />
		{/each}
	</ul>
</div>

<style>
	button {
		all: unset;
		display: none;
		position: sticky;
		top: 0;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		background-color: var(--c-primary-werktijden);
		width: 100%;
		padding: 0.8rem 0;
		color: white;
	}

	button svg {
		transition: 0.4s;
	}
	#templatesList {
		display: none;
		position: fixed;
		height: 0;
		background-color: var(--c-background);
		bottom: 0;
		width: 100%;
		transition: 0.6s ease-in-out;
		overflow-y: scroll;
		z-index: -1;
	}
	ul {
		display: flex;
		flex-direction: column;
		gap: 6px;
		height: fit-content;
		width: 93%;
		max-width: 30rem;
		margin-inline: auto;
		margin-top: 1rem;
		margin-bottom: 8rem;
		list-style: none;
	}
	.active {
		display: flex;
	}
</style>
