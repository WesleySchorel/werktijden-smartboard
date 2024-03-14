<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { ListItem, pusher, availableWidgets } from '$lib/index.js';

	const { dashboardKoppelcode } = $page.params;
	let enabledSettings;

	onMount(() => {
		const allListItemCheckboxes = document.querySelectorAll('form input[type="checkbox"]');
		const presenceChannel = pusher.subscribe(`presence-${dashboardKoppelcode}`);
		presenceChannel.bind('pusher:subscription_succeeded', () => {
			// console.log('pusher:subscription_succeeded');

			presenceChannel.trigger('client-request-data', {});
			// console.log('client-request-data');

			presenceChannel.bind('client-new-data', (data) => {
				// console.log('client-new-data');
				enabledSettings = data.settings;

				allListItemCheckboxes.forEach((checkbox) => {
					enabledSettings.find(
						(e, i) =>
							e.path === checkbox.getAttribute('data-path') && enabledSettings[i].enabled == true
					)
						? (checkbox.checked = true)
						: (checkbox.checked = false);
				});
			});
		});
		presenceChannel.bind('client-change-setting', (data) => {
			document.querySelector(`input[data-path="${data.path}"]`).checked = data.enabled;
		});
	});
</script>

<h1>
	Widget overzicht voor dashboard: {dashboardKoppelcode}
</h1>

{#each availableWidgets as widget}
	<ListItem title={widget.title} size={widget.size} path={widget.path} />
{/each}
