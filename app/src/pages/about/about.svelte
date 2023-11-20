<script>
    import { onDestroy } from 'svelte';
    import Timeline from './timeline.svelte';
    import { eventsStore } from './store.js';

    export let page;

    let events;
    const unsubscribe = eventsStore.subscribe(value => events = value);

    onDestroy(() => unsubscribe());
</script>

<style>
    article {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 1rem;
        padding-bottom: 5rem;
    }

    article div {
        text-align: center;
        font-size: 1.25rem;
    }
</style>

<article>
    {#if events[page]}
        <Timeline events={events[page]} />
    {:else}
        <div>No data available for this section.</div>
    {/if}
</article>
