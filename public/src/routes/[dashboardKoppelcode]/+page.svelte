<script>
	import { page } from '$app/stores';
	import { Widget } from '$lib/index.js';

	import { pusher } from '$lib/index.js';
	import { onMount } from 'svelte';

	const { dashboardKoppelcode } = $page.params;
	const presenceChannel = pusher.subscribe(`presence-${dashboardKoppelcode}`);

	let widgetList = [];

	onMount(() => {
		let localWidgetList = localStorage.getItem(`localWidgetListOf${dashboardKoppelcode}`);
		localStorage.clear();
		localStorage.setItem(`localWidgetListOf${dashboardKoppelcode}`, localWidgetList);
		localWidgetList = localStorage.getItem(`localWidgetListOf${dashboardKoppelcode}`);
		if (JSON.parse(localWidgetList)) widgetList = JSON.parse(localWidgetList);

		presenceChannel.bind('client-change-setting', (widget) => {
			if (widget.enabled && !widgetList.find((obj) => obj.path === widget.path)) {
				widgetList.push(widget);
			}
			if (!widget.enabled && widgetList.find((obj) => obj.path === widget.path)) {
				widgetList.splice(
					widgetList.indexOf(widgetList.find((obj) => obj.path === widget.path)),
					1
				);
			}

			localStorage.setItem(`localWidgetListOf${dashboardKoppelcode}`, JSON.stringify(widgetList));
			localWidgetList = localStorage.getItem(`localWidgetListOf${dashboardKoppelcode}`);
			widgetList = widgetList;
		});
	});
</script>

<h1>
	Dashboard: {dashboardKoppelcode}
</h1>

{#each widgetList as widget}
	<Widget path={widget.path} size={widget.size} />
{/each}
