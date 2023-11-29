<script>
    export let points;
    export let isCV = false;
</script>

<style>
    ul {
        margin: 0;
        padding: 0;
    }

    ul:not(.cv) {
        margin-left: 3.5rem;
    }

    ul.cv {
        margin-top: 0.5rem;
    }

    ul.cv li {
        margin-left: 5rem;
    }

    li {
        font-size: 1rem;
        font-weight: 400;
        margin-bottom: 0.5rem;
        text-align: justify;
    }
</style>

<ul class:cv={isCV}>
    {#each points as point}
        <li>{point}</li>
    {/each}
</ul>
