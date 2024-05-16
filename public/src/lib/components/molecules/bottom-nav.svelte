<script>
	import { NavItem, TemplateList } from '$lib/index.js';
	import { page } from '$app/stores';
	import WidgetsIcon from '$lib/assets/widgets-menu.svg'
	import Plus from '$lib/assets/plus.svg';
	import Gear from '$lib/assets/gear.svg';
</script>

<div class="bottom-nav">
	<TemplateList />

	<!-- <nav>
		<a class:active={$page.url.pathname.includes('widgets')} href="/widgets">
			<NavItem content="Widgets" icon={WidgetsIcon} />
		</a>
		<a class:active={$page.url.pathname.includes('toevoegen')} href="/toevoegen">
			<NavItem content="Toevoegen" icon={Plus} />
		</a>
		<a class:active={$page.url.pathname.includes('settings')} href="/settings">
			<NavItem content="Settings" icon={Gear} />
		</a>
	</nav> -->
</div>

<style>
	.bottom-nav {
		position: fixed;
		bottom: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		background-color: white;
		z-index: 1;
	}
	nav {
		display: flex;
		justify-content: space-around;
		width: 100%;
		max-width: 40rem;
		padding: .6rem 0;
		background-color: white;
	}
	a {
		text-decoration: none;
		color: var(--c-primary-werktijden);
	}
	.active {
		display: block;
		filter: contrast(1);
	}
	
</style>
