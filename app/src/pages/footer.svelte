<script>
    import { onDestroy } from 'svelte';
    import Social from '../components/social.svelte';
    import { navStore } from './store.js';

    let year = new Date().getFullYear();
    let pages;
    const unsubscribe = navStore.subscribe(value => pages = value);

    onDestroy(() => unsubscribe());
</script>

<style>
    footer {
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 1.5rem 0 3rem;
        background-color: #202020;
        top: 0;
        position: sticky;
        z-index: 10;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
    }

    section.footer-container {
        width: 75%;
        text-align: center;
        display: flex;
        justify-content: space-between;
    }

    section.footer-links {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    p {
        font-size: 1.25rem;
        font-weight: 400;
        line-height: 1.2rem;
        color: #ffffff90;
    }
</style>

<footer>
    <section class="footer-container">
        <section class="footer-links">
            {#each pages as page}
                <Social data={page} />
            {/each}
        </section>
        <section class="footer-license">
            <p>© {year} - All rights reserved to Md Abdur Rakib</p>
        </section>
    </section>
</footer>
