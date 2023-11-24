<script>
    import Header from './header.svelte';
    import Text from './text.svelte';

    export let header;
    export let text;
    export let isCommonText = false;

    const align = isCommonText ? 'justify' : 'center';
    const placement = isCommonText ? 'infobox' : 'subtitle infobox';

</script>

<Header text={header} isSectionHeader={true} />
<Text text={text} size={1.2} align={align} placement={placement} />
