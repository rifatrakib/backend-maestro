<script>
    import { onDestroy } from 'svelte';
    import { fade, fly } from 'svelte/transition';
    import Hero from './hero.svelte';
    import Showcase from './showcase.svelte';
    import Toolbox from './toolbox.svelte';
    import Infocard from '../../components/infocard.svelte';
    import { infocardStore } from './store.js';

    export let transitionParams;
    export let isSmallScreen;

    let data;
    const unsubscribe = infocardStore.subscribe(value => data = value);

    onDestroy(() => unsubscribe());
</script>

<style>
    section.hero {
        align-items: center;
        margin-top: 2rem;
        background-color: #1c1c1c;
        border-radius: 1rem;
        padding: 2rem 3rem;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
    }

    @media screen and (max-width: 768px) {
        section.hero {
            margin-top: 1rem;
            border-radius: 0;
            padding: 1.5rem;
        }
    }
</style>

<section in:fly={transitionParams.in} out:fade={transitionParams.out}>
    <section class="container hero">
        <Hero isSmallScreen={isSmallScreen} />
    </section>
    <section class="container infocard">
        <Infocard header={data.header} text={data.text} isCommonText={true} />
    </section>
    <section class="container showcase">
        <Showcase />
    </section>
    <section class="container toolbox">
        <Toolbox />
    </section>
</section>
