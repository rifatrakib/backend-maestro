<script>
    import { Svrollbar } from 'svrollbar';
    import Navbar from './pages/navbar.svelte';
    import Body from './pages/body.svelte';
    import Footer from './pages/footer.svelte';

    let currentPage = 'home';
    const pages = ['home', 'work', 'education', 'projects'];
</script>

<style>
    main {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
</style>

<main>
    <Navbar
        options={pages}
        activePage={currentPage}
        on:changePage={(event) => currentPage = event.detail} />
    <Svrollbar />
    <Body currentPage={currentPage} pages={pages} />
    <Footer />
</main>
