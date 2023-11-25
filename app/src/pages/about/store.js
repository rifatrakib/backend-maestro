import { readable } from 'svelte/store';

export const eventsStore = readable({
    work: [
        {
            icon: './icons/work.svg',
            name: 'Softwrd Ltd',
            duration: 'Aug 2021 - Present',
            subheaders: [
                {
                    icon: './icons/position.svg',
                    text: 'Backend Engineer',
                },
                {
                    icon: './icons/location.svg',
                    text: 'Dhaka, Bangladesh',
                },
                {
                    icon: './icons/duration.svg',
                    text: 'Aug 2021 - Present',
                },
            ],
            points: [
                'Built Python API servers using a microservice architecture with an OAuth2 authentication gateway for secure access, emphasizing scalable solutions.',
                'Provisioned AWS ECS clusters and services with Terraform and automated application deployment with GitHub Actions in Docker containers with ELK logging & monitoring maintaining TDD.',
                'Utilized various AWS services to build and deploy automated scraping and ETL pipelines, as well as to store, manage, and analyze data.',
                'Developed complex & dynamic data retrieval pipelines, utilizing SQL and MongoDB Aggregation framework to ensure efficient data management and retrieval.',
                'Implemented geospatial data analytics backends utilizing MongoDB geospatial features.',
                'Launched data modeling process and streamlined a generalized data validation for multiple teams, driving significant productivity and quality gains.',
                'Participated in designing application infrastructure and deploying a comprehensive, highly available, and scalable hybrid microservices-based backend system on AWS that delivered reduced data loss and robust disaster recovery capabilities.',
                'Deployed MySQL databases on AWS RDS, utilizing read replicas and an RDS proxy to reduce database operations and significantly enhance system performance.',
            ],
            projects: [
                {
                    name: "Project 1",
                    objective: "Objective 1",
                    duration: "Duration 1",
                    link: "https://www.google.com",
                    points: [
                        "Point 1",
                        "Point 2",
                        "Point 3"
                    ],
                },
                {
                    name: "Project 2",
                    objective: "Objective 2",
                    duration: "Duration 2",
                    link: "https://www.google.com",
                    points: [
                        "Point 1",
                        "Point 2",
                        "Point 3"
                    ],
                },
            ]
        },
        {
            icon: './icons/internship.svg',
            name: 'Focus International Inc',
            duration: 'Sep 2019 - Nov 2019',
            subheaders: [
                {
                    icon: './icons/position.svg',
                    text: 'Web Developer (Intern)',
                },
                {
                    icon: './icons/location.svg',
                    text: 'Yangzhou, Jiangsu, China',
                },
                {
                    icon: './icons/duration.svg',
                    text: 'Sep 2019 - Nov 2019',
                },
            ],
            points: [
                'Built the frontend of the company website using HTML, CSS, & JavaScript.',
                'Get familiar with web server technologies and deployment of websites and databases in the cloud.',
            ],
        },
    ],
    education: [
        {
            icon: './icons/academic.svg',
            name: 'Yangzhou University',
            duration: 'Sep 2017 - Sep 2021',
            subheaders: [
                {
                    icon: './icons/position.svg',
                    text: 'Undergraduate Student',
                },
                {
                    icon: './icons/location.svg',
                    text: 'Yangzhou, Jiangsu, China',
                },
                {
                    icon: './icons/duration.svg',
                    text: 'Sep 2017 - Sep 2021',
                },
            ],
            points: [
                'Graduated with a CGPA of 4.4 out of 5.0 (scored 93.7%).',
                'Multiple awards for academic excellence.',
                'Dissertation on the intricacies of full-text search engines and recommender systems.',
                'Built multifaceted drone equipped with telemetry, 3D photography, and more.',
            ],
        },
    ],
    projects: [],
});

export const infocardStore = readable({
    work: {
        header: 'Discover Expertise',
        text: 'Dive into my professional journey — a fusion of Python mastery, microservices finesse, and precise AWS deployment. Uncover the art of optimizing databases and crafting innovative data analytics solutions. As a former Web Developer Intern, I bring a holistic perspective. Explore the details and witness a commitment to excellence in every professional step.',
    },
    education: {
        header: 'Unlocking Knowledge',
        text: "Embark on a journey through my academic exploration, where passion for Software Engineering merges with dedication. Beyond grades, it's a brief glimpse into an inspiring educational odyssey. Join me in uncovering the narrative of intellectual curiosity.",
    },
    projects: {
        header: 'Project Showcase',
        text: 'Dive into my projects—a blend of innovation and hands-on expertise. From dynamic API servers to intricate drone designs, each narrates a story of creative problem-solving. Join me in exploring this curated collection, showcasing a commitment to pushing technological boundaries.',
    }
});
