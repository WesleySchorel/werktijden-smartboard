<script>
	import { BulletBlock, BulletHeading, BulletText } from '$lib/index.js';
	export let icon;
	export let heading;
	export let text;
</script>

<section>
	<BulletBlock {icon} />
	<div>
		<BulletHeading {heading} />
		<BulletText {text} />
	</div>
</section>

<style>
	div {
		gap: 0.5rem;
		margin-bottom: 0.5rem;
		max-width: 19rem;
	}
	
	section {
		padding-right: 0rem;
		margin-bottom: 1rem;
		display: flex;
		align-items: flex-start;
		gap: 1rem;
	}

	@media screen and (max-width: 720px) {
		div {
			max-width: 14rem;
		}

		section {
			margin-bottom: 0;
		}
	}
</style>
