<script>
    import { createEventDispatcher } from 'svelte';
    import Button from '../components/button.svelte';
    import Logo from '../components/logo.svelte';
    import Social from '../components/social.svelte';

    export let options;
    export let activePage;

    const socials = [
        {
            logo: '/socials/github.svg',
            alt: 'GitHub Logo',
            link: 'https://github.com/rifatrakib',
        },
        {
            logo: '/socials/linkedin.svg',
            alt: 'LinkedIn Logo',
            link: 'https://www.linkedin.com/in/md-abdur-rakib-1508/',
        },
        {
            logo: '/socials/mailbox.svg',
            alt: 'Mail Logo',
            link: 'mailto:abdur.rakib.1508@gmail.com',
        }
    ]

    const dispatch = createEventDispatcher();

    function changePage(event) {
        activePage = event.detail;
        dispatch('changePage', activePage);
    }
</script>

<style>
    div {
        width: 100%;
        margin: 0 auto;
        background-color: #202020;
        top: 0;
        position: sticky;
        z-index: 10;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
    }

    nav {
        width: 75%;
        margin: inherit;
        text-align: center;
        display: flex;
        justify-content: space-between;
    }

    nav section.nav-buttons {
        width: 20%;
        margin: inherit;
        display: flex;
        justify-content: space-evenly;
    }

    nav section.social-buttons {
        gap: 0.5rem;
        display: flex;
        justify-content: space-evenly;
        margin-left: auto;
    }
</style>

<div>
    <nav>
        <Logo on:changePage />
        <section class="nav-buttons">
            {#each options as option}
                <Button
                    label='{option}'
                    isActive={option === activePage}
                    on:changePage={changePage} />
            {/each}
        </section>
        <section class="social-buttons">
            {#each socials as social}
                <Social data={social} />
            {/each}
        </section>
    </nav>
</div>
