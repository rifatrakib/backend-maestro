<script>
    import Header from "./header.svelte";
    import Text from "./text.svelte";

    export let icon;
    export let label;
    export let type = null;
    export let subText = null;
</script>

<style>
    section {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
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

<section>
    <img class:header={type === 'header'} src="{icon}" alt="{`${label} icon`}" />
    {#if type === 'header'}
        <Header text={label} subText={subText} isSectionHeader={false} />
    {:else}
        <Text text={label} size={1} align={"left"} color={"primary"} />
    {/if}
</section>
