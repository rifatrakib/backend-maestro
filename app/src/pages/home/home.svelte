<script>
    import { onDestroy } from 'svelte';
    import Hero from './hero.svelte';
    import Skills from './toolbox.svelte';
    import Showcase from './showcase.svelte';
    import Infocard from '../../components/infocard.svelte';
    import { infocardStore } from './store.js';

    let data;
    const unsubscribe = infocardStore.subscribe(value => data = value);

    onDestroy(() => unsubscribe());
</script>

<style>
    section.infocard-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        margin: 3rem auto 6rem;
    }
</style>

<article>
    <Hero />
    <section class="infocard-container">
        <Infocard header={data.header} text={data.text}  />
    </section>
    <Showcase />
    <Skills />
</article>
