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

		res = Object.groupBy(widgetList, (o) => o.size.reference);
		console.log(res);

		presenceChannel.bind('client-change-setting', (widget) => {
			console.log(widget);
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

			res = Object.groupBy(widgetList, (o) => o.size.reference);
			console.log(res);
		});

		presenceChannel.bind('client-request-data', () => {
			presenceChannel.trigger('client-new-data', { settings: widgetList });
		});
	});
</script>

<div class="dashboard">
	{#if res.l}
		<div id="left">
			<div class="widgets l">
				{#each res.l.slice(0, 4) as widget}
					<div class="widget l"><div class="content">{widget.path}</div></div>
				{/each}
			</div>
		</div>
	{/if}

	{#if res.xl}
		<div id="center">
			<div class="widgets xl">
				{#each res.xl.slice(0, 2) as widget}
					<div class="widget xl"><div class="content">{widget.path}</div></div>
				{/each}
			</div>
		</div>
	{/if}

	{#if res.s || res.m || res.l}
		<div id="right">
			{#if res.s}
				<div class="widgets s">
					{#each res.s.slice(0, 2) as widget}
						<div class="widget s"><div class="content">{widget.path}</div></div>
					{/each}
				</div>
			{/if}
			{#if res.m}
				<div class="widgets m">
					{#each res.m.slice(0, 1) as widget}
						<div class="widget m"><div class="content">{widget.path}</div></div>
					{/each}
				</div>
			{/if}
			{#if res.l}
				<div class="widgets l">
					{#each res.l.slice(4, 5) as widget}
						<div class="widget l"><div class="content">{widget.path}</div></div>
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
		padding: 0.2rem;
	}

	.dashboard > div {
		display: flex;
		flex-direction: column;
		/*   justify-content: space-between; */
	}

	#left {
		
	}

	#center {
		margin-left: auto;
	}

	#right {
		margin-left: auto;
	}

	.widgets {
		display: flex;
		flex-wrap: wrap;
	}

	.widgets.s {
		flex-direction: row-reverse;
		max-width: 395px;
	}

	.widgets.m {
		max-width: 400px;
	}

	.widgets.l {
		max-width: 780px;
	}

	.widgets.xl {
		max-width: min-content;
	}

	.widget {
		padding: 0.2rem;
	}

	.widget .content {
		width: 100%;
		height: 100%;
		border: 2px solid black;
		border-radius: 8px;
	}

	.widget.s {
		width: 190px;
		height: 190px;
	}

	.widget.m {
		width: 380px;
		height: 190px;
	}

	.widget.l {
		width: 380px;
		height: 380px;
	}

	.widget.xl {
		width: 760px;
		height: 380px;
	}
</style>
