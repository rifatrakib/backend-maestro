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
        transition: background-color 0.25s ease-in-out;
    }

    section.event:hover {
        background-color: #ffffff10;
    }

    @media screen and (max-width: 768px) {
        section.event {
            padding: 1rem;
        }

        section.event:hover {
            background-color: unset;
        }
    }
</style>

{#each events as event}
    <section class="event">
        <Event event={event} />
    </section>
{/each}
