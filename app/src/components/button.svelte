<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let label;
    export let isActive = false;
    export let hasIcon = false;
    export let link = null;

    let buttonLabel = `${label.charAt(0).toUpperCase()}${label.slice(1)}`
</script>

<style>
    button {
        border-radius: 8px;
        border: 1px solid transparent;
        font-size: 1.2rem;
        font-weight: 700;
        font-family: inherit;
        background-color: transparent;
        cursor: pointer;
        transition: border-color 0.75s;
        user-select: none;
    }

    button.has-icon {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        padding: 0.5rem 1rem;
        border: 1px solid #105043;
        justify-content: space-between;
    }

    button.has-icon:hover {
        background-color: #105043;
    }

    button:not(.has-icon) {
        padding: 0.6em 1.2em;
        margin: 1em;
    }

    button:not(:disabled):not(.has-icon):hover {
        border-color: #1abc9c;
    }

    button.active {
        color: #1abc9c;
    }

    img {
        width: 1.5rem;
        height: 1.5rem;
    }
</style>

{#if hasIcon}
    <a href="{link}" target="_blank" rel="noreferrer">
        <button class="has-icon">
            {buttonLabel}
            <img src="/icons/link.svg" alt="link" />
        </button>
    </a>
{:else}
    <button
        disabled={isActive}
        class:active={isActive}
        on:click={() => dispatch('changePage', label)}
    >{buttonLabel}</button>
{/if}
