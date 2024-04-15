<script>
	import { pusher } from '$lib/index.js';
	import { onMount } from 'svelte';

	onMount(() => {
		// 	// image = 'zonnig';
		// 	const liveWeerChannel = pusher.subscribe('liveweer-channel');

		// 	liveWeerChannel.bind('update-liveweer', (data) => {
		// 		console.log(data);
		// 		weatherData = data.data;
		// 	});
		const incomingCallNotifier = document.querySelector('#incoming-call');
		const privateCallChannel = pusher.subscribe('private-call');

		privateCallChannel.bind('caller-status', async (data) => {
			if (data.status == 'INCOMING') {
				incomingCallNotifier.classList.add('incoming-call');
				incomingCallNotifier.classList.remove('connected-call');
				incomingCallNotifier.classList.remove('disconnected-call');
			} else if (data.status == 'CONNECTED') {
				incomingCallNotifier.classList.remove('incoming-call');
				incomingCallNotifier.classList.add('connected-call');
				incomingCallNotifier.classList.remove('disconnected-call');
			} else if (data.status == 'DISCONNECTED') {
				incomingCallNotifier.classList.remove('incoming-call');
				incomingCallNotifier.classList.remove('connected-call');
				incomingCallNotifier.classList.add('disconnected-call');
			}
			console.log(data);
		});
	});
</script>

<section class="widget">
	<div id="incoming-call">
		<div class="caller">
			<img src="" alt="" />
			<div class="info">
				<div class="top">
					<h2>Ellen van Dijk</h2>
				</div>
				<div class="company">Keuringsbedrijf</div>
			</div>
			<div class="call-icons">
				<div class="accept"></div>
				<div class="cancel"></div>
			</div>
		</div>
	</div>

	<h1>Gesprekken</h1>

	<ol id="history">
		<li class="in-call">
			<div class="caller">
				<img src="" alt="" />
				<div class="info">
					<div class="top">
						<h2>Ellen van Dijk</h2>
						<div class="duration">02:13</div>
					</div>
					<div class="company">Keuringsbedrijf</div>
				</div>
			</div>
			<div class="time">10:48</div>
		</li>
		<li class="">
			<div class="caller">
				<img src="" alt="" />
				<div class="info">
					<div class="top">
						<h2>Ellen van Dijk</h2>
						<div class="duration">02:13</div>
					</div>
					<div class="company">Keuringsbedrijf</div>
				</div>
			</div>
			<div class="time">10:48</div>
		</li>
		<li class="">
			<div class="caller">
				<img src="" alt="" />
				<div class="info">
					<div class="top">
						<h2>Ellen van Dijk</h2>
						<div class="duration">02:13</div>
					</div>
					<div class="company">Keuringsbedrijf</div>
				</div>
			</div>
			<div class="time">10:48</div>
		</li>
		<li class="">
			<div class="caller">
				<img src="" alt="" />
				<div class="info">
					<div class="top">
						<h2>Ellen van Dijk</h2>
						<div class="duration">02:13</div>
					</div>
					<div class="company">Keuringsbedrijf</div>
				</div>
			</div>
			<div class="time">10:48</div>
		</li>
		<li class="">
			<div class="caller">
				<img src="" alt="" />
				<div class="info">
					<div class="top">
						<h2>Ellen van Dijk</h2>
						<div class="duration">02:13</div>
					</div>
					<div class="company">Keuringsbedrijf</div>
				</div>
			</div>
			<div class="time">10:48</div>
		</li>
	</ol>
</section>

<style>
	#incoming-call {
		display: none;
		position: absolute;
		padding: 0.8rem 1rem;
		margin: 0.5rem;
		width: -webkit-fill-available;
		box-shadow: var(--box-shadow-extra);
		border-radius: var(--border-radius-widget);
		background-color: white;
		z-index: 1;
	}

	.call-icons {
		display: flex;
		gap: 0.5rem;
		margin-left: auto;
	}
	.call-icons :is(.accept, .cancel) {
		width: 2.8rem;
		height: 2.8rem;
		border-radius: 50%;
	}
	.call-icons .accept {
		background-color: #009f66;
	}
	.call-icons .cancel {
		background-color: #ff0000;
	}
	section {
		background-color: white;
	}
	#history {
		position: relative;
		z-index: 1;
	}
	li {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 1.4rem;
		border-top: 1px solid var(--c-border-default);
		border-bottom: 1px solid var(--c-border-default);
		padding: 0.8rem 1.5rem;
		width: 100%;
		background-color: white;
	}
	.caller {
		display: flex;
		align-items: center;
		gap: 0.6rem;
	}
	.caller .top {
		display: flex;
		align-items: center;
		gap: 0.6rem;
	}
	.caller .info {
		display: flex;
		flex-direction: column;
		gap: 0.1rem;
	}
	.time {
		font-size: 2rem;
		opacity: 50%;
	}
	h1 {
		padding: 1.8rem 1.5rem;
		margin: 0rem;
		font-size: 2.4rem;
	}
	img {
		width: 2.8rem;
		height: 2.8rem;
		background-color: black;
		border-radius: 60%;
	}
	h2 {
		margin: 0;
		font-size: 2rem;
		text-overflow: ellipsis;
		text-wrap: nowrap;
		overflow: hidden;
		max-width: 19rem;
	}
</style>
