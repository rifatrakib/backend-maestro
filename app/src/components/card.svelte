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
        background-color: #ffffffcf;
        gap: 0.5rem;
        padding: 2.5rem;
        box-sizing: border-box;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
    }

    div.card:hover {
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
        background-color: #000000cf;
    }

    img {
        max-width: 20%;
    }

    h3 {
        font-family: monospace;
        font-size: 1.5rem;
        font-weight: 700;
        color: #105043;
    }

    p {
        font-size: 1.2rem;
        font-weight: 500;
        color: #105043;
        text-align: justify;
    }
</style>

<div class="card">
    <img src={icon} alt="Icon" class="icon" />
    <h3>{title}</h3>
    <p>{description}</p>
</div>
