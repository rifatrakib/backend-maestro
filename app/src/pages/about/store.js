import { readable } from 'svelte/store';

export const workStore = readable({
    info: {
        header: 'Discover Expertise',
        text: 'Dive into my professional journey — a fusion of Python mastery, microservices finesse, and precise AWS deployment. Uncover the art of optimizing databases and crafting innovative data analytics solutions. As a former Web Developer Intern, I bring a holistic perspective. Explore the details and witness a commitment to excellence in every professional step.',
    },
    events: [
        {
            icon: '/icons/work.svg',
            name: 'Softwrd Ltd',
            subheader: 'Aug 2021 - Present',
            metadata: [
                {
                    icon: '/icons/position.svg',
                    text: 'Backend Engineer',
                },
                {
                    icon: '/icons/location.svg',
                    text: 'Dhaka, Bangladesh',
                },
                {
                    icon: '/icons/duration.svg',
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
                    icon: '/icons/work.svg',
                    name: 'PropCloud',
                    subheader: 'PropCloud AS',
                    link: 'https://propcloud.no/',
                    metadata: [
                        {
                            icon: '/icons/genre.svg',
                            text: 'Backend & Infrastructure Engineering, Database Design & Optimization, Data Modeling & Analytics',
                        },
                        {
                            icon: '/icons/reference.svg',
                            text: 'https://propcloud.no/',
                        },
                        {
                            icon: '/icons/duration.svg',
                            text: 'Aug 2021 - Oct 2022',
                        },
                        {
                            icon: '/icons/objective.svg',
                            text: "Design and build a scalable backend infrastructure for a B2B web app providing advanced real estate and geospatial data analysis, leveraging cutting-edge technologies and industry best practices to ensure a seamless user experience and meet the target audience's needs.",
                        },
                    ],
                    points: [
                        'Development of multiple microservices focused on providing comprehensive data analytics and geospatial analysis solutions on large volumes of real estate information.',
                        'Developed charting framework, leveraging Python, MongoDB, and Redis, with D3.js frontend.',
                        'Streamlined generalized data validation across teams by leveraging pydantic-based modules and MongoDB schema validation, resulting in improved data quality and productivity gains.',
                        'Designed and deployed scalable and highly available backend systems on AWS provisioned with Terraform, incorporating ELK stack for logging & monitoring, GitHub Actions for CI/CD, and optimizing database performance with AWS RDS read replicas and RDS proxy.',
                    ],
                    tools: [
                        'Backend: Python (frameworks used: flask, fastapi).',
                        'Data analysis: Leveraging database functions, NumPy ecosystem (NumPy, pandas, dask).',
                        'Validation works: pydantic-based public & in-house private packages.',
                        'Databases: MongoDB (semi-structured), MySQL (structured), Redis (cache & message broker).',
                        'Infrastructure: AWS & Elastic cloud services, Terraform, automated testing with pytest as part of GitHub Actions CI/CD pipeline.',
                    ],
                },
                {
                    icon: '/icons/work.svg',
                    name: 'Area Analysis',
                    subheader: 'PropCloud AS',
                    metadata: [
                        {
                            icon: '/icons/genre.svg',
                            text: 'Data Engineering & Analysis, Data Modeling',
                        },
                        {
                            icon: '/icons/duration.svg',
                            text: 'Feb 2022 - Apr 2023',
                        },
                        {
                            icon: '/icons/objective.svg',
                            text: 'Develop and implement a pipeline for the automated collection of real estate and geospatial data utilizing scrapers, as well as incorporating necessary pre-processing, ETL, and post-processing tasks.',
                        },
                    ],
                    points: [
                        'Built scrapers with Scrapy to collect large volumes of structured and unstructured geospatial & real estate data from various providers, including the Norwegian Mapping Authority.',
                        'Implement end-to-end data pipeline with data collection, cleaning & sanitizing, and ETL steps.',
                        'Implemented industry-standard security protocols and leveraged AWS security features to ensure secure data transmission, storage, and access throughout the data lifecycle.',
                    ],
                    tools: [
                        'Web crawlers and scrapers: Python (frameworks and libraries used: Scrapy, httpx, & more).',
                        'Data: pydantic and NumPy ecosystem (NumPy, pandas, dask), MongoDB, AWS glue & others.',
                        'Storage: Amazon S3, MySQL, MongoDB.',
                        'Quick analysis and Visualization: Microsoft Power BI, Microsoft Excel.',
                    ],
                },
            ],
        },
        {
            icon: '/icons/internship.svg',
            name: 'Focus International Inc',
            subheader: 'Sep 2019 - Nov 2019',
            metadata: [
                {
                    icon: '/icons/position.svg',
                    text: 'Web Developer (Intern)',
                },
                {
                    icon: '/icons/location.svg',
                    text: 'Yangzhou, Jiangsu, China',
                },
                {
                    icon: '/icons/duration.svg',
                    text: 'Sep 2019 - Nov 2019',
                },
            ],
            points: [
                'Built the frontend of the company website using HTML, CSS, & JavaScript.',
                'Get familiar with web server technologies and deployment of websites and databases in the cloud.',
            ],
        },
    ],
});

