<script>
    import { Svrollbar } from 'svrollbar';
    import Navbar from './pages/navbar.svelte';
    import Body from './pages/body.svelte';
    import Footer from './pages/footer.svelte';

    let currentPage = 'home';
    let direction = 1;
    const pages = ['home', 'work', 'education', 'projects'];

    const changePage = (event) => {
        direction = pages.findIndex(page => page === event.detail) > pages.findIndex(page => page === currentPage) ? 1 : -1;
        currentPage = event.detail;
    };
</script>

<style>
    main {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }

    section.scroll-bar {
        z-index: 20;
    }
</style>

<main>
    <Navbar
        options={pages}
        activePage={currentPage}
        on:changePage={changePage} />
    <section class="scroll-bar">
        <Svrollbar />
    </section>
    <Body currentPage={currentPage} direction={direction} />
    <Footer />
</main>
