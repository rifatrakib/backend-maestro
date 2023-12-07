<script>
    export let icon;
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
        transition: background-color 0.25s ease-in-out, transform 0.25s ease-in-out;
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

    @media screen and (max-width: 768px) {
        div {
            padding: 5px;
        }

        img {
            padding: 10px;
        }
    }
</style>

<div>
    <img src="{icon}" alt="{`${icon} logo`}" />
</div>
