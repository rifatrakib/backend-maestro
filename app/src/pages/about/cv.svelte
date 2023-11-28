<script>
    import { onDestroy } from 'svelte';
    import { fade, fly } from 'svelte/transition';
    import Timeline from '../../components/timeline.svelte';
    import Header from '../../components/header.svelte';
    import Infocard from '../../components/infocard.svelte';
    import Text from '../../components/text.svelte';
    import { workStore, educationStore, projectsStore } from './store.js';
    import { infocardStore } from '../home/store';

    export let transitionParams;

    let summary;
    const infoUnsub = infocardStore.subscribe(value => summary = value);

    let work;
    const workUnsub = workStore.subscribe(value => work = value.events);

    let education;
    const eduUnsub = educationStore.subscribe(value => education = value.events);

    let projects;
    const projectsUnsub = projectsStore.subscribe(value => projects = value.events);

    onDestroy(() => {
        infoUnsub();
        workUnsub();
        eduUnsub();
        projectsUnsub();
    });
</script>

<style>
    section.infocard {
        margin-top: 1rem;
    }

    section.timeline {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;
        padding: 2rem;
        margin: 0;
        border-radius: 1rem;
        background-color: #1c1c1c;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
        box-sizing: border-box;
    }

    section.experience {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    section.section-heading {
        display: flex;
        flex-direction: column;
        justify-content: baseline;
        align-items: baseline;
        margin-left: 2rem;
    }
</style>

<section class="container infocard" in:fly={transitionParams.in} out:fade={transitionParams.out}>
    <Infocard header={'Preview my CV'} text={'Some sample text'} />
    <section class="timeline">
        <section class="experience">
            <section class="section-heading">
                <Header text={'Summary'} isSectionHeader={false} cvSection={true} />
                <Text text={summary.text} size={1} align={'justify'} placement={'infobox cv'} />
            </section>
        </section>
        <section class="experience">
            <section class="section-heading">
                <Header text={'Work Experience'} isSectionHeader={false} cvSection={true} />
            </section>
            <Timeline events={work} />
        </section>
        <section class="experience">
            <section class="section-heading">
                <Header text={'Education'} isSectionHeader={false} cvSection={true} />
            </section>
            <Timeline events={education} />
        </section>
        <section class="experience">
            <section class="section-heading">
                <Header text={'Personal Projects'} isSectionHeader={false} cvSection={true} />
            </section>
            <Timeline events={projects} />
        </section>
    </section>
</section>
