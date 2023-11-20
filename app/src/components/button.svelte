<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let label;
    export let isActive = false;

    let buttonLabel = `${label.charAt(0).toUpperCase()}${label.slice(1)}`
</script>

<style>
    button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        margin: 1em;
        font-size: 1.2rem;
        font-weight: 700;
        font-family: inherit;
        background-color: transparent;
        cursor: pointer;
        transition: border-color 0.75s;
        user-select: none;
    }

    button:not(:disabled):hover {
        border-color: #1abc9c;
    }

    button.active {
        color: #1abc9c;
    }
</style>

<button
    disabled={isActive}
    class:active={isActive}
    on:click={() => dispatch('changePage', label)}
>{buttonLabel}</button>
