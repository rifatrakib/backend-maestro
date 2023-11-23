<script>
    import Button from './button.svelte';

    export let project;
</script>

<style>
    section {
        width: 100%;
        display: flex;
        flex-direction: column;
        text-align: left;
        border-radius: 20px;
        gap: 0.5rem;
        padding: 1.5rem 2.5rem;
        box-sizing: border-box;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
    }

    section:hover {
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
        background-color: #1c1c1c;
    }

    header {
        font-size: 1.3rem;
        font-weight: 600;
    }

    header span {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.2rem;
        color: #ffffff90;
        padding-left: 0.5rem;
        font-style: italic;
    }

    p {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
        font-size: 1rem;
        font-weight: 400;
    }

    li {
        margin-left: 3.5rem;
        font-size: 1rem;
        font-weight: 400;
        margin-bottom: 0.5rem;
        text-align: justify;
    }

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
</style>

<section>
    <header>
        {project.name}
        <span>({project.duration})</span>
    </header>
    <p>{project.objective}</p>
    <ul>
        {#each project.points as point}
            <li>{point}</li>
        {/each}
    </ul>
    <div>
        <Button label="view" hasIcon={true} link={project.link} />
    </div>
</section>
