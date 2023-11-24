<script>
    import { createEventDispatcher, onDestroy } from 'svelte';
    import Button from '../components/button.svelte';
    import Social from '../components/social.svelte';
    import { navStore } from './store.js';

    export let options;
    export let activePage;

    let socials;
    const unsubscribe = navStore.subscribe(value => socials = value);

    onDestroy(() => unsubscribe());

    const dispatch = createEventDispatcher();

    function changePage(event) {
        activePage = event.detail;
        dispatch('changePage', activePage);
    }
</script>

<style>
    div {
        display: flex;
        justify-content: center;
        width: 100%;
        margin: 0 auto;
        background-color: #202020;
        top: 0;
        position: sticky;
        z-index: 10;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
    }

    nav {
        width: 75%;
        margin: inherit;
        text-align: center;
        display: flex;
        justify-content: space-evenly;
    }

    nav section.nav-buttons {
        margin: inherit;
        display: flex;
        justify-content: space-evenly;
    }

    nav section.social-buttons {
        gap: 0.5rem;
        display: flex;
        justify-content: space-evenly;
        margin-left: auto;
    }
</style>

<div>
    <nav>
        <Button label='home' isLogo={true} on:changePage />
        <section class="nav-buttons">
            {#each options as option}
                <Button
                    label='{option}'
                    isActive={option === activePage}
                    on:changePage={changePage} />
            {/each}
        </section>
        <section class="social-buttons">
            {#each socials as social}
                <Social data={social} />
            {/each}
        </section>
    </nav>
</div>
