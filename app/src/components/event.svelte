<script>
    export let eventData;
</script>

<style>
    section.event-container {
        display: flex;
        flex-direction: column;
        align-items: baseline;
        justify-content: center;
        text-align: left;
        gap: 1rem;
        padding-left: 2rem;
    }

    /* .event-container {
        border-left: 2px solid #ffffff;
    } */

    section.event-header {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
    }

    section.event-header img {
        width: 2rem;
        height: 2rem;
        /* padding: 0 0 0 1rem; */
        margin: 0 0 0 -1rem;
    }

    header {
        font-size: 1.5rem;
        font-weight: 600;
        line-height: 1.2rem;
    }

    section.event-details {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
    }

    section.event-details .divider {
        height: 100%;
        border-right: 1px solid #ffffff50;
    }

    section.event {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding-left: 2rem;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    p {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
        font-size: 1rem;
        font-weight: 400;
    }

    p span img {
        width: 1.5rem;
        height: 1.5rem;
    }

    ul {
        margin: 0;
        padding: 0;
    }

    li {
        margin-left: 3.5rem;
        font-size: 1rem;
        font-weight: 400;
        margin-bottom: 0.5rem;
        text-align: justify;
    }
</style>

<section class="event-container">
    <section class="event-header">
        <img src="/icons/{eventData.type}.svg" alt="work icon" />
        <header>{eventData.header}</header>
    </section>
    <section class="event-details">
        <section class="divider"></section>
        <section class="event">
            <div>
                {#each Object.entries(eventData.subheaders) as [key, value]}
                    <p class="metadata">
                        <span><img src="/icons/{key}.svg" alt="work icon" /></span>
                        <span>{value}</span>
                    </p>
                {/each}
            </div>
            <p>
                <span><img src="/icons/responsibilities.svg" alt="Icon" /></span>
                <span>Responsibilities I have undertaken in this role:</span>
            </p>
            <ul>
                {#each eventData.points as point}
                    <li>{point}</li>
                {/each}
            </ul>
        </section>
    </section>
</section>
