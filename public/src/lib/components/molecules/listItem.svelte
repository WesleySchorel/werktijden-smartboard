<script>
	import { onMount } from 'svelte';
	import { enhance } from '$app/forms';

	export let title;
	export let size;
	export let path;

	let myForm;

	onMount(() => {
		// console.log('mounted new ListItem')
		myForm = document.querySelector(`form#${path}`);
	});
</script>

<form
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
		<input type="hidden" name="widgetSize" value={size} />
		<label>
			{title}, {size}
			<input
				data-path={path}
				type="checkbox"
				name="enabled"
				on:change={() => myForm.requestSubmit()}
			/>
		</label>
	</li>
</form>
