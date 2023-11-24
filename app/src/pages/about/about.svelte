<script>
    import { onDestroy } from 'svelte';
    import Timeline from './timeline.svelte';
    import Infocard from '../../components/infocard.svelte';
    import { eventsStore, infocardStore } from './store.js';

    export let page;

    let events;
    let infocard;

    const unsubscribeEvents = eventsStore.subscribe(value => events = value);
    const unsubscribeInfocard = infocardStore.subscribe(value => infocard = value);

    onDestroy(() => {
        unsubscribeEvents();
        unsubscribeInfocard();
    });
</script>

<style>
    section.container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: stretch;
        gap: 2rem;
        margin: 5rem auto;
    }

    section.infocard {
        margin-top: 1rem;
    }

    div {
        text-align: center;
        font-size: 1.25rem;
    }
</style>


{#if events[page] && events[page].length > 0}
    <section class="container infocard">
        <Infocard header={infocard[page].header} text={infocard[page].text} />
    </section>
    <Timeline events={events[page]} />
{:else}
    <div>No data available for this section.</div>
{/if}
