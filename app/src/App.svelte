<script>
    import Navbar from './pages/navbar.svelte';
    import Body from './pages/body.svelte';
    import Footer from './pages/footer.svelte';

    let page = 'Home';
    const options = ['Home', 'Work', 'Contact'];
</script>

<main>
    <Navbar
        options={options}
        activePage={page}
        on:changePage={(event) => page = event.detail} />
    <Body page={page} />
    <Footer />
</main>
