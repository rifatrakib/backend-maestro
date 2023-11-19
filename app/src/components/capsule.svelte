<script>
    export let name;

    const filename = name.toLowerCase();
</script>

<style>
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 50%;
        background-color: #ffffffcf;
        padding: 10px;
        box-sizing: border-box;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
    }

    img {
        max-width: 100%;
        max-height: 100%;
    }
</style>

<div>
    <img src="/icons/{filename}.svg" alt="{name} logo" />
</div>
