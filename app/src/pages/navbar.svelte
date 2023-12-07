<script>
    import { createEventDispatcher, onDestroy } from 'svelte';
    import { slide } from 'svelte/transition';
    import Button from '../components/button.svelte';
    import Social from '../components/social.svelte';
    import { navStore } from './store.js';

    export let options;
    export let activePage;

    let isMenuExpanded = false;

    let deviceWidth = window.innerWidth;
    $:isSmallScreen = deviceWidth <= 768;

    let socials;
    const unsubscribe = navStore.subscribe(value => socials = value);

    onDestroy(() => unsubscribe());

    const dispatch = createEventDispatcher();

    function changePage(event) {
        activePage = event.detail;
        isMenuExpanded = false;
        dispatch('changePage', activePage);
    }

    function menuClicked() {
        isMenuExpanded = !isMenuExpanded;
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

    @media screen and (max-width: 768px) {
        nav {
            width: 100%;
            padding: 1.5rem 0.5rem;
            justify-content: space-between;
        }

        section.nav-buttons {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin: 0;
            gap: 0rem;
            background-color: #202020;
            z-index: 5;
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
        }
    }
</style>

<div>
    <nav>
        <Button label='home' isLogo={true} on:changePage />
        {#if !isSmallScreen}
            <section class="nav-buttons">
                {#each options as option}
                    <Button
                        label='{option}'
                        isActive={option === activePage}
                        on:changePage={changePage} />
                {/each}
            </section>
            <Social socials={socials} />
        {:else}
            <section class:expanded={isMenuExpanded}>
                <Button
                    label=''
                    icon={isMenuExpanded ? '/icons/menu-close.svg' : '/icons/menu.svg'}
                    isMenu={true}
                    on:menuClicked={menuClicked} />
            </section>
        {/if}
    </nav>
</div>
{#if isMenuExpanded}
    <section class="nav-buttons" in:slide out:slide>
        {#each options as option}
            <Button
                label='{option}'
                isActive={option === activePage}
                on:changePage={changePage} />
        {/each}
    </section>
{/if}
