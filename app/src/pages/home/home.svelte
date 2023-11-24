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
</style>

<article>
    <Hero />
    <section class="container infocard">
        <Infocard header={data.header} text={data.text}  />
    </section>
    <section class="container showcase">
        <Showcase />
    </section>
    <section class="container toolbox">
        <Toolbox />
    </section>
</article>
