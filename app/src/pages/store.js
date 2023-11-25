import { readable } from 'svelte/store';

export const navStore = readable([
    {
        logo: '/icons/github-nav.svg',
        alt: 'GitHub Logo',
        link: 'https://github.com/rifatrakib',
    },
    {
        logo: '/icons/linkedin-nav.svg',
        alt: 'LinkedIn Logo',
        link: 'https://www.linkedin.com/in/md-abdur-rakib-1508/',
    },
    {
        logo: '/icons/mailbox-nav.svg',
        alt: 'Mail Logo',
        link: 'mailto:abdur.rakib.1508@gmail.com',
    },
]);
