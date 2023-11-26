<script>
    import Button from './button.svelte';
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

    section.project-container {
        display: flex;
        flex-direction: column;
        margin: 0.5rem 0 0.5rem 2rem;
        border-radius: 1rem;
    }

    section.project {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-left: -1rem;
        padding: 0.5rem 1rem;
        border-radius: 1rem;
    }

    section.project:hover {
        background-color: #1c1c1c;
    }
</style>

<section>
    <Info
        type={'header'}
        icon={event.icon}
        label={event.name}
        subText={event.duration ? `(${event.duration})` : null} />
</section>
<section class="details-container">
    <EventDetails event={event} />
    {#if event.projects && event.projects.length > 0}
        <section class="project-container">
            {#each event.projects as project}
                <section class="project">
                    <svelte:self event={project} />
                </section>
            {/each}
        </section>
    {/if}
    {#if event.link}    
        <Button label={'View'} icon={'/icons/link.svg'} link={event.link} />
    {/if}
</section>
