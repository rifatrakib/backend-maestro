<script>
    export let text;
    export let size;
    export let color = "primary";
    export let align = "left";
    export let isInfobox = false;

    const sizeClass = size.toString().replace(".", "_");
</script>

<style>
    p {
        font-family: inherit;
    }

    p.size-1 {
        font-weight: 400;
        font-size: 1rem;
    }

    p.size-1_2 {
        font-weight: 500;
        font-size: 1.2rem;
    }

    p.color-primary {
        color: #ffffff;
    }

    p.color-faded {
        color: #ffffff90;
    }

    p.align-left {
        text-align: left;
    }

    p.align-justify {
        text-align: justify;
    }

    p.infobox {
        font-weight: 300;
        font-size: 1.2rem;
        line-height: 2rem;
    }
</style>

<p class="size-{sizeClass} color-{color} align-{align}" class:infobox={isInfobox}>
    {text}
</p>
