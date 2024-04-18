<script>
	export let content;
</script>

<li>{content}</li>

<style>
	li {
		margin-bottom: 1rem;
		font-size: 1.4rem;
		list-style-position: inside;
		list-style-type: '✔ ';
	}

	li::marker {
		color: #009F66;
	}
</style>
