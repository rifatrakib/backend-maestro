import { readable } from 'svelte/store';

export const eventsStore = readable({
    work: [
        {
            header: 'Softwrd Ltd',
            subheaders: {
                positiion: 'Backend Engineer',
                location: 'Dhaka, Bangladesh',
                duration: 'Aug 2021 - Present',
            },
            points: [
                'Point 1',
                'Point 2',
                'Point 3',
            ],
        },
    ],
});
