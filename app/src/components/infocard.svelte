<script>
    import Header from './header.svelte';
    import Text from './text.svelte';

    export let header;
    export let text;
    export let isPageSubtitle = false;
</script>

<style>
    section.infocard-text {
        margin: 0;
        border-radius: 20px;
    }

    section.subtitle {
        width: 80%;
        letter-spacing: 0.1rem;
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 2.25rem;
        text-align: center;
    }

    section:not(.subtitle) {
        padding: 2.5rem;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
    }

    section:not(.subtitle):hover {
        background-color: #1c1c1c;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
    }
</style>

<Header text={header} isSectionHeader={true} />
<section class="infocard-text" class:subtitle={isPageSubtitle}>
    <Text text={text} size={1.2} align={'justify'} isInfobox={true} />
</section>
