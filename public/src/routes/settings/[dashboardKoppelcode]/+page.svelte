<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { WidgetSetting, pusher, availableWidgets, SearchBar, FilterBlock } from '$lib/index.js';

	const { dashboardKoppelcode } = $page.params;
	let enabledSettings;

	let enabled = false;

	onMount(() => {
		const presenceChannel = pusher.subscribe(`presence-${dashboardKoppelcode}`);
		const allListItemCheckboxes = document.querySelectorAll('input[type="checkbox"]');
		presenceChannel.bind('pusher:subscription_succeeded', () => {
			// console.log('pusher:subscription_succeeded');

			presenceChannel.trigger('client-request-data', {});
			// console.log('client-request-data');

			presenceChannel.bind('client-new-data', (data) => {
				// console.log('client-new-data');
				enabledSettings = data.settings;

				allListItemCheckboxes.forEach((checkbox) => {
					if (
						enabledSettings.find(
							(e, i) =>
								e.path === checkbox.getAttribute('data-path') && enabledSettings[i].enabled == true
						)
					) {
						enabled = true;
						checkbox.checked = true;
					} else {
						enabled = false;
						checkbox.checked = false;
					}
				});
			});
			presenceChannel.bind('client-change-setting', (data) => {
				document.querySelector(`input[data-path="${data.path}"]`).checked = data.enabled;
			});
		});
	});
</script>

<div>
	<header>
		<h1>Widget settings</h1>

		<SearchBar content={'Zoek een widget'} filter={'widget-setting'} />

		<FilterBlock />
	</header>

	<ul id="widget-settings">
		{#each availableWidgets as widget}
			<WidgetSetting title={widget.title} size={widget.size} path={widget.path} {enabled} />
		{/each}
		<span id="no-content" class="state hide">No widgets that match: </span>
	</ul>
</div>

<style>
	header {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	div {
		display: flex;
		flex-direction: column;
		gap: 12px;
		width: 93%;
		max-width: 30rem;
		margin-inline: auto;
	}
	ul {
		display: flex;
		flex-direction: column;
		gap: 6px;
		list-style: none;
	}
</style>
