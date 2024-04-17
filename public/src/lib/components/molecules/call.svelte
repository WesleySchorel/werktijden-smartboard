<script>
	export let data;

	$: status = data.status;

	const date = new Date();

	let callDuration;
	let seconds = 0;
	let minutes = 0;

	function incrementCallDuration() {
		seconds++;
	}

	$: if (seconds == 60) {
		minutes++;
		seconds = 0;
	}

	$: if (status === 'connected') {
		callDuration = setInterval(incrementCallDuration, 1000);
	} else {
		clearInterval(callDuration);
	}
</script>

<li id="call-123" class={'call ' + data.status + '-call'}>
	<div class="call-layout">
		<div>
			<img src="" alt="" />
		</div>
		<div>
			<p>{data.customer}</p>
			<p class="activity">
				<span class="duration">
					{('0' + minutes).slice(-2)}:{('0' + seconds).slice(-2)}
				</span><span class="status">
					{#if data.status === 'incoming'}
						Inkomend gesprek <span class="dots"></span>
					{:else if data.status === 'connected'}
						{data.colleague} is in gesprek <span class="dots"></span>
					{:else if data.status === 'disconnected'}
						Gesprek is beëindigd
					{/if}
				</span>
			</p>
		</div>
	</div>
	<div class="time">
		<span>{date.getHours()}:{date.getMinutes()}</span>
		<svg
			class="phone"
			width="15"
			height="23"
			viewBox="0 0 15 23"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				class="phone"
				d="M14.7813 20.3966L13.1708 16.8429C12.8241 16.0836 12.3761 15.531 11.6025 15.868L10.0765 16.47C8.8548 17.072 8.24609 16.47 7.63314 15.5625L4.88546 8.91783C4.53883 8.15856 4.7206 7.44423 5.49418 7.10728L7.62891 6.19976C8.40249 5.85832 8.2799 5.14848 7.93327 4.38922L6.1029 0.768125C5.75627 0.00886386 5.0461 -0.175336 4.27252 0.161615C2.72537 0.840008 1.44452 1.90477 0.611766 3.4817C-0.402762 5.40905 0.104502 8.09117 0.307408 9.21883C0.510313 10.3465 1.22048 12.3233 2.13778 14.3495C3.05509 16.3801 3.85825 17.975 4.5811 18.8781C5.29973 19.7811 7.02443 22.2521 9.15916 22.8047C10.9092 23.2539 12.7988 22.8765 14.3459 22.1982C15.1237 21.8747 15.1237 21.1603 14.7813 20.3966Z"
				fill="white"
			/>
		</svg>
	</div>
</li>

<style>
	.dots::after {
		position: relative;
		left: -3px;
		content: '';
		animation: dots 2s infinite;
	}
	p {
		margin: 0;
	}
	li {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-top: 1px solid var(--c-border-default);
		border-bottom: 1px solid var(--c-border-default);
		padding: 1rem 1.7rem;
		width: 100%;
	}
	.call-layout {
		display: flex;
		gap: 0.6rem;
	}
	.call-layout > div {
		display: flex;
		flex-direction: column;
		gap: 0.1rem;
	}
	p {
		font-size: 1.7rem;
	}
	.activity {
		display: flex;
		gap: 0.4rem;
		font-size: 1.2rem;
	}
	.time span {
		display: block;
		font-size: 1.7rem;
	}
	.duration {
		display: none;
	}
	.phone {
		display: none;
		height: 2.5rem;
		width: 2.5rem;
	}
	img {
		width: 2.2rem;
		height: 2.2rem;
		background-color: rgb(94, 66, 255);
		border-radius: 60%;
	}
	@keyframes dots {
		from {
			content: '.';
		}
		20% {
			content: '.';
		}
		40% {
			content: '..';
		}
		60% {
			content: '...';
		}
		to {
			content: '...';
		}
	}
</style>
