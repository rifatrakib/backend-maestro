<script>
    import { createEventDispatcher } from 'svelte';

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
        background-color: transparent;
        cursor: pointer;
        transition: border-color 0.25s;
        user-select: none;
    }

    button:not(:disabled):hover {
        border-color: #1abc9c;
    }

    button.active {
        color: #1abc9c;
        font-weight: 900;
    }
</style>

<button
    disabled={isActive}
    class:active={isActive}
    on:click={() => dispatch('changePage', label)}
>{label}</button>
