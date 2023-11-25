<script>
    import { onDestroy } from 'svelte';
    import Timeline from '../../components/timeline.svelte';
    import Infocard from '../../components/infocard.svelte';
    import Text from '../../components/text.svelte';
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
    section.infocard {
        margin-top: 1rem;
    }

    section.timeline {
        width: 100%;
        padding: 2rem;
        margin: 0;
        border-radius: 1rem;
        background-color: #1c1c1c;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
        box-sizing: border-box;
    }
</style>

<section class="container infocard">
    {#if events[page] && events[page].length > 0}
        <Infocard header={infocard[page].header} text={infocard[page].text} />
        <section class="timeline">
            <Timeline events={events[page]} />
        </section>
    {:else}
        <Text text={'No data available for this section.'} size={1.2} align={'center'} />
    {/if}
</section>
