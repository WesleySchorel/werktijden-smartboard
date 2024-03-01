<script>
	import { Step, Iphone } from '$lib/index.js';

	export let koppelcode;
</script>

<div class="demo">
	<div class="steps">
		<Step
			step={'1'}
			heading={'QR-code'}
			text={'Scan de qr-code met je mobiel om te starten met de koppeling.'}
		/>
		<Step
			step={'2'}
			heading={'Unieke koppelcode'}
			text={'Gebruik de koppelcode om je mobiel met het dashboard te koppelen.'}
		/>
	</div>
	<Iphone {koppelcode} />
</div>

<style>
	.demo {
		display: flex;
	}
	.steps {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
        padding: 2rem 0 4rem 0;
	}
    @media screen and (max-width: 720px) {
		.steps {
			padding: 0;
			gap: 3rem;
		}
		.demo {
            flex-direction: column-reverse;
            margin-inline: auto;
            gap: 2rem;
        }
	}
</style>
