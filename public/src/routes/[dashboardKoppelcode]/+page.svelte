<script>
	import { page } from '$app/stores';
	import { Widget } from '$lib/index.js';

	import { pusher } from '$lib/index.js';
	import { onMount } from 'svelte';

	import Werktijden from '$lib/assets/werktijden.svg';

	export let data;
	const { dashboardKoppelcode } = $page.params;

	let widgetList = [];

	let res = [];

	$: headlines = data.data;

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

		setInterval(() => {
			let newDate = new Date();
			document.getElementById('currentTime').innerText =
				newDate.getHours() + ':' + newDate.getMinutes();
		}, 990);

		const actualiteitChannel = pusher.subscribe('actualiteit-channel');

		actualiteitChannel.bind('update-actualiteit', (data) => {
			headlines = data.data;
		});
	});
</script>

<div class="werktijden">
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

	<div class="werktijden-banner">
		<img src={Werktijden} alt="" class="logo" />
		<div id="rss-feed">
			<div class="banner">
				<div class="banner-content">
					{#each headlines as item}
						<h2>{item}</h2>
						<span>●</span>
					{/each}
				</div>
				<div class="banner-content">
					{#each headlines as item}
						<h2>{item}</h2>
						<span>●</span>
					{/each}
				</div>
			</div>
		</div>
		<span id="currentTime"></span>
	</div>
</div>

<style>
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		scroll-behavior: smooth;
	}

	.werktijden {
		display: flex;
		flex-direction: column;
		height: 100dvh;
	}

	span {
		display: flex;
		align-items: center;
		font-size: 0.8rem;
		margin: 0 1rem 0 1rem;
	}

	.werktijden-banner {
		display: flex;
		align-items: center;
		padding: 0 1rem;
	}

	#rss-feed {
		position: relative;
		/* margin: -6px; */
		/* top: 2px; */
		/* height: fill-available; */
		display: flex;
		overflow: hidden;
		/* background-color: #524040; */
	}

	#currentTime {
		color: white;
		background-color: var(--c-primary-werktijden);
		text-transform: uppercase;
		font-size: 2rem;
		width: 12rem;
		padding-left: 1.5rem;
		/* padding-right: 1rem; */
		/* border-left: 1px solid white; */
		margin: 0;
		z-index: 1;
	}

	.logo {
		width: 12rem;
		padding-right: 1rem;
	}

	h2 {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 2rem;
	}

	.banner {
		position: relative;
		color: white;
		/* background-color: #1941a7; */
		position: relative;
		flex-shrink: 0;
		display: flex;
		overflow: hidden;
		z-index: 1;
		font-size: 1.85rem;
		height: 3.5rem;
	}

	.banner-content {
		position: relative;
		display: flex;
		flex-direction: row;
		flex-shrink: 0;
		animation: scroll 100s linear infinite;
	}

	@keyframes scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(calc(-100%));
		}
	}

	* {
		margin: 0;
		box-sizing: border-box;
	}

	.dashboard {
		position: relative;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 6px;

		height: -webkit-fill-available;
		border: 12px solid var(--c-primary-werktijden);
		border-radius: 24px;

		/* background-color: var(--c-background); */
		background-image: url("https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=4896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
		background-repeat: no-repeat;
		background-size: cover;
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
