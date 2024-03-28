<script>
	export let content;
	export let icon;
</script>

<li><img src={icon} alt="" /><span>{content}</span></li>

<style>
    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .3rem;
    }
    img {
        width: 1.5rem;
        height: 1.5rem;
        filter: contrast(0);
    }
    li {
        filter: contrast(0);
        font-size: .8rem;
    }
</style>