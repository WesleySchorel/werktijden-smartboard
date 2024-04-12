<script>
	let getDate = new Date();
	let currentWeekDay = getDate.toLocaleDateString('nl-NL', { weekday: 'long' });
	let currentDate = getDate.toLocaleDateString('nl-NL', { day: 'numeric' });
	let currentMonth = getDate.toLocaleDateString('nl-NL', { month: 'long' });
</script>

<div class="top">
	<span>{currentMonth}</span>
</div>
<div class="line"></div>
<div class="layered-paper">
	<h1>{currentDate}</h1>
	<p>{currentWeekDay}</p>
</div>

<style>
	.top {
		color: white;
		text-transform: uppercase;
		background-color: #009f66;
        background-image: linear-gradient(to right, #009f66 , #008E5B);
		border-radius: var(--border-radius-widget) var(--border-radius-widget) 0 0;

		width: 100%;
		padding: 0.45rem 0 0.36rem 0;
		font-size: 1.5rem;

		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.line {
        border-top: 2px dashed #00764b;
        background: #009f66;
        background-image: linear-gradient(to right, #009f66 , #008E5B);
        padding: 1px;
	}

	.layered-paper {
		background: white;
		border-top: 0.25rem solid #00764b;
		width: 100%;
		box-shadow:
			0 1px 1px rgba(0, 0, 0, 0.20),
			0 7px 0 0 white,
			0 8px 1px 0 rgba(0, 0, 0, 0.20),
			0 15px 0 0 white,
			0 16px 1px 0 rgba(0, 0, 0, 0.20);
		border-radius: 0 0 var(--border-radius-widget) var(--border-radius-widget);
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	h1 {
		font-size: 5rem;
		margin-bottom: 2.7rem;
	}

	p {
		position: absolute;
		font-size: 1.5rem;
		margin: 2rem;
		bottom: 0rem;
		color: var(--c-text-secondary);
		text-transform: uppercase;
	}
</style>
