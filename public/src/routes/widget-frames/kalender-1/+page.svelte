<script>
	let getDate = new Date();
	let currentDate = getDate.getDate();
	let currentMonth = getDate.toLocaleDateString('nl-NL', { month: 'long' });
</script>

<div class="line"></div>
<div class="widget">
	<p>{currentDate}</p>
	<span>{currentMonth}</span>
</div>

<style>
	.widget {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: rgb(255, 255, 255);
		padding: 0.8rem;
	}

	.line {
		position: absolute;
		z-index: 1;
		top: 0rem;
		width: 100%;
		padding: 0.25rem;
		border-width: 1.25rem 2rem;
		border-style: solid;
		border-color: #009F66;
        border-radius: var(--border-radius-widget) var(--border-radius-widget) 0 0 ;
		background-color: rgb(255, 255, 255);
        box-shadow: var(--box-shadow-extra);
	}

	p {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 5rem;
		margin: auto;
        color: var(--c-text-primaru);
	}

	span {
		position: absolute;
		font-size: 1.5rem;
		bottom: 1.5rem;
        color: var(--c-text-secondary);
        text-transform: uppercase;
	}
</style>
