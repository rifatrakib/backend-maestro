<script>
    import Event from './event.svelte';

    export let eventsData;
</script>

<style>
    section {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        margin-top: 1rem;
    }

    header {
        flex: 0 0 20%;
        font-size: 1.5rem;
        font-weight: 600;
        text-align: left;
        line-height: 2rem;
        margin: 0;
        padding: 0;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
</style>

<section>
    {#each Object.entries(eventsData) as [type, events]}
        <header>{`${type.charAt(0).toUpperCase()}${type.slice(1)} Experiences`}</header>
        <div>
            {#each events as event}
                <Event eventData={event} />
            {/each}
        </div>
    {/each}
</section>
