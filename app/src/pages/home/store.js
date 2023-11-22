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
    'python', 'nodejs', 'docker', 'aws', 'elastic', 'terraform', 'git', 'github',
    'postgresql', 'mongodb', 'mysql', 'redis', 'influxdb', 'svelte', 'd3js', 'go',
]);

export const infocardStore = readable({
    header: 'Who am I?',
    text: 'As a skilled backend developer, I possess strong proficiency in Python web development, AWS, ELK, Docker, SQL & NoSQL databases, Terraform, and other relevant technologies for modern web application development. With experience in designing and implementing scalable backend systems, RESTful APIs, and microservices architecture to build and maintain data-intensive web applications, I have a proven record of accomplishment of delivering high-quality software solutions. My dedication to staying up to date with emerging technologies and industry trends ensures that I am always equipped to provide valuable contributions to any development team. I am committed to delivering exceptional results and am passionate about collaborating with cross-functional teams to achieve common goals.',
});
