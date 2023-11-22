<script>
    import Event from '../../components/event.svelte';

    export let events;
</script>

<style>
    section.experience-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 2rem;
        margin: 0;
        margin-top: 2rem;
        border-radius: 1rem;
        background-color: #1c1c1c;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
        box-sizing: border-box;
    }

    section.experience {
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }

    div {
        width: 100%;
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
