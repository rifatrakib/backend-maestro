<script>
    export let text;
    export let size;
    export let color = "primary";
    export let align = "left";
    export let placement = null;

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

    p.align-center {
        text-align: center;
    }

    p.align-justify {
        text-align: justify;
    }

    p.infobox {
        font-weight: 300;
        font-size: 1.2rem;
        line-height: 2rem;
    }

    p.subtitle {
        padding: 0 10%;
    }

    p.cv {
        padding: 1rem 2rem 0 0;
        font-size: 1rem;
        font-weight: 400;
        line-height: unset;
    }
</style>

<p class="size-{sizeClass} color-{color} align-{align} {placement}">
    {text}
</p>
