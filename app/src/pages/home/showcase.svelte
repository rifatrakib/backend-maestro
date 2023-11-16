<script>
    import Card from '../../components/card.svelte';

    const data = [
        {
            icon: '/icons/api.svg',
            title: 'API Engineering',
            description: 'Experienced in designing, building, optimizing, and maintaining RESTful APIs using Python, NodeJS, and Go',
        },
        {
            icon: '/icons/database.svg',
            title: 'Database Engineering',
            description: 'Experienced in using MySQL, MongoDB, PostgreSQL, InfluxDB, elasticsearch, and Redis',
        },
        {
            icon: '/icons/cloud.svg',
            title: 'Cloud Computing',
            description: 'Experienced in designing, building, optimizing, and maintaining application infrastructure using AWS',
        },
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
