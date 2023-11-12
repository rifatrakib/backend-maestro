<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
</script>

<style>
    button {
        border: 1px solid transparent;
        padding: 0 1.2em;
        letter-spacing: 0.1em;
        margin: 1em;
        font-size: 1.3em;
        font-weight: 700;
        font-family: inherit;
        background-color: transparent;
        cursor: pointer;
        user-select: none;
    }

    button span:first-child {
        color: #1abc9c;
    }
</style>

<button on:click={() => dispatch('changePage', 'Home')}>
    <span>Abdur</span>
    <span>Rakib</span>
</button>
