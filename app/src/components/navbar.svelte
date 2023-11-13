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
    div {
        width: 100%;
        margin: 0 auto;
        background-color: rgba(0, 0, 0, 0.15);
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
