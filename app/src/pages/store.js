import { readable } from 'svelte/store';

export const navStore = readable([
    {
        logo: '/socials/github.svg',
        alt: 'GitHub Logo',
        link: 'https://github.com/rifatrakib',
    },
    {
        logo: '/socials/linkedin.svg',
        alt: 'LinkedIn Logo',
        link: 'https://www.linkedin.com/in/md-abdur-rakib-1508/',
    },
    {
        logo: '/socials/mailbox.svg',
        alt: 'Mail Logo',
        link: 'mailto:abdur.rakib.1508@gmail.com',
    },
]);
