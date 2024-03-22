<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import {
		WidgetSetting,
		pusher,
		availableWidgets,
		SearchBar,
		FilterBlock,
		Kebab
	} from '$lib/index.js';

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

<div class="content">
	<header>
		<h1>Widget settings</h1>

		<SearchBar content={'Zoek een widget'} filter={'widget-setting'} />

		<div class="options">
			<FilterBlock />
			<Kebab />
		</div>
	</header>

	<ul id="widget-settings">
		{#each availableWidgets as widget}
			<WidgetSetting title={widget.title} size={widget.size} path={widget.path} {enabled} />
		{/each}
		<span id="no-content" class="state hide">Geen widgets met: </span>
		<span id="no-active">Er staan momenteel geen widgets aan.</span>
	</ul>
</div>

<style>
	header {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	.options {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.content {
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
