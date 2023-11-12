<script>
    import Button from './button.svelte';
    import Logo from './logo.svelte';

    export let options;
</script>

<style>
    div {
        width: 100%;
        margin: 0 auto;
        background-color: #242424;
        position: sticky;
        top: 0;
    }

    nav {
        width: 70%;
        margin: inherit;
        text-align: center;
        display: flex;
        justify-content: space-between;
    }

    nav div.nav-buttons {
        width: 30%;
        margin: inherit;
        display: flex;
        justify-content: space-evenly;
        gap: 2.5rem;
    }
</style>

<div>
    <nav>
        <Logo on:changePage />
        <div class="nav-buttons">
            {#each options as option}
                <Button label='{option}' on:changePage />
            {/each}
        </div>
        <Button label='Extra' />
    </nav>
</div>
