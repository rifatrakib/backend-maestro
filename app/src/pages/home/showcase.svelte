<script>
    import { onDestroy } from 'svelte';
    import Card from '../../components/card.svelte';
    import { showcaseStore } from './store.js';

    let data;
    const unsubscribe = showcaseStore.subscribe(value => data = value);

    onDestroy(() => unsubscribe());
</script>

<style>
    section.showcase {
        margin: 3rem auto 6rem;
    }

    header {
        font-family: monospace;
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 2rem;
    }

    section.card-container {
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(3, 1fr);
        justify-content: space-evenly;
        margin: 50px auto;
    }
</style>

<section class="showcase">
    <header>Areas of experience</header>
    <section class="card-container">
        {#each data as { icon, title, description }}
            <Card icon={icon} title={title} description={description} />
        {/each}
    </section>
</section>
