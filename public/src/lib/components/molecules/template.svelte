<script>
	import arrowRight from '$lib/assets/arrow-right.svg';
	import { availableTemplates } from '$lib/index.js';
	import { page } from '$app/stores';
	import { pusher } from '$lib/index.js';
	import { onMount } from 'svelte';

	export let title;
	export let preview;
	export let widgets;

	let allListItemCheckboxes;
	let templatesBtn;

	function changeWidgetSetting(path) {
		Array.from(allListItemCheckboxes)
			.find((obj) => {
				return obj.id === path;
			})
			.click();
	}

	function clearWidgetSettings() {
		allListItemCheckboxes.forEach((checkbox) => {
			if (checkbox.checked) checkbox.click();
		});
	}

	function loadTemplate(title) {
		let widgets = availableTemplates.find((obj) => {
			return obj.title === title;
		}).widgets;

		clearWidgetSettings();
		widgets.forEach((widget) => {
			changeWidgetSetting(widget);
		});

		templatesBtn.click();
	}

	onMount(() => {
		allListItemCheckboxes = document.querySelectorAll('input[type="checkbox"]');
		templatesBtn = document.querySelector('#templatesBtn');
	});
</script>

<button on:click={loadTemplate(title)} class="template">
	<div class="top">
		<h2>{title}</h2>
		<img src={arrowRight} alt="" />
	</div>
	<div class="preview"></div>
</button>

<style>
	.template {
		display: flex;
		flex-direction: column;
		border: 1px solid var(--c-border-default);
		width: 100%;
		border-radius: var(--border-radius-default);
		padding: 1rem;
	}
	.top {
		display: flex;
		justify-content: space-between;
		width: 100%;
		padding-bottom: 1rem;
	}
	h2 {
		font-size: 1.2rem;
		margin: 0;
	}
	.preview {
		width: 100%;
		height: 10rem;
		border-radius: 6px;
		margin-inline: auto;
		background-color: black;
	}
</style>
