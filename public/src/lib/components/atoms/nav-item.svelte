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
        gap: .4rem;
    }
    img {
        width: 1.7rem;
        height: 1.7rem;
        filter: contrast(0);
    }
    li {
        filter: contrast(0);
        font-size: .9rem;
    }
</style>