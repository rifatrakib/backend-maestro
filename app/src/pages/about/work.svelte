<script>
    import { onDestroy } from 'svelte';
    import { fade, fly } from 'svelte/transition';
    import Timeline from '../../components/timeline.svelte';
    import Infocard from '../../components/infocard.svelte';
    import Text from '../../components/text.svelte';
    import { workStore } from './store.js';

    export let transitionParams;

    let events;
    let info;
    const unsubscribe = workStore.subscribe(value => {
        events = value.events;
        info = value.info;
    });

    onDestroy(() => unsubscribe());
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

<section class="container infocard" in:fly={transitionParams.in} out:fade={transitionParams.out}>
    {#if events.length > 0}
        <Infocard header={info.header} text={info.text} />
        <section class="timeline">
            <Timeline events={events} />
        </section>
    {:else}
        <Text text={'No data available for this section.'} size={1.2} align={'center'} />
    {/if}
</section>
