<script>
	import { page } from '$app/stores';

	export let size;
	export let path;
</script>

<li>
	<input type="hidden" name="widgetPath" value={path} />
	<input type="hidden" name="widgetSize" value={size} />
	<label>
		{path} Widget, size {size}
		<input type="checkbox" name="enabled" />
	</label>
</li>
