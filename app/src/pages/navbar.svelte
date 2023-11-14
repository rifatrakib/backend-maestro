<script>
    import { createEventDispatcher } from 'svelte';
    import Button from '../components/button.svelte';
    import Logo from '../components/logo.svelte';

    export let options;
    export let activePage;

    const dispatch = createEventDispatcher();

    function changePage(event) {
        activePage = event.detail;
        dispatch('changePage', activePage);
    }
</script>

<style>
    div {
        width: 100%;
        margin: 0 auto;
        background-color: #202020;
        top: 0;
        position: sticky;
        z-index: 10;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
    }

    nav {
        width: 70%;
        margin: inherit;
        text-align: center;
        display: flex;
        justify-content: space-between;
    }

    nav section.nav-buttons {
        width: 20%;
        margin: inherit;
        display: flex;
        justify-content: space-evenly;
    }
</style>

<div>
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
</div>
