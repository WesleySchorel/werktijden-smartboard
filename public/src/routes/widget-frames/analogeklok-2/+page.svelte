<script>
	import { onMount } from 'svelte';

	let hr_rotation = 0;
	let min_rotation = 0;
	let sec_rotation = 0;

	function updateClock() {
		const d = new Date();
		const hr = d.getHours();
		const min = d.getMinutes();
		const sec = d.getSeconds();

		hr_rotation = 30 * hr + min / 2;
		min_rotation = 6 * min;
		sec_rotation = 6 * sec;

		setTransform('hour', hr_rotation);
		setTransform('minute', min_rotation);
		setTransform('second', sec_rotation);
	}

	function setTransform(elementId, rotation) {
		const element = document.getElementById(elementId);
		if (element) {
			element.style.transform = `rotate(${rotation}deg)`;
		}
	}

	onMount(() => {
		updateClock();
		const interval = setInterval(updateClock, 1000);

		return () => clearInterval(interval);
	});
</script>

<div class="clock">
	<div class="clock-face">
		<div id="hour"></div>
		<div id="minute"></div>
		<div id="second"></div>
		<div class="dot"></div>
	</div>
</div>

<style>
	.clock {
		position: absolute;
		height: 100%;
		width: 100%;
		display: grid;
		place-items: center;
		background-color: #000000;
		border-radius: var(--border-radius-widget);
	}
	.clock-face {
		width: 180px;
		height: 180px;
		border-radius: 50%;
		background-color: white;
		background-image:
			radial-gradient(circle at center, white 50%, transparent 50%, transparent 65%, white 65%),
			linear-gradient(to right, transparent 50%, #000000 50%, transparent 51%),
			linear-gradient(to bottom, transparent 50%, #000000 50%, transparent 51%),
			linear-gradient(-30deg, transparent 50%, #000000 50%, transparent 51%),
			linear-gradient(30deg, transparent 50%, #000000 50%, transparent 51%),
			linear-gradient(60deg, transparent 50%, #000000 50%, transparent 51%),
			linear-gradient(-60deg, transparent 50%, #000000 50%, transparent 51%);
		margin: 0 auto;
		position: relative;
		inline-size: 88%;
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

	#hour,
	#minute,
	#second {
		position: absolute;
		background: rgb(0, 0, 0);
		border-radius: 1rem;
		transform-origin: bottom;
	}

	#hour {
		width: 5px;
		height: 50px;
		top: calc(50% - 50px);
		left: calc(50% - 2.5px);
	}

	#minute {
		width: 5px;
		height: 80px;
		top: calc(50% - 80px);
		left: calc(50% - 2.5px);
	}

	#second {
		background: red;
		width: 1px;
		height: 80px;
		top: calc(50% - 80px);
		left: calc(50% - 0.5px);
	}
</style>
