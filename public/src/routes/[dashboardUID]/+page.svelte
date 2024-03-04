<script>
	import { page } from '$app/stores';
	import { Weer1, Analogeklok1, Actualiteitbanner } from '$lib/index.js';
</script>

<h1>
	Dashboard: {$page.params.dashboardUID}
</h1>

<Weer1 />
<Analogeklok1 size={"m"} path={"analogeklok-1"} title={"Analoge klok 1 widget"} />
<Actualiteitbanner size={"banner"} path={"actualiteitbanner"} title={"Actualiteitbanner widget"} />