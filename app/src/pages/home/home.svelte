<script>
    import Infobox from '../../components/infobox.svelte';

    const image = {
        link: '/intro.svg',
        alt: 'intro cover'
    };

    const textContent = "I am a Backend Engineer at Softwrd Ltd. My expertise lies in server-side programming, cloud, and containerization. I have experience in web scraping and data engineering. I am a fast learner and a collaborative team player.";
</script>

<article>
    <Infobox image={image} textContent={textContent} />
</article>
