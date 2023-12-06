<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let label;
    export let icon = null;
    export let link = null;
    export let isActive = false;
    export let isLogo = false;
    export let isCV = false;

    let buttonLabel = `${label.charAt(0).toUpperCase()}${label.slice(1)}`;

    const changePage = () => dispatch('changePage', label);
    const downloadCV = () => dispatch('download');
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
        gap: 0.5rem;
        justify-content: center;
        align-items: center;
        margin: 1rem 1rem 1rem 2.5rem;
        padding: 0.5rem 1rem;
        border: 1px solid #ffffff90;
        transition: background-color 0.5s ease-in-out;
    }

    button.has-icon:hover {
        background-color: #ffffff10;
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

    button.cv {
        align-self: center;
        margin: 0;
    }

    img {
        width: 1.2rem;
        height: 1.2rem;
    }

    @media screen and (max-width: 768px) {
        button:not(.logo):not(.has-icon) {
            margin: 0.5em;
        }

        button.has-icon {
            margin: 0.5rem;
        }
    }
</style>

{#if isLogo}
    <button class="logo" on:click={changePage}>
        <span>Backend</span>
        <span class="separator">|</span>
        <span>Maestro</span>
    </button>
{:else if icon && !isCV}
    <a href="{link}" target="_blank" rel="noreferrer">
        <button class="has-icon">
            {buttonLabel}
            <img src="{icon}" alt="link" />
        </button>
    </a>
{:else if isCV}
    <button class="has-icon cv" on:click={downloadCV}>
        {buttonLabel}
        <img src="{icon}" alt="link" />
    </button>
{:else}
    <button disabled={isActive} class:active={isActive} on:click={changePage}>{buttonLabel}</button>
{/if}
