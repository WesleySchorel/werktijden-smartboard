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

		localStorage.setItem('currentDashboard', dashboardKoppelcode);

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
	});
</script>

<svelte:head>
	<title>Widgets</title>
	<meta
		name="description"
		content="De beschikbare widgets voor het LiveWidgets dashboard van Werktijden.nl"
	/>
</svelte:head>

<div class="content">
	<h1>Widgets</h1>
	<header>
		<SearchBar content={'Zoek een widget'} filter={'widget-setting'} />

		<div class="options">
			<FilterBlock />
			<Kebab />
		</div>
	</header>

	<ul id="widget-settings">
		{#each availableWidgets as widget}
			<WidgetSetting
				title={widget.title}
				x={widget.x}
				y={widget.y}
				path={widget.path}
				preview={widget.preview}
				{enabled}
			/>
		{/each}
		<span id="no-content" class="state hide">Geen widgets met: </span>
		<span id="no-active">Er staan momenteel geen widgets aan.</span>
	</ul>
</div>

<style>
	header {
		position: sticky;
		top: 0;
		padding: 0.8rem 0 0.4rem 0;
		display: flex;
		flex-direction: column;
		gap: 12px;
		background-color: var(--c-background);
		box-shadow: 0 0 0 0.4rem var(--c-background);
		z-index: 1;
	}
	.options {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.content {
		display: flex;
		flex-direction: column;
		gap: 12px;
		width: 93%;
		max-width: 30rem;
		margin-inline: auto;
		padding-bottom: 8rem;
	}
	ul {
		display: flex;
		flex-direction: column;
		gap: 6px;
		list-style: none;
	}
</style>
