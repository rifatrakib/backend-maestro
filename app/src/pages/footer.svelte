<script>
    import { onDestroy } from 'svelte';
    import Social from '../components/social.svelte';
    import { navStore } from './store.js';

    let year = new Date().getFullYear();
    let socials;
    const unsubscribe = navStore.subscribe(value => socials = value);

    onDestroy(() => unsubscribe());
</script>

<style>
    footer {
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 1rem 0 2rem;
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
        align-items: center;
    }

    p {
        font-size: 1.25rem;
        font-weight: 400;
        line-height: 1.2rem;
        color: #ffffff90;
    }

    @media screen and (max-width: 768px) {
        section.footer-container {
            width: 100%;
            flex-direction: column;
            gap: 1rem;
        }
    }
</style>

<footer>
    <section class="footer-container">
        <Social socials={socials} />
        <section class="footer-license">
            <p>© {year} - All rights reserved to Md Abdur Rakib</p>
        </section>
    </section>
</footer>
