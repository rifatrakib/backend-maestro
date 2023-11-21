<script>
    import Home from './home/home.svelte';
    import About from './about/about.svelte';

    export let currentPage;
    export let pages;

    $:if (currentPage) {window.scrollTo(0, 0)};
</script>

<style>
    div {
        width: 75%;
        margin: 0 auto;
        text-align: center;
    }
</style>

<div>
    {#if currentPage === 'home'}
        <Home />
    {:else if pages.includes(currentPage)}
        <About page={currentPage} />
    {/if}
</div>
