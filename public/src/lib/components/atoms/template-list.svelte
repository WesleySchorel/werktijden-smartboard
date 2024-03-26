<script>
	import { page } from '$app/stores';
</script>

<div class:active={$page.url.pathname.includes('widgets')}>
	<p>templates</p>
</div>

<style>
	div {
		display: none;
        align-items: center;
        justify-content: center;
        background-color: var(--c-primary-werktijden);
        width: 100%;
        padding: .5rem 0;
	}
    p {
        color: white;
        margin: 0;
    }
	.active {
		display: flex;
		color: var(--c-primary-werktijden);
	}
</style>
