<script>
	import { page } from '$app/stores';
	import { Weer1, Analogeklok1 } from '$lib/index.js';
</script>

<h1>
	Dashboard: {$page.params.dashboardUID}
</h1>

<Weer1 />
<Analogeklok1 size={"banner"} path={"analogeklok-1"} title={"Analoge klok 1 widget"} />
