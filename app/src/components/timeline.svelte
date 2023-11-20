<script>
    import Event from './event.svelte';

    export let eventsData;
</script>

<style>
    section.experience-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 0;
        margin: 0;
        margin-top: 5rem;
        border-radius: 10px;
        background-color: #1c1c1c;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
    }

    section.experience {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        margin-top: 1rem;
        margin: 5rem;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
</style>

<section class="experience-container">
    {#each Object.entries(eventsData) as [type, events]}
        <section class="experience">
            <div>
                {#each events as event}
                    <Event eventData={event} />
                {/each}
            </div>
        </section>
    {/each}
</section>
