<script>
    export let eventData;
</script>

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: baseline;
        justify-content: center;
        text-align: left;
        gap: 1rem;
        padding-left: 3rem;
    }

    header {
        font-size: 1.5rem;
        font-weight: 600;
        line-height: 1.2rem;
    }

    p {
        font-size: 1rem;
        font-weight: 400;
        margin-bottom: 0.5rem;
        padding-left: 2rem;
    }

    p span {
        font-weight: 700;
    }

    ul {
        margin: 0;
        padding: 0;
    }

    li {
        margin-left: 6rem;
        font-size: 1rem;
        font-weight: 400;
        margin-bottom: 0.5rem;
    }
</style>

<section>
    <header>{eventData.header}</header>
    <div>
        {#each Object.entries(eventData.subheaders) as [key, value]}
            <p><span>{`${key.charAt(0).toUpperCase()}${key.slice(1)}`}: </span>{value}</p>
        {/each}
    </div>
    <ul>
        {#each eventData.points as point}
            <li>{point}</li>
        {/each}
    </ul>
</section>
