<script>
	import { onMount } from 'svelte';
	import { enhance } from '$app/forms';
	import { pusher } from '$lib/index.js';
	import { page } from '$app/stores';
	import { sizes } from '$lib/index.js';

	export let title;
	export let size;
	export let path;
	export let enabled;

	let allListItemCheckboxes;

	const presenceChannel = pusher.subscribe(`presence-${$page.params.dashboardKoppelcode}`);

	function triggerEvent(path, size) {
		presenceChannel.trigger('client-change-setting', {
			path: path,
			size: size,
			enabled: Array.from(allListItemCheckboxes).find((obj) => obj.dataset.path === path).checked
		});
	}

	onMount(() => {
		allListItemCheckboxes = document.querySelectorAll('input[type="checkbox"]');
	});
</script>

<li class="widget-setting">
	<div class="top">
		<label for={path}>
			<div class="description">
				<h2>{title}</h2>
				<p>
					{sizes.find((obj) => {
						return obj.reference === size;
					}).name}
				</p>
			</div>
			<div class="switch">
				<input
					id={path}
					{enabled}
					data-path={path}
					type="checkbox"
					name="enabled"
					on:change={triggerEvent(path, size)}
				/>
				<span class="slider round"></span>
			</div>
		</label>
	</div>
	<div class="preview"></div>
</li>

<style>
	li {
		display: flex;
		flex-direction: column;
		gap: 1.2rem;
		padding: 1.2rem;
		background-color: white;
		border-radius: var(--border-radius-default);
		box-shadow: var(--box-shadow-default);
	}
	.description {
		display: flex;
		flex-direction: column;
		width: 75%;
	}
	label {
		display: flex;
		justify-content: space-between;
		align-items: start;
	}
	h2 {
		font-size: 1.1rem;
		color: var(--c-text-primary);
		margin: 0;
	}
	p {
		font-size: 0.9rem;
		color: var(--c-text-secondary);
		margin: 0;
	}
	.preview {
		height: 8.5rem;
		width: 11rem;
		max-width: 100%;
		background-color: black;
		border-radius: 12px;
		margin-inline: auto;
	}

	/* toggle */
	.switch {
		position: relative;
		display: inline-block;
		width: 52px;
		height: 30px;
	}

	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: var(--c-border-default);
		-webkit-transition: 0.2s;
		transition: 0.2s;
	}

	.slider:before {
		position: absolute;
		content: '';
		height: 22px;
		width: 22px;
		left: 4px;
		bottom: 4px;
		background-color: white;
		-webkit-transition: 0.2s;
		transition: 0.2s;
	}

	input:checked + .slider {
		background-color: var(--c-primary-werktijden);
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(22px);
		-ms-transform: translateX(22px);
		transform: translateX(22px);
		box-shadow: 0 1px 6px rgba(0, 0, 0, .3);
	}

	.slider.round {
		border-radius: 34px;
		overflow: hidden;
	}

	.slider.round:before {
		border-radius: 50%;
	}
</style>
