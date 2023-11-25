<script>
    import Info from './info.svelte';
    import EventDetails from './eventDetails.svelte';

    export let event;
</script>

<style>
    section.details-container {
        margin-left: 1rem;
        padding-left: 2rem;
        border-left: 1px solid #ffffff50;
    }
</style>

<section>
    <Info type={'header'} icon={event.icon} label={event.name} subText={`(${event.duration})`} />
</section>
<section class="details-container">
    <EventDetails event={event} />
</section>
