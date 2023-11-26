<script>
    export let socials;
</script>

<style>
    section.social-buttons {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    button {
        margin: 0;
        padding: 0;
        border-radius: 50%;
        border: 0px solid transparent;
        background-color: transparent;
    }

    a {
        margin: 0;
        padding: 0;
        border: 0px solid transparent;
    }

    img {
        margin: 0;
        padding: 0;
        width: 2.2rem;
        height: 2.2rem;
        border: 0px solid transparent;
        transition: transform 0.25s ease-in-out;
    }

    img:hover {
        transform: scale(1.2);
    }
</style>

<section class="social-buttons">
    {#each socials as social}
        <button>
            <a href="{social.link}" target="_blank">
                <img src="{social.logo}" alt="{social.alt}" />
            </a>
        </button>
    {/each}
</section>
