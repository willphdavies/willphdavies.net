import { IExperienceModel } from "./entity";

export const experienceItems: IExperienceModel[] = [
  {
    company: "Cigna / Evernorth",
    role: "Senior / Lead Software Engineer",
    description: `Lead for a Multi Branded Developer Portal 
Lead for a Multi Branded Developer Portal 
* Consolidated 3 separate branded developer portals into 1 single codebase
* Implemented Multi Factor Authentication using Okta Identity Engine
* Simplified Internal/External API Authentication onboarding to enable developers to easily, yet securely, access health data - reducing lead times from weeks to minutes
* Improved developer time to production by moving backend to AWS Lambdas with NodeJS / Typescript framework backed by AWS hosted Postgres DB 
* Established frontend patterns in React/Typescript significantly improving UI/UX and greatly improving reusability of code to allow for faster development
* Improved deploy pipelines using Terraform, Gitlab, Github and Jenkins to reduce deploy time and increase infrastructure reliability
* Lead a team of 4 devs + 3 SDETs, mentoring junior developers and contributing to product development
* Optimized performance on the frontend using local caching (Redux Toolkit)
* Optimized performance on the backend by consolidating endpoints into AWS Lambda - 20s -> 1s load times
`,
    image: "cigna.png",
    link: "https://www.cigna.com/",
    start: new Date(2021, 11, 13),
    end: null,
    tags: [
      "React",
      "NestJS",
      "Terraform",
      "Okta",
      "OAuth2.0",
      "AWS",
      "Serverless",
      "Typescript",
      "Postgres",
      "Rest Api",
      "Javascript",
      "Material Design",
      "React",
      "NX Monorepo",
      "Swagger",
      "Cypress",
    ],
  },
  {
    company: "Lytics",
    role: "Senior Javascript Developer",
    description: `AI based Customer Data Platform - data analytics / targeted advertising
* Modernized Ember frontend to React leveraging caching to increase performance and MUI UI library to improve UX
* Implemented a modular approach to modernization using separate routes to deploy newly modernized parts of the application via Google Cloud 
* Implemented sitewide accessibility standards in < 1 month to win a contact with the Canadian Govt
* Identified performance issues in the GoLang REST API
* Administered Google Cloud CI/CD
`,
    image: "lytics.jpeg",
    start: new Date(2021, 4, 1),
    end: new Date(2021, 11, 3),
    link: "https://www.lytics.com",
    tags: [
      "GoLang",
      "Google Cloud",
      "EmberJS",
      "Javascript",
      "HTML5",
      "CSS3",
      "Material Design",
      "React",
      "Rest Api",
      "JQuery",
      "Typescript",
      "Webpack",
    ],
  },
  {
    company: "Smarsh",
    role: "Lead / Senior Javascript Developer",
    description: `Multi tenant archiving platform - 
* Improved UI/UX by modernizing stack to a single page app from older RAZR based framework
* Separated frontend and backend development using mock data to allow frontend and backend features to be worked on independently
* Improved the CI/CD deploy pipeline using Travis and deploying to AWS S3 / Cloudfront
* Improved backend API structure to follow REST Standards resulting in predictable patterns and easier development
`,
    link: "https://www.smarsh.com",
    image: "smarsh.png",
    start: new Date(2018, 1, 1),
    end: new Date(2021, 3, 31),
    tags: [
      "AWS",
      "VueJS",
      "Javascript",
      ".net",
      "Swagger",
      "HTML5",
      "CSS3",
      "Webpack",
      "CI/CD",
      "REST Api",
      "JQuery",
      "Vuetify",
      "Material Design",
      "Typescript",
    ],
  },
  {
    company: "EleosHub",
    role: "Co-Founder / Developer",
    description: `Startup - Social Media platform for connecting patients with chronic illness
* React / Typescript frontend
* NodeJS / ExpressJS backend with MongoDB (via Atlas)
* AWS Cloudfront / S3 / EC2
* AWSCodeDeploy CI/CD
* Product concept / development / marketing`,
    link: "https://www.eleoshub.com/",
    image: "eleoshub.png",
    start: new Date(2018, 1, 1),
    end: new Date(2021, 4, 1),
    tags: [
      "React",
      "Material Design",
      "HTML5",
      "CSS3",
      "Typescript",
      "AWS",
      "Wordpress",
      "Git",
    ],
  },
  {
    company: "Solid Digital",
    role: "Full Stack Developer",
    description: `Development agency centered around Javascript (NodeJS + Frontend).
* AWS Stack - EC2.
* Multiple projects, for startups (Mongo / NodeJS), ecommerce (Magento / WooCommerce), salesforce and third party system integrations (Etsy, Facebook, Google). 
* Front-end integration using VueJS.
* Communicate technical aspects of contracted work with clients, maintain test documentation, manage resourcing for multiple projects.
* Mentor team members / interns in new web technologies and best practices.`,
    link: "https://www.soliddigital.com/",
    image: "soliddigital.jpeg",
    start: new Date(2016, 2, 1),
    end: new Date(2018, 0, 31),
    tags: [
      "NodeJS",
      "VueJS",
      "NestJS",
      "AWS",
      "CI/CD",
      "Magento",
      "Etsy API",
      "Wordpress",
      "Stripe Integration",
      "HTML5",
      "CSS3",
      "REST Api",
      "SEO",
      "Git",
    ],
  },
  {
    company: "Zoomcare",
    role: "Full Stack Developer",
    description: `Startup Urgent Health
      * Migrating the zoomcare.com from Drupal to a MEAN stack with a JAVA backend.
* Modernizing the stack development tools to include NodeJS/Jade template engine, AngularJS (with Karma/Jasmine unit testing), Bootstrap, SASS.
* Optimizing the site for page speed - image resizing, css/js combination / minification
* Deploying metrics for performance/conversion via Google Analytics / NewRelic
* Automated deployment tasks via bash scripting / grunt
* REST API design
* Code review / QA / Agile methodology`,
    link: "https://www.zoomcare.com",
    image: "zoomcare.png",
    start: new Date(2014, 10, 1),
    end: new Date(2016, 2, 1),
    tags: [
      "AngularJS",
      "HTML5",
      "CSS3",
      "Drupal",
      "REST Api",
      "Page Speed Analysis",
      "Git",
      "AWS",
    ],
  },
  {
    company: "Highlight City",
    role: "Full Stack Developer",
    description:
      "Working remotely for a start-up company based in Barcelona creating a social media ticket sales and event promotion management platform for the various clubs in and around Barcelona and the Balearic Isles.  Project was started by a number of developers with little experience, hence it was necessary to redesign the entire framework (recycling as much of the code as possible), implement a mercurial based version control / release system.  Application requires a slick interface, Google+ / Facebook API integration and multiple user roles and a fine grained ACL.",
    link: "",
    image: "",
    start: new Date(2014, 1, 1),
    end: new Date(2014, 10, 1),
    tags: [
      "JQuery",
      "PHP",
      "Facebook Integration",
      "Google Integration",
      "Mercurial",
      "Responsive Design",
      "HTML5",
      "CSS3",
      "MySQL",
    ],
  },
  {
    company: "Profitable Web Projects",
    role: "Lead Developer",
    description:
      "Lead developer in a number of different projects, responsible for maintaining the quality and structural integrity of the codebase to ensure that it is easily understood by any new developers who begin working on it. Maintaining each version/release of the code via the use of versioning software (Mercurial/SVN) and database comparison tools. Management of junior developers workflow and ensuring that the final product adheres correctly to the intended specification.",
    link: "https://www.linkedin.com/company/profitable-web-projects-sl/",
    image: "pwp.jpeg",
    start: new Date(2011, 6, 1),
    end: new Date(2015, 1, 1),
    tags: [
      "PHP",
      "Joomla",
      "Mercurial",
      "JQuery",
      "JQueryMobile",
      "Responsive Design",
      "Laravel",
      "Bash",
      "MySQL",
    ],
  },
  {
    company: "Grupo Constant",
    role: "Web Developer",
    description:
      "Design and continuing development of a recruitment website www.staffhotel.net. Development and release of 2 different Human Resource Management applications to be integrated directly with the Accounting System. Applications permitted outsourced workers (working for EuropCar, Hertz, Avis and also many large hotels) to log tasks as they were completed, allowing managers and other personnel to directly oversee workers without being onsite.",
    link: "http://www.grupoconstant.com/?lang=en",
    image: "grupoconstant.png",
    start: new Date(2010, 2, 1),
    end: new Date(2011, 6, 1),
    tags: ["PHP", "JQuery", "HTML", "CSS", "SEO", "Apache", "Bash", "MySQL"],
  },
  {
    company: "Profitable Web Projects",
    role: "Applications Developer",
    description:
      "Developing internal and external applications for a Web Marketing company in Microft Office and on the Web. Programmer in PHP, Javascript, VB, SQL, SAS, Unix Platforms",
    link: "https://www.linkedin.com/company/profitable-web-projects-sl/",
    start: new Date(2008, 4, 1),
    end: new Date(2010, 2, 31),
    image: "pwp.jpeg",
    tags: ["MSAccess", "Visual Basic", "PHP", "Javascript", "MySQL"],
  },
  {
    company: "Self Employed",
    role: "English Teacher",
    description:
      "Self-Employed English teacher in Barcelona working primarily with health institutions such as CatSalut and Hospital Vall D’Hebron.  Work also includes training for presentations, interpretation and translation.",
    link: "",
    start: new Date(2006, 3, 1),
    end: new Date(2008, 4, 1),
    image: "tefl.png",
    tags: [
      "Communication",
      "Spanish",
      "Teaching",
      "Presentation",
      "Public Speaking",
    ],
  },
  {
    company: "Equifax",
    role: "Credit Risk Analyst",
    description:
      "Data Extraction, Retrospective Analysis and Credit Scoring. Product Manager of a Customer Identification and Customer Location product (often used for debt recovery). Created a number of automated reporting tools used both internally and externally including a client information database, a client benchmarking reporter and a client report generator for individual analyses all using a combination of SAS Output files, VBA, Word, Excel and Access.",
    link: "https://equifax.co.uk/",
    image: "equifax.png",
    start: new Date(2005, 0, 1),
    end: new Date(2006, 2, 31),
    tags: [
      "MSAccess",
      "SAS",
      "Bash",
      "Visual Basic",
      "MSExcel",
      "MSWord",
      "Report Automation",
      "MSSQL",
    ],
  },
];
