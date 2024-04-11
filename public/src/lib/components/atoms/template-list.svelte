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
	>templates</button
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
		background-color: var(--c-primary-werktijden);
		width: 100%;
		padding: 0.7rem 0;
		color: white;
	}
	button::after {
		content: '^';
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
