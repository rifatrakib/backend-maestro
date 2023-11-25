<script>
    export let points;
</script>

<style>
    ul {
        margin: 0;
        padding: 0;
        margin-left: 3.5rem;
    }

    li {
        font-size: 1rem;
        font-weight: 400;
        margin-bottom: 0.5rem;
        text-align: justify;
    }
</style>

<ul>
    {#each points as point}
        <li>{point}</li>
    {/each}
</ul>
