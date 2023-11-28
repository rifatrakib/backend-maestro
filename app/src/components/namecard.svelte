<script>
    import Header from './header.svelte';
    import Info from './info.svelte';
    import Text from './text.svelte';
</script>

<style>
    section.cv-header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: space-between;
        gap: 1.5rem;
        margin: 0;
        box-sizing: border-box;
    }

    section.namecard {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        padding: 2rem 2rem 0 2rem;
    }

    section.socials {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 1rem;
        padding: 0 0 0 2rem;
    }

    section.links {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 1rem;
        padding-left: 2rem;
    }

    section.headings {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 1rem;
    }

    section.contact {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        gap: 1rem;
    }
</style>

<section class="cv-header">
    <section class="namecard">
        <section class="headings">
            <Header text={'Md Abdur Rakib'} isSectionHeader={false} isNamecard={true} />
            <Text text={'Backend Engineer'} size={1} align={'left'} placement={'infobox namecard'} isNamecard={true} />
        </section>
        <section class="contact">
            <Info icon={'/icons/address.svg'} label={'Cumilla - 3500, Bangladesh'} isNamecard={true} />
            <Info icon={'/icons/mail.svg'} label={'abdur.rakib.1508@gmail.com'} isNamecard={true} />
            <Info icon={'/icons/phone.svg'} label={'(+880) 1730 461508'} isNamecard={true} />
        </section>
    </section>
    <section class="socials">
        <Header text={'Important Links'} isSectionHeader={false} cvSection={true} />
        <section class="links">
            <Info icon={'/icons/github-nav.svg'} label={'@rifatrakib'} />
            <Info icon={'/icons/linkedin-nav.svg'} label={'@md-abdur-rakib-1508'} />
            <Info icon={'/icons/website.svg'} label={'Backend Maestro'} />
        </section>
    </section>
</section>
