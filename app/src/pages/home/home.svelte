<script>
    import { onDestroy } from 'svelte';
    import Hero from './hero.svelte';
    import Showcase from './showcase.svelte';
    import Toolbox from './toolbox.svelte';
    import Infocard from '../../components/infocard.svelte';
    import { infocardStore } from './store.js';

    let data;
    const unsubscribe = infocardStore.subscribe(value => data = value);

    onDestroy(() => unsubscribe());
</script>

<style>
    section.container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items:stretch;
        gap: 2rem;
        margin: 5rem auto;
    }

    section.hero {
        align-items: center;
        margin-top: 2rem;
        background-color: #1c1c1c;
        border-radius: 1rem;
        padding: 2rem 3rem;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
    }
</style>

<article>
    <section class="container hero">
        <Hero />
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
</article>
