<script>
	import { onMount } from 'svelte';

	const time = new Date();
	const hour = -3600 * (time.getHours() % 12);
	const mins = -60 * time.getMinutes();
	const seconds = -1 * time.getSeconds() - 1;

	onMount(() => {
		app.style.setProperty('--_ds', `${seconds}s`);
		app.style.setProperty('--_dm', `${mins + seconds}s`);
		app.style.setProperty('--_dh', `${hour + mins}s`);
	});
</script>

<div class="clock">
	<div class="clock-face" id="app">
		<time datetime="12:00">12</time>
		<time datetime="1:00">1</time>
		<time datetime="2:00">2</time>
		<time datetime="3:00">3</time>
		<time datetime="4:00">4</time>
		<time datetime="5:00">5</time>
		<time datetime="6:00">6</time>
		<time datetime="7:00">7</time>
		<time datetime="8:00">8</time>
		<time datetime="9:00">9</time>
		<time datetime="10:00">10</time>
		<time datetime="11:00">11</time>
		<div class="hands">
			<div class="second hand"></div>
			<div class="minute hand"></div>
			<div class="hour hand"></div>
		</div>
		<div class="dot"></div>
	</div>
</div>

<style>
	:root {
		--_r: calc((var(--_w) - var(--_sz)) / 2);
		--_w: 88cqi;
		--_sz: 16cqi;

		--second: 1s;
		--minute: calc(var(--second) * 60);
		--hour: calc(var(--minute) * 60);
	}
	.clock {
		position: absolute;
		height: 100%;
		width: 100%;
		display: grid;
		place-items: center;
		background-color: rgb(87, 87, 87);
		border-radius: var(--border-radius-widget);
	}
	.clock-face {
		width: 180px;
		height: 180px;
		border-radius: 50%;
		background-color: white;
		margin: 0 auto;
		position: relative;
		padding: unset;
		position: relative;
		inline-size: var(--_w);
	}
	.clock-face time {
		--_x: calc(var(--_r) + (var(--_r) * cos(var(--_d))));
		--_y: calc(var(--_r) + (var(--_r) * sin(var(--_d))));
		display: grid;
		height: var(--_sz);
		left: var(--_x);
		place-content: center;
		position: absolute;
		top: var(--_y);
		width: var(--_sz);
font-size: 1.4rem;
font-weight: 600;
	}

	.clock-face time:nth-child(1) {
		--_d: 270deg;
	}
	.clock-face time:nth-child(2) {
		--_d: 300deg;
	}
	.clock-face time:nth-child(3) {
		--_d: 330deg;
	}
	.clock-face time:nth-child(4) {
		--_d: 0deg;
	}
	.clock-face time:nth-child(5) {
		--_d: 30deg;
	}
	.clock-face time:nth-child(6) {
		--_d: 60deg;
	}
	.clock-face time:nth-child(7) {
		--_d: 90deg;
	}
	.clock-face time:nth-child(8) {
		--_d: 120deg;
	}
	.clock-face time:nth-child(9) {
		--_d: 150deg;
	}
	.clock-face time:nth-child(10) {
		--_d: 180deg;
	}
	.clock-face time:nth-child(11) {
		--_d: 210deg;
	}
	.clock-face time:nth-child(12) {
		--_d: 240deg;
	}
	.dot {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 6px;
		height: 6px;
		background-color: white;
		border: 2px solid black;
		border-radius: 50%;
	}
	.second {
		--width: 1px;
		--height: 80px;
		--color: red;
		animation-delay: var(--_ds) !important;
	}
	.minute {
		--width: 5px;
		--height: 80px;
		--color: #000000;
		animation-delay: var(--_dm) !important;
	}
	.hour {
		--width: 5px;
		--height: 50px;
		--color: #000000;
		animation-delay: var(--_dh) !important;
	}
    .hands {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transform-origin: center;
        rotate: 180deg;
    }
	.hand {
		position: absolute;
		top: 50%;
		left: calc(50% - var(--width) / 2);
		width: var(--width);
		height: var(--height);
		border-radius: calc(var(--width) / 2);
		background-color: var(--color);
		transform-origin: center 0;
	}
	.second.hand {
		animation: rotate steps(60) var(--minute) infinite;
	}
	.minute.hand {
		animation: rotate linear var(--hour) infinite;
	}
	.hour.hand {
		animation: rotate linear calc(var(--hour) * 12) infinite;
	}
	@keyframes rotate {
		from {
			transform: rotate(0);
		}
		to {
			transform: rotate(1turn);
		}
	}
</style>
