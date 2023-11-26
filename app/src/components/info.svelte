<script>
    import Header from "./header.svelte";
    import Text from "./text.svelte";

    export let icon;
    export let label;
    export let type = null;
    export let subText = null;
    export let alignment = 'center';
</script>

<style>
    section {
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }

    section.align-center {
        align-items: center;
    }

    section.align-top {
        align-items: flex-start;
    }

    section img {
        width: 1.5rem;
        height: 1.5rem;
    }

    section img.header {
        width: 2rem;
        height: 2rem;
    }
</style>

<section class="align-{alignment}">
    <img class:header={type === 'header'} src="{icon}" alt="{`${label} icon`}" />
    {#if type === 'header'}
        <Header text={label} subText={subText} isSectionHeader={false} />
    {:else}
        <Text text={label} size={1} align={"left"} color={"primary"} />
    {/if}
</section>
