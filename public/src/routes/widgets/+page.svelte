<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let currentDashboard;

	onMount(() => {
		currentDashboard = localStorage.getItem('currentDashboard');
		currentDashboard != null ? goto(`/widgets/${currentDashboard}`) : goto('/toevoegen');
	});
</script>

voeg een dashboard toe
