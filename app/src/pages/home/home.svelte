<script>
    import Infobox from './welcome.svelte';
    import Skills from './toolbox.svelte';
    import Showcase from './showcase.svelte';

    const image = {
        link: '/intro.svg',
        alt: 'intro cover'
    };

    const sentences = [
        "Hello, I am Md Abdur Rakib",
        "I am a Backend Engineer at Softwrd Ltd",
        "My expertise lies in server-side programming, cloud, and containerization",
        "I have experience in web scraping and data engineering",
        "I am a fast learner and a collaborative team player"
    ];
</script>

<article>
    <Infobox image={image} sentences={sentences} />
    <Showcase />
    <Skills />
</article>
