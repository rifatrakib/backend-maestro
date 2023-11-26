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
    {#each event.metadata as {icon, text}}
        <Info icon={icon} label={text} alignment={icon.includes('objective.svg') ? 'top' : 'center'} />
    {/each}
    <Info icon={'/icons/responsibilities.svg'} label={'Responsibilities that I have undertaken in this role:'} />
    <Points points={event.points} />
    {#if event.projects && event.projects.length > 0}
        <Info icon={'/icons/project.svg'} label={'Projects that I have led or worked on while in this role:'} />
    {/if}
    {#if event.tools && event.tools.length > 0}
        <Info icon={'/icons/tools.svg'} label={'Tools & technologies that I have used in this project:'} />
        <Points points={event.tools} />
    {/if}
</section>
