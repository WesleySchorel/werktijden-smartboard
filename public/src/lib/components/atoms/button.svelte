<script>
    export let url, content
</script>

<a href={url}>{content}</a>

<style>
    a {
        all: unset;
        padding: .5rem 1rem;
        background-color: #008649;
        color: white;
        border-radius: 4px;
        font-size: 1.1rem;
        cursor: pointer;
    }
</style>