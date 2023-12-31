import { readable } from 'svelte/store';

export const cvStore = readable({
    header: 'Preview CV',
    text: 'Explore my condensed CV, capturing professional milestones, academic achievements, and standout projects. Uncover a snapshot of my skills, experiences, and the unique journey shaping my profile. Dive in to discover the fusion of expertise, passion, and dedication that defines my professional narrative.',
});

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
            pointsText: 'Highlights of some of the responsibilities that I have undertaken in this role:',
            points: [
                'Built and productionized APIs and microservices ensuring secure access and emphasizing scalable solutions.',
                'Provisioned AWS ECS clusters and services with Terraform and automated application deployment with GitHub Actions followed by automated testing.',
                'Utilized various AWS services to build and deploy scraping and ETL pipelines, as well as to store, manage, and analyze data.',
                'Developed data retrieval pipelines, utilizing SQL and MongoDB Aggregation framework to ensure efficient data management and retrieval.',
                'Implemented geospatial data analytics backends utilizing MongoDB and PostGIS geospatial features.',
                'Reformed data modeling process and streamlined a generalized data validation for multiple teams, driving significant productivity and quality gains.',
                'Participated in designing application infrastructure and deploying on AWS that delivered reduced data loss and robust disaster recovery capabilities.',
                'Deployed MySQL and PostgreSQL databases on Amazon RDS, utilizing read replicas and an RDS proxy to significantly enhance system performance.',
            ],
            projectsText: 'Some projects that I have led or worked on while in this role:',
            projects: [
                {
                    icon: '/icons/work.svg',
                    name: 'Database Migration',
                    subheader: 'PropCloud AS',
                    metadata: [
                        {
                            icon: '/icons/genre.svg',
                            text: 'System Design & Data Modeling',
                        },
                        {
                            icon: '/icons/duration.svg',
                            text: 'Oct 2023 - Present',
                        },
                        {
                            icon: '/icons/objective.svg',
                            text: "Migrate the user data from MySQL and geospatial data from MongoDB to PostgreSQL to align with revised authentication and geospatial analysis requirements and leverage PostgreSQL's advanced features.",
                        },
                    ],
                    pointsText: 'Responsibilities that I have undertaken in this role:',
                    points: [
                        'Analyze and map the existing MySQL schema to new models to be used with PostgreSQL, ensuring a seamless transition and compatibility with geospatial data.',
                        'Conduct thorough testing to validate the integrity of migrated data, emphasizing the correctness and accuracy of user and geospatial information within the PostgreSQL environment.',
                        'Implement fine-grained access controls and security measures in PostgreSQL to align with the security requirements of the authentication service and protect sensitive geospatial information.',
                        'Strategize and execute the migration process with meticulous planning to ensure a seamless transition without requiring any maintenance window in the production environment, minimizing impact on ongoing operations.',
                    ],
                    toolsText: 'Tools & technologies that I have used in this project:',
                    tools: [
                        'Databases: PostgreSQL, MySQL, MongoDB.',
                        'Data preparation: SQLalchemy, pydantic, NumPy ecosystem (NumPy, pandas), beanie, etc.',
                        'Scheduled asynchronous tasks: Celery with Redis acting as both the backend and the broker.',
                        'Infrastructure: AWS (Amazon RDS, AWS ECS, AWS secretsmanager, etc.), Terraform, GitHub Actions.',
                    ],
                },
                {
                    icon: '/icons/work.svg',
                    name: 'OAuth2.0-compliant Authentication Gateway',
                    subheader: 'PropCloud AS',
                    metadata: [
                        {
                            icon: '/icons/genre.svg',
                            text: 'API Engineering, Authentication & Authorization, Security & Access Control',
                        },
                        {
                            icon: '/icons/duration.svg',
                            text: 'Sep 2023 - Nov 2023',
                        },
                        {
                            icon: '/icons/objective.svg',
                            text: 'Rebuild the authentication service into an enhanced API gateway, gradually eliminating legacy monolithic components, achieving OAuth 2.0 compliance, and enabling seamless Single Sign-On integration with diverse providers, all without disrupting production services.',
                        },
                    ],
                    pointsText: 'Responsibilities that I have undertaken in this role:',
                    points: [
                        'Overhaul the authentication service architecture, gradually phasing out legacy monolithic components for improved modularity.',
                        'Implement OAuth 2.0 standards to provide a secure and standardized authentication and authorization framework.',
                        'Enable Single Sign-On (SSO) integration with various third-party identity providers to enhance user experience.',
                        'Collaborate with microservices teams for seamless integration and minimal disruption to existing services.',
                        'Implement monitoring, troubleshoot issues, ensure security through timely patches and updates, and provide comprehensive documentation for developers.',
                    ],
                    toolsText: 'Tools & technologies that I have used in this project:',
                    tools: [
                        'Backend: RESTful API with Python (fastapi, SQLalchemy, pydantic & many more).',
                        'Databases: PostgreSQL, Redis (cache & message broker).',
                        'SSO Providers: Google, Microsoft, Facebook',
                        'Logging & Monitoring: Elastic Stack (Elasticsearch, Logstash, Kibana), Application Performance Monitoring (APM) server.',
                        'Infrastructure: AWS (Amazon RDS, AWS ECS, AWS secretsmanager, etc.), Terraform, GitHub Actions.',
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
                    pointsText: 'Responsibilities that I have undertaken in this role:',
                    points: [
                        'Built scrapers with Scrapy to collect large volumes of structured and unstructured geospatial & real estate data from various providers, including the Norwegian Mapping Authority.',
                        'Implement end-to-end data pipeline with data collection, cleaning & sanitizing, and ETL steps.',
                        'Implemented industry-standard security protocols and leveraged AWS security features to ensure secure data transmission, storage, and access throughout the data lifecycle.',
                    ],
                    toolsText: 'Tools & technologies that I have used in this project:',
                    tools: [
                        'Web crawlers and scrapers: Python (frameworks and libraries used: Scrapy, httpx, & more).',
                        'Data: pydantic and NumPy ecosystem (NumPy, pandas, dask), MongoDB, AWS glue & others.',
                        'Storage: Amazon S3, MySQL, MongoDB.',
                        'Quick analysis and Visualization: Microsoft Power BI, Microsoft Excel.',
                    ],
                },
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
                    pointsText: 'Responsibilities that I have undertaken in this role:',
                    points: [
                        'Development of multiple microservices focused on providing comprehensive data analytics and geospatial analysis solutions on large volumes of real estate information.',
                        'Developed charting framework, leveraging Python, MongoDB, and Redis, with D3.js frontend.',
                        'Streamlined generalized data validation across teams by leveraging pydantic-based modules and MongoDB schema validation, resulting in improved data quality and productivity gains.',
                        'Designed and deployed scalable and highly available backend systems on AWS provisioned with Terraform, incorporating ELK stack for logging & monitoring, GitHub Actions for CI/CD, and optimizing database performance with AWS RDS read replicas and RDS proxy.',
                    ],
                    toolsText: 'Tools & technologies that I have used in this project:',
                    tools: [
                        'Backend: Python (frameworks used: flask, fastapi).',
                        'Data analysis: Leveraging database functions, NumPy ecosystem (NumPy, pandas, dask).',
                        'Validation works: pydantic-based public & in-house private packages.',
                        'Databases: MongoDB (semi-structured), MySQL (structured), Redis (cache & message broker).',
                        'Infrastructure: AWS & Elastic cloud services, Terraform, automated testing with pytest as part of GitHub Actions CI/CD pipeline.',
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
            pointsText: 'Responsibilities that I have undertaken in this role:',
            points: [
                'Built the frontend of the company website using Svelte.',
                'Get familiar with web server technologies and deployment of websites and databases in the cloud.',
            ],
            projectsText: 'Project that I have worked on while in this role:',
            projects: [
                {
                    icon: '/icons/work.svg',
                    name: 'Building a static website',
                    subheader: 'PropCloud AS',
                    metadata: [
                        {
                            icon: '/icons/duration.svg',
                            text: 'Sep 2019 - Nov 2019',
                        },
                        {
                            icon: '/icons/objective.svg',
                            text: 'Build & design the frontend components of the company website using Svelte following the UI design provided.',
                        },
                    ],
                    pointsText: 'Focal points worked on in this project as an intern:',
                    points: [
                        'Familiarize myself with Vanilla JavaScript and Svelte along with its ecosystem and development principles.',
                        'Understanding the benefits of building small reusable components and build the frontend components of the company website.',
                        'Getting to know application development lifecycle and deployment of websites and databases in the cloud.',
                    ],
                },
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
            pointsText: 'Some highlights during my time at Yangzhou University:',
            points: [
                'Graduated with a CGPA of 4.4 out of 5.0 (scored 93.7%).',
                'Multiple awards for academic excellence.',
                'Dissertation on the intricacies of full-text search engines and recommender systems.',
                'Built multifaceted drone equipped with telemetry, 3D photography, and more.',
            ],
            projectsText: 'Project that I have worked on during my undergraduate studies:',
            projects: [
                {
                    icon: '/icons/academic.svg',
                    name: 'Search Engine & Recommender System',
                    metadata: [
                        {
                            icon: '/icons/duration.svg',
                            text: 'Sep 2020 - May 2021',
                        },
                        {
                            icon: '/icons/objective.svg',
                            text: 'Design and implement a search engine and recommender system as well as explore page ranking algorithms and their applications in search engines.',
                        },
                    ],
                    pointsText: 'Targeted learning outcomes from this project:',
                    points: [
                        'Explore software engineering driving search engines, including the various components and their functions, as well as the usage of page ranking algorithms in search engines.',
                        'Learn about diffrent types of machine learning models and recommender systems and their applications in a search engine.',
                        'Learn to build web crawlers and scrapers to collect data from the web and build a search engine with the collected data.',
                        'Learn to build pipelines for data collection, cleaning & sanitizing, and also to index the data as needed by different page ranking algorithms.',
                    ],
                },
                {
                    icon: '/icons/academic.svg',
                    name: 'Web Application Development',
                    metadata: [
                        {
                            icon: '/icons/duration.svg',
                            text: 'Jun 2020 - Aug 2020',
                        },
                        {
                            icon: '/icons/objective.svg',
                            text: 'Design and implement a university management system using C# and ASP.NET MVC framework.',
                        },
                    ],
                    pointsText: 'Targeted learning outcomes from this project:',
                    points: [
                        'Learn to build dynamic web applications with role-based access control (RBAC)  and the MVC architecture using C# and ASP.NET MVC framework.',
                        'Learn about strengths of Web Assembly and its applications in web development using C# and its interoperability with JavaScript.',
                        'Learn to design and optimize a complete system for a web application, including the database, backend, caching layers, SSR, and more.',
                    ],
                },
                {
                    icon: '/icons/academic.svg',
                    name: 'Drone Construction & Design',
                    metadata: [
                        {
                            icon: '/icons/duration.svg',
                            text: 'Mar 2019 - Jun 2019',
                        },
                        {
                            icon: '/icons/objective.svg',
                            text: 'Design & build a multifaceted hexcopter with telemetry, 3D photography, and more.',
                        },
                    ],
                    pointsText: 'Targeted learning outcomes from this project:',
                    points: [
                        'Learn basics of drone construction and design, including the various components and their functions, as well as the intricacies of drone flight control.',
                        'Learn basics of IoT to provide the necessary telemetry and control the drone.',
                        'Collaborate with team members from different departments to ensure a holistic approach to the project and learn to work in a team environment as well as create a shared learning buffer across departments.',
                        'Explore the various applications of drones in different industries and learn to deal with trade-offs between different design choices.',
                    ],
                },
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
            pointsText: 'Principal focus areas of this project:',
            points: [
                'Learn to implement a microservices architecture for the e-commerce platform, enhancing scalability and maintainability.',
                'Targeted for learning to use various programming languages (Python, Go, NodeJS) to build different services, contributing to a versatile and adaptable system.',
                'Divresify databases and storage solutions in order to learn configuration and optimization as well as comparison among databases of different orientation.',
                'Learn to configure docker containers, ensuring consistency across development, testing, and production environments and securing services via access control using docker networks.',
                'Learn to configure comprehensive logging and monitoring mechanisms with elastic stack and APM server to provide real-time insights into system performance and facilitate proactive issue detection.',
                'Designed the platform with scalability in mind, allowing it for easy migration to leverage Kubernetes instead of docker compose.',
            ],
            toolsText: 'Tools & technologies that I have used in this project:',
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
            pointsText: 'Principal focus areas of this project:',
            points: [
                'A write-intensive fastapi service that will accept event data sent by other systems and provide an HTTP endpoint for querying recorded event data by field values.',
                'Celery app which polls for events pushed in a Redis queue and pushes the processed data to InfluxDB bucket.',
                'A typer CLI application which allows easy management of the API along with all its resources.',
                'Containerized databases managed via docker compose and persistent volumes.',
            ],
            toolsText: 'Tools & technologies that I have used in this project:',
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
            pointsText: 'Principal focus areas of this project:',
            points: [
                'Scrapy web crawler with automated data preprocessing & validation, ETL (Extract Transform Load), and data modeling workloads.',
                'Versioning system (for preprocessed & final reports along with other important things like logs for monitoring purposes and scraping session statistics).',
                'Fully automated reporting tools (email session reports with KPIs) and visualization (provide visualization about KPIs and insights about scraping session performance).',
                'typer CLI application to provide central management of all the features.',
            ],
            toolsText: 'Tools & technologies that I have used in this project:',
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

export const volunteerStore = readable({
    events: [
        {
            icon: '/icons/volunteer.svg',
            name: 'IELTS Instructor',
            subheader: 'Changchun Kindergarten',
            metadata: [
                {
                    icon: '/icons/location.svg',
                    text: 'Yangzhou, Jiangsu, China',
                },
                {
                    icon: '/icons/duration.svg',
                    text: 'Nov 2019 - Jan 2021',
                },
            ],
            pointsText: 'Responsibilities that I have undertaken in this role:',
            points: [
                'Tutored Chinese high school and college students in IELTS preparation for studying abroad.',
                'Conducted both online and offline classes to provide flexible learning options for students.',
                "Developed customized lesson plans based on students' proficiency levels and learning needs and provided regular feedback and constructive criticism.",
            ],
        },
        {
            icon: '/icons/volunteer.svg',
            name: 'ESL Teacher',
            subheader: 'Changchun Kindergarten',
            metadata: [
                {
                    icon: '/icons/location.svg',
                    text: 'Yangzhou, Jiangsu, China',
                },
                {
                    icon: '/icons/duration.svg',
                    text: 'Sep 2019 - Jan 2020',
                },
            ],
            pointsText: 'Responsibilities that I have undertaken in this role:',
            points: [
                'Volunteered to teach English to children aged 3-6 years.',
                'Fostered a positive and engaging learning environment by incorporating games, rhymes, and interactive activities to encourage active participation and interest in learning.',
            ],
        },
    ],
});

export const awardsStore = readable({
    events: [
        {
            icon: '/icons/awards.svg',
            name: 'Academic Scholarship',
            subheader: 'Yangzhou University',
            metadata: [
                {
                    icon: '/icons/location.svg',
                    text: 'Yangzhou, Jiangsu, China',
                },
            ],
            pointsText: 'Scholarships that I have received during my time at Yangzhou University:',
            points: [
                'Jiangsu Provincial Government Scholarship for Academic Excellence (academic year 2019-20).',
                'Jiangsu Provincial Government Scholarship for Academic Excellence (academic year 2020-21).',
            ],
        },
        {
            icon: '/icons/certification.svg',
            name: 'Business Analyst Track Certificate',
            subheader: '365 Data Science',
            metadata: [
                {
                    icon: '/icons/reference.svg',
                    text: 'https://learn.365datascience.com/certificates/DD-89BB29CA1B/',
                },
                {
                    icon: '/icons/duration.svg',
                    text: 'Apr 2022 - Mar 2023',
                },
            ],
            pointsText: 'Courses that I have completed in this track:',
            points: [
                'Consists of Courses like Data Science Basics, Data Literacy, Data Strategy, Microsoft Excel Basic & Advanced courses, Statistics, Data Visualization, and more.',
            ],
        },
        {
            icon: '/icons/certification.svg',
            name: 'Data Analyst Track Certificate',
            subheader: '365 Data Science',
            metadata: [
                {
                    icon: '/icons/reference.svg',
                    text: 'https://learn.365datascience.com/certificates/DD-01E8992114/',
                },
                {
                    icon: '/icons/duration.svg',
                    text: 'Apr 2022 - Mar 2023',
                },
            ],
            pointsText: 'Courses that I have completed in this track:',
            points: [
                'Consists of Courses like Data Science Basics, Microsoft Excel Basic & Advanced courses, Statistics, Data Visualization, SQL, Python, NumPy, pandas, and more.',
            ],
        },
        {
            icon: '/icons/certification.svg',
            name: 'Data Scientist Track Certificate',
            subheader: '365 Data Science',
            metadata: [
                {
                    icon: '/icons/reference.svg',
                    text: 'https://learn.365datascience.com/certificates/DD-C6129672EF/',
                },
                {
                    icon: '/icons/duration.svg',
                    text: 'Apr 2022 - Mar 2023',
                },
            ],
            pointsText: 'Courses that I have completed in this track:',
            points: [
                'Consists of Courses like Data Science Basics, Mathematics, Statistics, Probability, Data Visualization, SQL, Python, Machine learning & Deep learning in Python, and more.',
            ],
        },
        {
            icon: '/icons/certification.svg',
            name: 'IELTS Academic',
            subheader: 'British Council',
            metadata: [
                {
                    icon: '/icons/reference.svg',
                    text: 'https://learn.365datascience.com/certificates/DD-C6129672EF/',
                },
                {
                    icon: '/icons/duration.svg',
                    text: 'Dec 2021',
                },
            ],
            pointsText: 'Score distribution at my IELTS Academic exam:',
            points: [
                'Overall score 8.0 (Listening: 8.0, Reading: 8.5, Writing: 6.5, Speaking: 8.5)',
            ],
        },
        {
            icon: '/icons/certification.svg',
            name: 'HSK4',
            subheader: 'Confucius Institute Headquarters (Hanban)',
            metadata: [
                {
                    icon: '/icons/reference.svg',
                    text: 'https://learn.365datascience.com/certificates/DD-C6129672EF/',
                },
                {
                    icon: '/icons/duration.svg',
                    text: 'Dec 2019',
                },
            ],
            pointsText: 'Score distribution at my HSK4 test:',
            points: [
                'Scored 264 out of 300 (Listening: 90 out of 100, Reading: 90 out of 100, Writing: 84 out of 100)',
            ],
        },
    ],
});
