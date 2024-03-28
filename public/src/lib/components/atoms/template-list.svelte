<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
    import { Template, availableTemplates } from '$lib/index.js'

    function open() {
        templatesList.classList.toggle('open')
        templatesBtn.classList.toggle('open')
    }

    onMount(() => {
        const templatesBtn = document.querySelector('#templatesBtn')
        const templatesList = document.querySelector('#templatesList')
    })
</script>

<button id="templatesBtn" on:click={open} class:active={$page.url.pathname.includes('widgets')}>templates</button>
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
		position: sticky;
		top: 0;
		justify-content: center;
		background-color: var(--c-primary-werktijden);
		width: 100%;
		padding: 0.7rem 0;
		color: white;
    }
    button::after {
        content: "^";
        transition: .4s;
    }
    #templatesList {
        position: fixed;
		height: 0;
		background-color: var(--c-background);
		bottom: 0;
		width: 100%;
        transition: .6s ease-in-out;
		z-index: -1;
    }
    ul {
        display: flex;
        flex-direction: column;
        gap: 6px;
        width: 100%;
        max-width: 90vw;
        margin-inline: auto;
        margin-top: 1rem;
        list-style: none;
    }
	.active {
		display: flex;
	}
</style>
