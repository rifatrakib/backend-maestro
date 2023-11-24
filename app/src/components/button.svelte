<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let label;
    export let icon = null;
    export let link = null;
    export let isActive = false;
    export let isLogo = false;

    let buttonLabel = `${label.charAt(0).toUpperCase()}${label.slice(1)}`;

    const changePage = () => dispatch('changePage', label);
</script>

<style>
    button {
        border: 1px solid transparent;
        font-size: 1.2rem;
        font-weight: 700;
        font-family: inherit;
        background-color: transparent;
        cursor: pointer;
        user-select: none;
    }

    button:not(.logo) {
        border-radius: 8px;
        transition: border-color 0.75s;
    }

    button.logo {
        padding: 0 1.2em 0 0;
        letter-spacing: 0.1em;
        font-size: 1.3em;
    }

    button.logo span:first-child {
        color: #1abc9c;
    }

    button.logo span.separator {
        margin: 0;
        font-weight: bold;
        color: #1abc9c;
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

    button:not(.has-icon):not(.logo) {
        padding: 0.6em 1.2em;
        margin: 1em;
    }

    button:not(:disabled):not(.logo):not(.has-icon):hover {
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

{#if isLogo}
    <button class="logo" on:click={changePage}>
        <span>Backend</span>
        <span class="separator">|</span>
        <span>Maestro</span>
    </button>
{:else if icon}
    <a href="{link}" target="_blank" rel="noreferrer">
        <button class="has-icon">
            {buttonLabel}
            <img src="{icon}" alt="link" />
        </button>
    </a>
{:else}
    <button disabled={isActive} class:active={isActive} on:click={changePage}>{buttonLabel}</button>
{/if}
