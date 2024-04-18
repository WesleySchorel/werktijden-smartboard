<script>
    export let url, content
</script>

<a href={url}>{content}</a>

<style>
    a {
        color: white;
        background-color: #008649;
        margin-right: 0.75rem;
        padding: .5rem 1rem;
        border-radius: 1.5rem;
        font-size: 1.1rem;
        text-align: center;
        text-decoration: none;
        cursor: pointer;
    }

    a:hover {
        opacity: 0.9;
    }
</style>