export const educationStore = readable({
    info: {
        header: 'Unlocking Knowledge',
        text: "Embark on a journey through my academic exploration, where passion for Software Engineering merges with dedication. Beyond grades, it's a brief glimpse into an inspiring educational odyssey. Join me in uncovering the narrative of intellectual curiosity.",
    },
    events: [
        {
            icon: '/icons/academic.svg',
            name: 'Yangzhou University',
            subheader: 'Sep 2017 - Sep 2021',
            metadata: [
                {
                    icon: '/icons/position.svg',
                    text: 'Undergraduate Student',
                },
                {
                    icon: '/icons/location.svg',
                    text: 'Yangzhou, Jiangsu, China',
                },
                {
                    icon: '/icons/duration.svg',
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
});

export const projectsStore = readable({
    info: {
        header: 'Project Showcase',
        text: 'Dive into my projects—a blend of innovation and hands-on expertise. From dynamic API servers to intricate drone designs, each narrates a story of creative problem-solving. Join me in exploring this curated collection, showcasing a commitment to pushing technological boundaries.',
    },
    events: [
        {
            icon: '/icons/project.svg',
            name: 'eMart',
            subheader: 'Aug 2023 - Present',
            link: 'https://github.com/rifatrakib/emart',
            metadata: [
                {
                    icon: '/icons/reference.svg',
                    text: 'https://github.com/rifatrakib/emart',
                },
                {
                    icon: '/icons/duration.svg',
                    text: 'Aug 2023 - Present',
                },
                {
                    icon: '/icons/objective.svg',
                    text: "Architect and implement a secure, scalable e-commerce platform with a microservices architecture, utilizing diverse programming languages, databases, and storage solutions, while integrating robust logging and monitoring within Docker containers (targeting to use Kubernetes in future); strategically employing public and private networks for containers based on their specific purposes to enhance deployment efficiency and performance.",
                },
            ],
            points: [
                'Learn to implement a microservices architecture for the e-commerce platform, enhancing scalability and maintainability.',
                'Targeted for learning to use various programming languages (Python, Go, NodeJS) to build different services, contributing to a versatile and adaptable system.',
                'Divresify databases and storage solutions in order to learn configuration and optimization as well as comparison among databases of different orientation.',
                'Learn to configure docker containers, ensuring consistency across development, testing, and production environments and securing services via access control using docker networks.',
                'Learn to configure comprehensive logging and monitoring mechanisms with elastic stack and APM server to provide real-time insights into system performance and facilitate proactive issue detection.',
                'Designed the platform with scalability in mind, allowing it for easy migration to leverage Kubernetes instead of docker compose.',
            ],
            tools: [
                'Microservices Architecture: APIs built with Python, Go, and Node.JS',
                'Databases & Storage Solutions: PostgreSQL, MongoDB, Redis, and others.',
                'Containerization: Docker, Docker Compose.',
                'Access Control & Networking: Docker networks, Docker Compose.',
                'Logging & Monitoring: Elastic Stack (Elasticsearch, Logstash, Kibana), Application Performance Monitoring (APM) server.',
                'Scalability & Orchestration: Kubernetes for potential migration.',
            ],            
        },
        {
            icon: '/icons/project.svg',
            name: 'SpectraTrace',
            subheader: 'May 2023 - Jun 2023',
            link: 'https://github.com/rifatrakib/SpectraTrace',
            metadata: [
                {
                    icon: '/icons/reference.svg',
                    text: 'https://github.com/rifatrakib/SpectraTrace',
                },
                {
                    icon: '/icons/duration.svg',
                    text: 'May 2023 - Jun 2023',
                },
                {
                    icon: '/icons/objective.svg',
                    text: 'SpectraTrace is an audit log service with the ability to store, trace, and analyze a broad spectrum of events, enabling deep insights and comprehensive analysis.',
                },
            ],
            points: [
                'A write-intensive fastapi service that will accept event data sent by other systems and provide an HTTP endpoint for querying recorded event data by field values.',
                'Celery app which polls for events pushed in a Redis queue and pushes the processed data to InfluxDB bucket.',
                'A typer CLI application which allows easy management of the API along with all its resources.',
                'Containerized databases managed via docker compose and persistent volumes.',
            ],
            tools: [
                'Backend: Python (frameworks used: fastapi).',
                'Consumer: Python (Celery)',
                'Validation works: pydantic-based packages.',
                'Databases: InfluxDB (event logs), PostgreSQL (user information), Redis (cache & message broker).',
                'Infrastructure: docker compose.',
            ],
        },
        {
            icon: '/icons/project.svg',
            name: 'Lazuli',
            subheader: 'Apr 2023 - Apr 2023',
            link: 'https://github.com/rifatrakib/lazuli',
            metadata: [
                {
                    icon: '/icons/reference.svg',
                    text: 'https://github.com/rifatrakib/lazuli',
                },
                {
                    icon: '/icons/duration.svg',
                    text: 'Apr 2023 - Apr 2023',
                },
                {
                    icon: '/icons/objective.svg',
                    text: 'Develop a versatile web scraping tool for extracting data from the Japanese Adidas website aiming to streamline the data collection and preprocessing process.',
                },
            ],
            points: [
                'Scrapy web crawler with automated data preprocessing & validation, ETL (Extract Transform Load), and data modeling workloads.',
                'Versioning system (for preprocessed & final reports along with other important things like logs for monitoring purposes and scraping session statistics).',
                'Fully automated reporting tools (email session reports with KPIs) and visualization (provide visualization about KPIs and insights about scraping session performance).',
                'typer CLI application to provide central management of all the features.',
            ],
            tools: [
                'Web crawlers and scrapers: Python (framework used: Scrapy, openpyxl).',
                'Data: pydantic and NumPy ecosystem (NumPy, pandas), Microsoft Excel.',
                'Monitoring and Visualization: Python (Matplotlib, Seaborn).',
                'Data Versioning: File-system versioning.',
                'CLI: typer.',
            ],
        },
    ],
});

export const skillsStore = readable([
    'Python (Web Scraping & Crawling, ETL, Data Analysis & Visualization, Data Modeling)',
    'Python Web Development (fastapi, Django, flask)',
    'fastapi & pydantic ecosystem, Celery',
    'NumPy ecosystem (NumPy, pandas, dask, matplotlib, seaborn, scikit-learn etc.)',
    'SQL Relational Databases (PostgreSQL, MySQL, SQL server & more), Redis, InfluxDB',
    'MongoDB (Aggregation framework, geospatial features, time series)',
    'Amazon Web Services (AWS)',
    'Git, GitHub, GitHub Actions',
    'Docker, Elastic Stack (ELK), Terraform',
    'Microsoft Power BI, Microsoft Excel',
]);
