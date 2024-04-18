<script>
	import { FilterOption } from '$lib/index.js';
</script>

<div id="widget-filter">
	<FilterOption content={'alles'} filter={''} checked />
	<FilterOption content={'actieve widgets'} filter={'active-widgets'} />
</div>

<style>
	div {
		background-color: #ebebeb;
		width: fit-content;
		padding: 2px;
		border-radius: var(--border-radius-default);
	}
</style>
