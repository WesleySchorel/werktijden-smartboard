<script>
	import { enhance } from '$app/forms';

	export let data;
	export let form;
</script>

<h1>Overzicht van dashboards</h1>

<ul>
	{#each data.koppelcodes as koppelcode}
		<form method="POST" action="?/ontkoppel" use:enhance>
			<li><a href="/overzicht/{koppelcode}">{koppelcode}</a></li>
			<input type="hidden" name="koppelcode" value={koppelcode} />
			<button>x</button>
		</form>
	{/each}
</ul>

<form method="POST" action="?/koppel" use:enhance>
	<label>
		Koppelcode:
		<input required type="text" name="koppelcode" />
	</label>
	<button>Koppel met dashboard</button>
</form>

{#if form?.success}
	<p>gekoppeld!</p>
{/if}

<a href="/">home</a>
