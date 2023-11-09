<script>
    import Navbar from './components/navbar.svelte';
    import Home from './pages/home/home.svelte';
    import About from './pages/about/about.svelte';
    import Contact from './pages/contact/contact.svelte';

    let page = 'Home';
    const options = ['Home', 'About', 'Contact'];
</script>

<main>
    <Navbar options={options} on:changePage={(event) => page = event.detail} />
    {#if page === 'Home'}
        <Home />
    {:else if page === 'About'}
        <About />
    {:else if page === 'Contact'}
        <Contact />
    {/if}
</main>
