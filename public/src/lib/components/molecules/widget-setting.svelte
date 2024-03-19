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

	// let myForm;
	let allListItemCheckboxes;
	// let enabled = false;

	const presenceChannel = pusher.subscribe(`presence-${$page.params.dashboardKoppelcode}`);

	function triggerEvent(path, size) {
		// console.log(Array.from(allListItemCheckboxes).find((obj) => obj.dataset.path === path).checked)
		// enabled = !enabled;
		// console.log(enabled);
		presenceChannel.trigger('client-change-setting', {
			path: path,
			size: size,
			enabled: Array.from(allListItemCheckboxes).find((obj) => obj.dataset.path === path).checked
		});
	}

	onMount(() => {
		allListItemCheckboxes = document.querySelectorAll('input[type="checkbox"]');
		// console.log(allListItemCheckboxes)
	});
</script>

<!-- <form
	id={path}
	method="POST"
	action="?/update"
	use:enhance={() => {
		return async ({ update }) => {
			update({ reset: false });
		};
	}}
>
	<li>
		<input type="hidden" name="widgetPath" value={path} />
		<input type="hidden" name="widgetSize" value={size} /> -->
<li class="widget-setting">
	<label for={path}>
		<h2>{title}</h2>
		<p>
			{sizes.find((obj) => {
				return obj.reference === size;
			}).name}
		</p>
	</label>
	<input
		id={path}
		{enabled}
		data-path={path}
		type="checkbox"
		name="enabled"
		on:change={triggerEvent(path, size)}
	/>
</li>

<!-- </li>
</form> -->

<style>
	li:first-child {
		border-top: 1px solid rgb(208, 208, 208);
	}
	li {
		display: flex;
		justify-content: space-between;
		background-color: white;
		border-bottom: 1px solid rgb(208, 208, 208);
		padding: 0.8rem;
	}
	label {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	h2,
	p {
		margin: 0;
		padding: 0;
	}
	h2 {
		font-size: 1.3rem;
	}
	p {
		font-size: 1rem;
		opacity: 0.6;
	}
	input {
		height: 1.5rem;
		width: 1.5rem;
		margin: auto 0 auto 0;
	}
</style>
