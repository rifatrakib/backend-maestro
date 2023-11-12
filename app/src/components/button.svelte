<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    export let label;
    export let isActive = false;
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
        background-color: #242424;
        cursor: pointer;
        transition: border-color 0.25s;
    }

    button:not(:disabled):hover {
        border-color: #1abc9c;
    }

    button.active {
        color: #1abc9c;
        font-weight: 900;
    }
</style>

{#if isActive === true}
    <button disabled class="active" on:click={() => dispatch('changePage', label)}>{label}</button>
{:else}
    <button on:click={() => dispatch('changePage', label)}>{label}</button>
{/if}
