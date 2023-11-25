<script>
    import Event from './event.svelte';

    export let events;
</script>

<style>
    section.event {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem 2rem;
        border-radius: 1rem;
    }

    section.event:hover {
        background-color: #ffffff10;
    }
</style>

{#each events as event}
    <section class="event">
        <Event event={event} />
    </section>
{/each}
