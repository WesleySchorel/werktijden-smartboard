<script>
	import { page } from '$app/stores';
	import { Widget } from '$lib/index.js';

	import { pusher } from '$lib/index.js';
	import { onMount } from 'svelte';

	const { dashboardKoppelcode } = $page.params;

	let widgetList = [];

	let res = [];

	onMount(() => {
		const presenceChannel = pusher.subscribe(`presence-${dashboardKoppelcode}`);
		let localWidgetList = localStorage.getItem(`localWidgetListOf${dashboardKoppelcode}`);
		localStorage.clear();
		localStorage.setItem(`localWidgetListOf${dashboardKoppelcode}`, localWidgetList);
		localWidgetList = localStorage.getItem(`localWidgetListOf${dashboardKoppelcode}`);
		if (JSON.parse(localWidgetList)) widgetList = JSON.parse(localWidgetList);

		res = groupBy(widgetList, 'sizeReference');

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

			res = groupBy(widgetList, 'sizeReference');
		});

		presenceChannel.bind('client-request-data', () => {
			presenceChannel.trigger('client-new-data', { settings: widgetList });
		});

		function groupBy(arr, property) {
			return arr.reduce(function (memo, x) {
				if (!memo[x[property]]) {
					memo[x[property]] = [];
				}
				memo[x[property]].push(x);
				return memo;
			}, {});
		}
	});
</script>

<div class="dashboard">
	{#if res.l}
		<div id="left">
			<div class="widgets l">
				{#each res.l.slice(1, 5) as widget}
					<Widget size={widget.size} path={widget.path} />
				{/each}
			</div>
		</div>
	{/if}

	{#if res.xl}
		<div id="center">
			<div class="widgets xl">
				{#each res.xl.slice(0, 2) as widget}
					<Widget size={widget.size} path={widget.path} />
				{/each}
			</div>
		</div>
	{/if}

	{#if res.s || res.m || res.l}
		<div id="right">
			{#if res.s}
				<div class="widgets s">
					{#each res.s.slice(0, 2) as widget}
						<Widget size={widget.size} path={widget.path} />
					{/each}
				</div>
			{/if}
			{#if res.m}
				<div class="widgets m">
					{#each res.m.slice(0, 1) as widget}
						<Widget size={widget.size} path={widget.path} />
					{/each}
				</div>
			{/if}
			{#if res.l}
				<div class="widgets l">
					{#each res.l.slice(0, 1) as widget}
						<Widget size={widget.size} path={widget.path} />
					{/each}
				</div>
			{/if}
		</div>
	{/if}
</div>

<style>
	* {
		margin: 0;
		box-sizing: border-box;
	}

	.dashboard {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 6px;
	}

	.dashboard > div {
		display: flex;
		flex-direction: column;
	}

	#center {
		margin-left: auto;
	}

	.widgets {
		display: flex;
		flex-wrap: wrap;
	}

	.widgets.s {
		margin-left: auto;
		width: max-content;
	}

	.widgets.l {
		max-width: 840px;
	}

	.widgets.xl {
		max-width: min-content;
		margin-left: auto;
	}
</style>
