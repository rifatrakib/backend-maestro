import { readable } from 'svelte/store';

export const heroStore = readable({
    image: {
        link: '/intro.svg',
        alt: 'intro cover'
    },
    sentences: [
        "Hello, I am Md Abdur Rakib",
        "I am a Backend Engineer at Softwrd Ltd",
        "My expertise lies in server-side programming, cloud, and containerization",
        "I have experience in web scraping and data engineering",
        "I am a fast learner and a collaborative team player"
    ],
});

export const showcaseStore = readable([
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
]);

export const toolsStore = readable([
    'Python', 'NodeJS', 'Docker', 'AWS', 'Elastic', 'Terraform', 'Git', 'GitHub',
    'PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'InfluxDB', 'Svelte', 'D3JS', 'Go',
]);
