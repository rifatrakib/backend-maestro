<script>
    import Home from './home/home.svelte';
    import About from './about/about.svelte';
    import Contact from './contact/contact.svelte';

    export let page;
</script>

<style>
    div {
        max-width: 75%;
        margin: 0 auto;
        text-align: center;
    }
</style>

<div>
    {#if page === 'Home'}
        <Home />
    {:else if page === 'Work'}
        <About />
    {:else if page === 'Contact'}
        <Contact />
    {/if}
</div>
