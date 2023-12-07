<script>
    import { onDestroy } from 'svelte';
    import Card from '../../components/card.svelte';
    import Header from '../../components/header.svelte';
    import { showcaseStore } from './store.js';

    let data;
    const unsubscribe = showcaseStore.subscribe(value => data = value);

    onDestroy(() => unsubscribe());
</script>

<style>
    section {
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(3, 1fr);
        justify-content: space-evenly;
    }

    @media screen and (max-width: 768px) {
        section {
            margin: 0 1rem;
            grid-template-columns: 1fr;
            gap: 1rem;
        }
    }
</style>

<Header text={'Areas of experience'} isSectionHeader={true} />
<section>
    {#each data as { icon, title, description }}
        <Card icon={icon} title={title} description={description} />
    {/each}
</section>
