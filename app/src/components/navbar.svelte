<script>
    import { createEventDispatcher } from 'svelte';
    import Button from './button.svelte';
    import Logo from './logo.svelte';

    export let options;

    const dispatch = createEventDispatcher();
    let activePage = 'Home';

    function changePage(event) {
        activePage = event.detail;
        dispatch('changePage', activePage);
    }
</script>

<style>
    nav {
        margin: inherit;
        text-align: center;
        display: flex;
        justify-content: space-between;
        background-color: #11111130;
        z-index: 10;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
    }

    nav section.nav-buttons {
        width: 30%;
        margin: inherit;
        display: flex;
        justify-content: space-evenly;
        gap: 2.5rem;
    }
</style>

<nav>
    <Logo on:changePage />
    <section class="nav-buttons">
        {#each options as option}
            <Button
                label='{option}'
                isActive={option === activePage}
                on:changePage={changePage} />
        {/each}
    </section>
    <Button label='Extra' />
</nav>
