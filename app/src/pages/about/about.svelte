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
    article {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 1rem;
        padding-bottom: 5rem;
    }

    section.infocard-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        margin: 2rem auto;
    }

    article div {
        text-align: center;
        font-size: 1.25rem;
    }
</style>

<article>
    {#if events[page] && events[page].length > 0}
        <section class="infocard-container">
            <Infocard header={infocard[page].header} text={infocard[page].text} />
        </section>
        <Timeline events={events[page]} />
    {:else}
        <div>No data available for this section.</div>
    {/if}
</article>
