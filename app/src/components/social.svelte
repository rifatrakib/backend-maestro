<script>
    export let data;
    export let isFooter = false;
</script>

<style>
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0;
        border-radius: 50%;
        border: 0px solid transparent;
        background-color: transparent;
    }

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 0px solid transparent;
    }

    img {
        width: 40px;
        height: 40px;
        border: 0px solid transparent;
    }

    img.hovering:hover {
        transform: scale(1.2);
    }
</style>

<button>
    <a href="{data.link}" target="_blank">
        <img class:hovering={!isFooter} src=".{data.logo}" alt="{data.alt}" />
    </a>
</button>
