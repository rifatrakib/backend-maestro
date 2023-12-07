<script>
    import { quintInOut } from 'svelte/easing';
    import Home from './home/home.svelte';
    import Work from './about/work.svelte';
    import Education from './about/education.svelte';
    import Projects from './about/projects.svelte';
    import CV from './about/cv.svelte';

    export let currentPage;
    export let direction;
    export let isSmallScreen;

    $:transitionParams = {
        in: {x: 500 * direction, duration: 1000, easing: quintInOut},
        out: {duration: 100, easing: quintInOut},
    };

    $:if (currentPage) {window.scrollTo(0, 0)};
</script>

<style>
    div {
        width: 75%;
        margin: 0 auto;
        text-align: center;
    }

    @media screen and (max-width: 768px) {
        div {
            width: 100%;
        }
    }
</style>

<div>
    {#if currentPage === 'home'}
        <Home transitionParams={transitionParams} isSmallScreen={isSmallScreen} />
    {:else if currentPage === 'work'}
        <Work transitionParams={transitionParams} />
    {:else if currentPage === 'education'}
        <Education transitionParams={transitionParams} />
    {:else if currentPage === 'projects'}
        <Projects transitionParams={transitionParams} />
    {:else if currentPage === 'CV'}
        <CV transitionParams={transitionParams} />
    {/if}
</div>
