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

{#if form?.koppel}
	<div class="notification">{form?.koppelcode} is succesvol gekoppeld!</div>
{/if}

{#if form?.ontkoppel}
	<div class="notification">{form?.koppelcode} is succesvol ontkoppeld!</div>
{/if}

<a href="/">home</a>

<style>
	.notification {
		position: fixed;
		bottom: 1rem;
		right: 1rem;
		padding: 0.5rem;
		background-color: rgba(0, 188, 0, 0.15);
		border: 1px solid rgb(0, 188, 0);
		border-radius: 3px;
		width: fit-content;
		animation: 5s show forwards;
	}

	@keyframes show {
		from {
			transform: translateX(50vw);
			display: block;
		}
		10% {
			transform: translateX(0);
			display: block;
		}
		80% {
			transform: translateX(0);
			display: block;
		}
		to {
			transform: translateX(50vw);
			display: none;
		}
	}
</style>
