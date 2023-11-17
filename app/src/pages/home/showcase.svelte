<script>
    import Card from '../../components/card.svelte';

    const data = [
        {
            icon: '/icons/api.svg',
            title: 'API Engineering',
            description: 'Design, build, containerize, and maintain REST API with Python, NodeJS, and Go',
        },
        {
            icon: '/icons/database.svg',
            title: 'Database Engineering',
            description: 'Using MySQL, MongoDB, PostgreSQL, InfluxDB, elasticsearch, and Redis',
        },
        {
            icon: '/icons/cloud.svg',
            title: 'Cloud Computing',
            description: 'Design, build, optimize, and maintain application infrastructure on AWS',
        },
        {
            icon: '/icons/system-design.svg',
            title: 'System Design',
            description: 'Design and implement scalable systems for high availability and performance',
        },
        {
            icon: '/icons/data.svg',
            title: 'Data Engineering & Analytics',
            description: 'Build pipelines to scrape, store, and perform analysis and analytics on data',
        },
        {
            icon: '/icons/devops.svg',
            title: 'DevOps',
            description: 'Build CI/CD pipelines to build, test, deploy, and monitor applications',
        }
    ]
</script>

<style>
    h2 {
        font-family: monospace;
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 2rem;
    }

    section.card-container {
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(3, 1fr);
        justify-content: space-evenly;
        margin: 50px auto;
    }
</style>

<section>
    <h2>Area of Experiences</h2>
    <section class="card-container">
        {#each data as { icon, title, description }}
            <Card icon={icon} title={title} description={description} />
        {/each}
    </section>
</section>
