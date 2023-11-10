<script>
    import Home from './home/home.svelte';
    import About from './about/about.svelte';
    import Contact from './contact/contact.svelte';

    export let page;
</script>

{#if page === 'Home'}
    <Home />
{:else if page === 'About'}
    <About />
{:else if page === 'Contact'}
    <Contact />
{/if}
