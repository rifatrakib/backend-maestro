<script>
    import Info from './info.svelte';
    import Points from './points.svelte';

    export let event;
</script>

<style>
    section {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>

<section>
    {#each event.subheaders as {icon, text}}
        <Info icon={icon} label={text} />
    {/each}
    <Info icon={'./icons/responsibilities.svg'} label={'Responsibilities I have undertaken in this role:'} />
    <Points points={event.points} />
</section>
