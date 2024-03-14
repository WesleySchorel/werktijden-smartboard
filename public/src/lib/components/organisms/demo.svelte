<script>
	import { DemoColumn, GreenLink } from '$lib/index.js';
	import { page } from '$app/stores';
	import tvframe from '$lib/assets/tvframe.svg';
	import phoneframe from '$lib/assets/phoneframe.webp';
	import underline from '$lib/assets/underline.svg';
</script>

<div class="demo">
	<section>
		<h2>Test onze <span>LiveWidgets</span> demo</h2>
		<p>Maak kennis met onze meest gebruikte widgets.</p>
	</section>

	<div class="tv-container">
		<img src={tvframe} alt=""/>
		<iframe
			src={$page.url.origin}
			title="Werktijden smartboard demo"
			width="940"
			height="545"
			frameborder="0"
		></iframe>
	</div>
	<div class="phone-container"><img class="phone" src={phoneframe} alt=""/></div>
	<img class="underline" src={underline} alt=""/>
	
	<DemoColumn />
</div>

<style>
    p {
        color: #696969;
        font-size: 1.3rem;
		margin: 0 0 1rem 0;
    }
	
	.demo {
		margin-top: 9rem;
		padding: 3rem 0 2.5rem 0;
		width: 100%;
		background-color: rgba(199, 232, 216, 0.2);
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	section {
		display: flex;
		flex-direction: column;
		text-align: center;
	}

	
	span {
		color: #009f66;
	}

	.tv-container {
		position: relative;
		margin-top: 1.5rem;
	}

	.tv-container img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: auto;
		z-index: 1;
	} 

	.phone-container {
		position: absolute;
		right: 22rem;
		height: 20rem;
		overflow: hidden;
		z-index: 1;
		background-color: rgb(255, 255, 255);
		border-radius: 2.7rem 2.7rem 0 0;
	}

	.underline {
		position: absolute;
		margin-top: 20rem;
		right: 20rem;
		height: 1rem;
		z-index: 1;
	}

    @media screen and (max-width: 720px) {
		section, .tv-container, .phone, .underline {
			display: none;
		}

		.demo {
			padding: 2rem 0 2rem 0;
		}
	}
</style>
