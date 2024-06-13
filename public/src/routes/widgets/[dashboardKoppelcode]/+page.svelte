<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import {
		WidgetSetting,
		pusher,
		availableWidgets,
		SearchBar,
		FilterBlock,
		ClearDashboardBtn
	} from '$lib/index.js';
	import Loading from '$lib/assets/loading.svg';

	const { dashboardKoppelcode } = $page.params;
	let enabledSettings = [];

	let enabled = false;
	let loading = true;

	onMount(() => {
		const presenceChannel = pusher.subscribe(`presence-${dashboardKoppelcode}`);
		const allListItemCheckboxes = document.querySelectorAll('input[type="checkbox"]');

		localStorage.setItem('currentDashboard', dashboardKoppelcode);

		presenceChannel.bind('pusher:subscription_succeeded', () => {
			presenceChannel.bind('client-dashboard-says-hi', (data) => {
				loading = false;
			});

			presenceChannel.trigger('client-request-data', {});

			presenceChannel.bind('client-new-data', (data) => {
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
				loading = false;
			});

			presenceChannel.bind('client-change-setting', (data) => {
				document.querySelector(`input[data-path="${data.path}"]`).checked = data.enabled;
			});
		});
		presenceChannel.trigger('client-request-data', {});

		presenceChannel.bind('client-new-data', (data) => {
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
			loading = false;
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

{#if loading === true}
	<div class="state loading">
		<img src={Loading} alt="" />
	</div>
{/if}
<div class="content">
	<h1>Widgets</h1>
	<header>
		<SearchBar content={'Zoek een widget'} filter={'widget-setting'} />

		<div class="options">
			<FilterBlock />
			<ClearDashboardBtn />
		</div>
	</header>

	<ul id="widget-settings">
		{#each availableWidgets as widget}
			<WidgetSetting
				title={widget.title}
				size={widget.size}
				path={widget.path}
				preview={widget.preview}
				{enabled}
			/>
		{/each}
		<span id="no-content" class="state hide">Geen widgets met: </span>
		<span id="no-active">Er staan momenteel geen widgets aan.</span>
	</ul>
	<section>
		<h2>Werktijden Smartboard</h2>
		<span>Versie: 1.0.0</span>
	</section>
</div>

<style>
	section {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	section > * {
		font-size: 0.8rem;
	}
	.state.loading {
		display: grid;
		place-items: center;
		position: fixed;
		top: 0;
		height: 100vh;
		width: 100%;
		background-color: white;
		font-size: 2rem;
		z-index: 3;
	}
	.state.loading > img {
		height: 5rem;
		width: 5rem;
		animation: 0.8s rotate infinite;
	}
	h1 {
		padding: 0;
	}
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
	}
	.content {
		display: flex;
		flex-direction: column;
		gap: 12px;
		width: 93%;
		max-width: 30rem;
		margin-inline: auto;
		padding-bottom: 5rem;
		margin-top: 2rem;
	}
	ul {
		display: flex;
		flex-direction: column;
		gap: 6px;
		list-style: none;
	}
</style>
