<script>
	import { KoppelMobile } from '$lib/index.js';
	import { onMount } from 'svelte';
	import { pusher } from '$lib/index.js';
	import { goto } from '$app/navigation';
	import Werktijden from '$lib/assets/werktijden.svg';

	export let data;

	const generatedKoppelcode = data.koppelcode;
	const QRcodeSrc = data.QRcodeSrc;
	const delay = (ms) => new Promise((res) => setTimeout(res, ms));

	$: headlines = data.data;

	onMount(() => {
		console.log(generatedKoppelcode);
		const presenceChannel = pusher.subscribe(`presence-${generatedKoppelcode.replace(/\s/g, '')}`);
		presenceChannel.bind('pusher:subscription_succeeded', () => {
			presenceChannel.bind('pusher:member_added', async () => {
				const img = document.querySelector('#check');
				const qrcode = document.querySelector('#qr-code');

				img.classList.add('connected');
				qrcode.classList.add('fadeout');

				await delay(500);
				console.log(generatedKoppelcode);
				goto(generatedKoppelcode);
			});
		});
		setInterval(() => {
			let newDate = new Date();
			document.getElementById('currentTime').innerText =
				('0' + newDate.getHours()).slice(-2) + ':' + ('0' + newDate.getMinutes()).slice(-2);
		}, 990);

		const actualiteitChannel = pusher.subscribe('actualiteit-channel');

		actualiteitChannel.bind('update-actualiteit', (data) => {
			headlines = data.data;
		});
	});
</script>

<svelte:head>
	<title>LiveWidgets Werktijden</title>
	<meta name="description" content="Koppel met het Werktijden Smartboard." />
</svelte:head>
<div class="werktijden">
	<div class="dashboard">
		<KoppelMobile qrcodesrc={QRcodeSrc} koppelcode={generatedKoppelcode} />
	</div>

	<div class="werktijden-banner">
		<img src={Werktijden} alt="" class="logo" />
		<div id="rss-feed">
			<div class="banner">
				<div class="banner-content">
					{#each headlines as item}
						<h2>{item}</h2>
						<span>●</span>
					{/each}
				</div>
				<div class="banner-content">
					{#each headlines as item}
						<h2>{item}</h2>
						<span>●</span>
					{/each}
				</div>
			</div>
		</div>
		<span id="currentTime"></span>
	</div>
</div>

<style>
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		scroll-behavior: smooth;
	}

	.werktijden {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background-color: var(--c-primary-werktijden);
	}

	span {
		display: flex;
		align-items: center;
		font-size: 0.8rem;
		margin: 0 1rem 0 1rem;
	}

	.werktijden-banner {
		position: relative;
		top: -0.3rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 1rem;
	}

	#rss-feed {
		position: relative;
		display: flex;
		overflow: hidden;
	}

	#currentTime {
		color: white;
		background-color: var(--c-primary-werktijden);
		text-transform: uppercase;
		font-size: 1.8rem;
		padding-left: 1rem;
		width: 12rem;
		margin: 0;
		z-index: 1;
	}

	.logo {
		position: relative;
		top: 0.2rem;
		width: 13rem;
		margin: 0;
		padding-right: 1rem;
	}

	h2 {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1.8rem;
	}

	.banner {
		position: relative;
		color: white;
		position: relative;
		flex-shrink: 0;
		display: flex;
		overflow: hidden;
		z-index: 1;
		font-size: 1.85rem;
		height: 3rem;
	}

	.banner-content {
		position: relative;
		display: flex;
		flex-direction: row;
		flex-shrink: 0;
		animation: scroll 100s linear infinite;
	}

	@keyframes scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(calc(-100%));
		}
	}

	* {
		margin: 0;
		box-sizing: border-box;
	}

	.dashboard {
		position: relative;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		flex-grow: 1;
		justify-content: space-between;
		padding: 6px;

		height: -webkit-fill-available;
		border: 12px solid var(--c-primary-werktijden);
		border-radius: 24px;

		background-image: url('/werktijden-bg.svg');
		background-color: var(--c-background);
		background-repeat: repeat;
		background-size: 30rem;
	}

	@media screen and (max-width: 400px) {
		#rss-feed {
			display: none;
		}
		#currentTime {
			width: fit-content;
		}
		.logo {
			padding-right: 0;
			width: 9rem;
		}
	}
</style>
