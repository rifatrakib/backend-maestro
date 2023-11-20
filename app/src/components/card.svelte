<script>
    export let icon;
    export let title;
    export let description;
</script>

<style>
    div.card {
        display: flex;
        flex-direction: column;
        text-align: left;
        border-radius: 20px;
        gap: 0.5rem;
        padding: 2.5rem;
        box-sizing: border-box;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
    }

    div.card:hover {
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
        background-color: #1c1c1c;
    }

    img {
        max-width: 20%;
    }

    h3 {
        font-family: monospace;
        font-size: 1.5rem;
        font-weight: 700;
    }

    p {
        font-size: 1.2rem;
        font-weight: 500;
        text-align: justify;
        color: #ffffff90;
    }
</style>

<div class="card">
    <img src={`${icon.split(".svg")[0]}-hover.svg`} alt="{`${icon} icon`}" class="icon" />
    <h3>{title}</h3>
    <p>{description}</p>
</div>
