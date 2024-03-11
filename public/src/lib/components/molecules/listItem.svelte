<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';

	export let size;
	export let path;
	let myForm;

	let loading = false;

	onMount(() => {
		myForm = document.querySelector(`form#${path}`);
	});
</script>

<form
	id={path}
	method="POST"
	action="?/update"
	use:enhance={() => {
		loading = true;
		return async ({ update }) => {
			loading = false;
			update({ reset: false });
		};
	}}
>
	<li>
		<input type="hidden" name="widgetPath" value={path} />
		<input type="hidden" name="widgetSize" value={size} />
		<label>
			{path} Widget, size {size}
			<input type="checkbox" name="enabled" on:change={() => myForm.requestSubmit()} />
		</label>
	</li>
	<button>opslaan</button>
</form>
