<script>
    export let header;
    export let text;
    export let isPageSubtitle = false;
</script>

<style>
    header {
        font-family: monospace;
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 2rem;
    }

    section.infocard-text {
        margin: 0;
        border-radius: 20px;
    }

    section.subtitle {
        width: 80%;
        letter-spacing: 0.1rem;
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 2.25rem;
        text-align: center;
    }

    section:not(.subtitle) {
        padding: 3rem;
        font-weight: 300;
        font-size: 1.2rem;
        line-height: 2rem;
        text-align: justify;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
    }

    section:not(.subtitle):hover {
        background-color: #1c1c1c;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
    }
</style>

<header>{header}</header>
<section class="infocard-text" class:subtitle={isPageSubtitle}>
    <p>{text}</p>
</section>
