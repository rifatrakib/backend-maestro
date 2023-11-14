<script>
    import Navbar from './pages/navbar.svelte';
    import Body from './pages/body.svelte';

    let page = 'Home';
    const options = ['Home', 'About', 'Contact'];
</script>

<main>
    <Navbar
        options={options}
        activePage={page}
        on:changePage={(event) => page = event.detail} />
    <Body page={page} />
</main>
