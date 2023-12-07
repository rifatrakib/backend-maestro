<script>
    import { onDestroy } from 'svelte';
    import Header from '../../components/header.svelte';
    import Icon from '../../components/icon.svelte';
    import { toolsStore } from './store.js';

    let tools;
    const unsubscribe = toolsStore.subscribe(value => tools = value);

    onDestroy(() => unsubscribe());
</script>

<style>
    section.logos {
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(8, 1fr);
        justify-content: space-evenly;
    }

    @media screen and (max-width: 768px) {
        section.logos {
            margin: 0 1rem;
            gap: 1rem;
            grid-template-columns: repeat(4, 1fr);
        }
    }
</style>

<Header text={'Toolbox'} isSectionHeader={true} />
<section class="logos">
    {#each tools as tool}
        <Icon icon={tool} />
    {/each}
</section>
