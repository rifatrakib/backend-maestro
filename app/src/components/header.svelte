<script>
    export let text;
    export let subText = null;
    export let isSectionHeader;
    export let cvSection = null;
    export let isNamecard = false;
</script>

<style>
    header {
        font-family: monospace;
    }

    header.section-header {
        font-size: 2.5rem;
        font-weight: 700;
    }

    header:not(.section-header) {
        font-size: 1.5rem;
        font-weight: 700;
    }

    header span {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.2rem;
        color: #ffffff90;
        padding-left: 0.2rem;
    }

    header.cv-section {
        font-size: 2rem;
        font-weight: 700;
    }

    header.namecard {
        font-size: 5rem;
        font-weight: 700;
        line-height: 3.75rem;
    }

    @media screen and (max-width: 768px) {
        header.section-header {
            font-size: 2rem;
            margin: 0 1rem;
        }
    }
</style>

<header class:section-header={isSectionHeader} class:cv-section={cvSection} class:namecard={isNamecard}>
    {text}
    {#if subText}
        <span>{subText}</span>
    {/if}
</header>
