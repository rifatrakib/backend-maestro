<script>
    import { onDestroy } from 'svelte';
    import { fade, fly } from 'svelte/transition';
    import Timeline from '../../components/timeline.svelte';
    import Header from '../../components/header.svelte';
    import Infocard from '../../components/infocard.svelte';
    import Points from '../../components/points.svelte';
    import Text from '../../components/text.svelte';
    import Namecard from '../../components/namecard.svelte';
    import { cvStore, workStore, educationStore, projectsStore, skillsStore, volunteerStore, awardsStore } from './store.js';
    import { infocardStore } from '../home/store';

    export let transitionParams;

    let headings;
    const cvUnsub = cvStore.subscribe(value => headings = value);

    let summary;
    const infoUnsub = infocardStore.subscribe(value => summary = value);

    let skills;
    const skillsUnsub = skillsStore.subscribe(value => skills = value);

    let work;
    const workUnsub = workStore.subscribe(value => work = value.events);

    let education;
    const eduUnsub = educationStore.subscribe(value => education = value.events);

    let projects;
    const projectsUnsub = projectsStore.subscribe(value => projects = value.events);

    let volunteer;
    const volunteerUnsub = volunteerStore.subscribe(value => volunteer = value.events);

    let awards;
    const awardsUnsub = awardsStore.subscribe(value => awards = value.events);

    onDestroy(() => {
        cvUnsub();
        infoUnsub();
        skillsUnsub();
        workUnsub();
        eduUnsub();
        projectsUnsub();
        volunteerUnsub();
        awardsUnsub();
    });

    const downloadCV = () => print();
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
        justify-content: flex-start;
        align-items: baseline;
        margin-left: 2rem;
    }
</style>

<section class="container infocard" in:fly={transitionParams.in} out:fade={transitionParams.out}>
    <Infocard header={headings.header} text={headings.text} isCV={true} on:download={downloadCV} />
    <section class="timeline">
        <section class="experience">
            <Namecard />
        </section>
        <section class="experience">
            <section class="section-heading">
                <Header text={'Summary'} isSectionHeader={false} cvSection={true} />
                <Text text={summary.text} size={1} align={'justify'} placement={'infobox cv'} />
            </section>
        </section>
        <section class="experience">
            <section class="section-heading">
                <Header text={'Skills'} isSectionHeader={false} cvSection={true} />
            </section>
            <Points points={skills} isCV={true} />
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
        <section class="experience">
            <section class="section-heading">
                <Header text={'Volunteer Activities'} isSectionHeader={false} cvSection={true} />
            </section>
            <Timeline events={volunteer} />
        </section>
        <section class="experience">
            <section class="section-heading">
                <Header text={'Awards & Certifications'} isSectionHeader={false} cvSection={true} />
            </section>
            <Timeline events={awards} />
        </section>
    </section>
</section>
