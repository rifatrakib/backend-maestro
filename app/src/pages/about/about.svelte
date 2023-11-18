<script>
    import { onDestroy } from 'svelte';
    import Timeline from '../../components/timeline.svelte';
    import { eventsStore } from './store.js';

    let eventData;
    const unsubscribe = eventsStore.subscribe(value => eventData = value);

    onDestroy(() => unsubscribe());
</script>

<style>
    article {
        padding-top: 1rem;
    }
</style>

<article>
    <Timeline eventsData={eventData} />
</article>
