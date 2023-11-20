<script>
    import Event from '../../components/event.svelte';

    export let events;
</script>

<style>
    section.experience-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 0;
        margin: 0;
        margin-top: 5rem;
        border-radius: 1rem;
        background-color: #1c1c1c;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
    }

    section.experience {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        margin-top: 1rem;
        margin: 4rem 2rem;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
</style>

<section class="experience-container">
    <section class="experience">
        <div>
            {#each events as event}
                <Event eventData={event} />
            {/each}
        </div>
    </section>
</section>
