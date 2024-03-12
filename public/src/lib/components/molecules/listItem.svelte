<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
	import { pusher } from '$lib/index.js';

	export let size;
	export let path;

	let enabledSettings;
	let myForm;
	let enabled;

	const { dashboardKoppelcode } = $page.params;
	const presenceChannel = pusher.subscribe(`presence-${dashboardKoppelcode}`);

	presenceChannel.bind('pusher:subscription_succeeded', () => {
		presenceChannel.trigger('client-request-data', {});
	});

	let loading = false;

	onMount(() => {
		presenceChannel.bind('client-new-data', (data) => {
			enabledSettings = data;

			enabledSettings.settings.find((e) => e.path === path) ? (enabled = true) : (enabled = false);
		});
		myForm = document.querySelector(`form#${path}`);
		presenceChannel.bind('client-change-setting', (data) => {
			document.querySelector(`form#${data.path} input[type="checkbox"]`).checked = data.enabled;
		});
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
			{#if enabled}
				<input checked type="checkbox" name="enabled" on:change={() => myForm.requestSubmit()} />
			{:else}
				<input type="checkbox" name="enabled" on:change={() => myForm.requestSubmit()} />
			{/if}
		</label>
	</li>
</form>
