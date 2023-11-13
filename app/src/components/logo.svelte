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

    .separator {
        margin: 0;
        font-weight: bold;
        color: #239e86;
    }
</style>

<button on:click={() => dispatch('changePage', 'Home')}>
    <span>Backend</span>
    <span class="separator">|</span>
    <span>Maestro</span>
</button>
