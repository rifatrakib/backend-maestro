<script>
    export let name;

    const filename = name.toLowerCase();
</script>

<style>
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 20px;
        border-radius: 20px;
        background-color: #ffffffcf;
        padding: 20px;
        width: calc(100% - 20px);
        box-sizing: border-box;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
    }

    img {
        max-width: 100%;
        max-height: 100%;
        padding: 20px;
    }
</style>

<div>
    <img src="/icons/{filename}.svg" alt="{name} logo" />
</div>
