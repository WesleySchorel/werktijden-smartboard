<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { ListItem, pusher, availableWidgets } from '$lib/index.js';

	const { dashboardKoppelcode } = $page.params;
	let enabledSettings;

	let enabled = false;

	onMount(() => {
		const allListItemForms = document.querySelectorAll('form');

		allListItemForms.forEach((form) => {
			// console.log(form)
			// form.querySelector('input').onchange(allListItemForms.find((obj) => { obj.id === form})requestSubmit())
		});

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

<h1>
	Widget overzicht voor dashboard: {dashboardKoppelcode}
</h1>

{#each availableWidgets as widget}
	<ListItem title={widget.title} size={widget.size} path={widget.path} {enabled} />
{/each}
