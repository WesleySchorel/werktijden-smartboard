<script>
    import { onMount } from 'svelte';
  
    onMount(() => {
        setInterval(() => {
            const currentTime = new Date();
            const hours = currentTime.getHours().toString().padStart(2, '0');
            const minutes = currentTime.getMinutes().toString().padStart(2, '0');
            document.getElementById('currentTime').innerText = `${hours}:${minutes}`;
        }, 1000);
    });
</script>

<div class="clock">
    <div class="clock-face">
        <h1 id="currentTime"></h1>
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
        display: flex;
        justify-content: center;
        align-items: center;
        width: 180px;
        height: 180px;
        border-radius: 50%;
        background-color: white;
    }

    h1 {
        font-size: 3rem;
        margin-bottom: 0.5rem;
    }
</style>
