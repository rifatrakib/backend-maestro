import { readable } from 'svelte/store';

export const eventsStore = readable({
    work: [
        {
            type: 'work',
            header: 'Softwrd Ltd',
            subheaders: {
                positiion: 'Backend Engineer',
                location: 'Dhaka, Bangladesh',
                duration: 'Aug 2021 - Present',
            },
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
        },
        {
            type: 'internship',
            header: 'Focus International Inc',
            subheaders: {
                positiion: 'Web Developer (Intern)',
                location: 'Yangzhou, Jiangsu, China',
                duration: 'Sep 2019 - Nov 2019',
            },
            points: [
                'Built the frontend of the company website using HTML, CSS, & JavaScript.',
                'Get familiar with web server technologies and deployment of websites and databases in the cloud.',
            ],
        },
    ],
    academic: [
        {
            type: 'academic',
            header: 'Yangzhou University',
            subheaders: {
                positiion: 'Undergraduate Student',
                location: 'Yangzhou, Jiangsu, China',
                duration: 'Sep 2017 - Sep 2021',
            },
            points: [
                'Built Python API servers using a microservice architecture with an OAuth2 authentication gateway for secure access, emphasizing scalable solutions.',
                'Provisioned AWS ECS clusters with Terraform and automated application deployment with GitHub Actions in Docker containers with ELK logging & monitoring maintaining TDD.',
                'Utilized various AWS services to build and deploy automated scraping and ETL pipelines, as well as to store, manage, and analyze data.',
                'Developed complex & dynamic data retrieval pipelines, utilizing SQL and MongoDB Aggregation framework to ensure efficient data management and retrieval.',
                'Implemented geospatial data analytics backends utilizing MongoDB geospatial features.',
                'Launched data modeling process and streamlined a generalized data validation for multiple teams, driving significant productivity and quality gains.',
                'Participated in designing application infrastructure and deploying a comprehensive, highly available, and scalable hybrid microservices-based backend system on AWS that delivered reduced data loss and robust disaster recovery capabilities.',
                'Deployed MySQL databases on AWS RDS, utilizing read replicas and an RDS proxy to reduce database operations and significantly enhance system performance.',
            ],
        },
        {
            type: 'academic',
            header: 'Yangzhou University',
            subheaders: {
                positiion: 'Undergraduate Student',
                location: 'Yangzhou, Jiangsu, China',
                duration: 'Sep 2017 - Sep 2021',
            },
            points: [
                'Built the frontend of the company website using HTML, CSS, & JavaScript.',
                'Get familiar with web server technologies and deployment of websites and databases in the cloud.',
            ],
        },
    ],
});
