<script>
    export let text;
    export let subText = null;
    export let isSectionHeader;
    export let cvSection = null;
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
</style>

<header class:section-header={isSectionHeader} class:cv-section={cvSection}>
    {text}
    {#if subText}
        <span>{subText}</span>
    {/if}
</header>
