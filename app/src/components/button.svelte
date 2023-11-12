<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    export let label;
    export let properties = {'type': 'menu-button'};
</script>

<style>
    button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        margin: 1em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #1a1a1a;
        cursor: pointer;
        transition: border-color 0.25s;
    }

    button.menu-button:hover {
        border-color: #646cff;
    }
</style>

{#if properties.type === 'logo'}
    <button on:click={() => dispatch('changePage', label)}>{label}</button>
{:else}
    <button class='menu-button' on:click={() => dispatch('changePage', label)}>{label}</button>
{/if}
