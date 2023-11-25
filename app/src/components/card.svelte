<script>
    import Header from "./header.svelte";
    import Text from "./text.svelte";

    export let icon;
    export let title;
    export let description;
</script>

<style>
    div.card {
        display: flex;
        flex-direction: column;
        text-align: left;
        border-radius: 20px;
        gap: 0.5rem;
        padding: 2.5rem;
        box-sizing: border-box;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
    }

    div.card:hover {
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
        background-color: #1c1c1c;
    }

    img {
        max-width: 20%;
    }
</style>

<div class="card">
    <img src="{icon}" alt="{`${title} icon`}" />
    <Header text="{title}" isSectionHeader={false} />
    <Text text={description} size={1.2} align={"justify"} color={"faded"} />
</div>
