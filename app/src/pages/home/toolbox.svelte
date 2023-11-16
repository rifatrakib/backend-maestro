<script>
    import Capsule from '../../components/capsule.svelte';

    const tools = [
        'Python', 'NodeJS', 'Docker', 'AWS', 'Elastic', 'Terraform', 'Git', 'GitHub',
        'PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'InfluxDB', 'Svelte', 'D3JS', 'Go',
    ]
</script>

<style>
    h2 {
        font-family: monospace;
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 2rem;
    }

    section.logos {
        display: grid;
        gap: 1.5rem;
        grid-template-columns: repeat(8, 1fr);
        justify-content: space-evenly;
        margin-bottom: 10rem;
    }
</style>

<section>
    <h2>My Toolbox</h2>
    <section class="logos">
        {#each tools as tool}
            <Capsule name={tool} />
        {/each}
    </section>
</section>
