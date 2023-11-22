<script>
    import { onDestroy } from 'svelte';
    import Capsule from '../../components/capsule.svelte';
    import { toolsStore } from './store.js';

    let tools;
    const unsubscribe = toolsStore.subscribe(value => tools = value);

    onDestroy(() => unsubscribe());
</script>

<style>
    header {
        font-family: monospace;
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 2rem;
    }

    section.logos {
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(8, 1fr);
        justify-content: space-evenly;
        margin-bottom: 5rem;
    }
</style>

<section>
    <header>Toolbox</header>
    <section class="logos">
        {#each tools as tool}
            <Capsule name={tool} />
        {/each}
    </section>
</section>
