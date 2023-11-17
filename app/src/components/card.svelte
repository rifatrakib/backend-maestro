<script>
    export let icon;
    export let title;
    export let description;

    let isHovered = false;
    let iconUrl = icon;

    function handleHover() {
        isHovered = !isHovered;
        iconUrl = isHovered ? `${icon.split(".svg")[0]}-hover.svg` : icon;
        console.log(iconUrl);
    }
</script>

<style>
    div.card {
        color: #105043;
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
        color: #ffffff90;
        transform: scale(1.075);
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
    }
</style>

<div class="card" role="button" aria-label="Card" tabindex="0" on:focus={() => {}} on:mouseenter={handleHover} on:mouseleave={handleHover}>
    <img src={iconUrl} alt="{`${icon} icon`}" class="icon" />
    <h3>{title}</h3>
    <p>{description}</p>
</div>
