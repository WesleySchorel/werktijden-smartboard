<script>
	import { onMount } from 'svelte';
	import { enhance } from '$app/forms';
	import { pusher } from '$lib/index.js';
	import { page } from '$app/stores';

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
<label>
	{title}, {size}
	<input
		{enabled}
		data-path={path}
		type="checkbox"
		name="enabled"
		on:change={triggerEvent(path, size)}
	/>
</label>
<!-- </li>
</form> -->
