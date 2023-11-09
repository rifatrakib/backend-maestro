<script>
    import Button from './button.svelte';

    export let options;
</script>

<style>
    nav {
        background-color: #1a1a1a;
        width: 100%;
        margin: 0 auto;
        text-align: center;
    }

    nav div {
        width: 30%;
        margin: 0 auto;
        display: flex;
        justify-content: space-evenly;
    }
</style>

<nav>
    <div>
        {#each options as option}
            <Button label='{option}' on:changePage />
        {/each}
    </div>
</nav>
