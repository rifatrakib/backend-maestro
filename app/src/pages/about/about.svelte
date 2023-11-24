<script>
    import { onDestroy } from 'svelte';
    import Timeline from './timeline.svelte';
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
</style>

<section class="container infocard">
    {#if events[page] && events[page].length > 0}
        <Infocard header={infocard[page].header} text={infocard[page].text} />
        <Timeline events={events[page]} />
    {:else}
        <Text text={'No data available for this section.'} size={1.2} align={'center'} />
    {/if}
</section>
