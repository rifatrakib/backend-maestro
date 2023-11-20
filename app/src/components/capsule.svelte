<script>
    export let name;
</script>

<style>
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 50%;
        padding: 10px;
        box-sizing: border-box;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
    }

    div:hover {
        background-color: #1c1c1c;
        transform: scale(1.1);
    }

    img {
        padding: 20px;
        max-width: 100%;
        max-height: 100%;
    }
</style>

<div>
    <img src="./icons/{name}.svg" alt="{name} logo" />
</div>
