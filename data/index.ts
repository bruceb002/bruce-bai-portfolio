export const DATA = {
  home: {
    hero: {
      name: "Bruce Bai",
      title: "Software Engineer",
      subtitle:
        "Building scalable systems and engaging full-stack web experiences.",
    },
    skills: {
      sectionTitle: "Skills & Expertise",
      sectionDescription:
        "Specialized in backend architecture, frontend development, and systems migration.",
      overview: [
        {
          name: "Backend Development",
          level: 95,
          icon: "lucide:server",
          color: "primary",
        },
        {
          name: "Frontend Development",
          level: 90,
          icon: "lucide:code",
          color: "secondary",
        },
        {
          name: "Systems Optimization",
          level: 85,
          icon: "lucide:database",
          color: "success",
        },
        {
          name: "Data Management",
          level: 88,
          icon: "lucide:bar-chart",
          color: "warning",
        },
      ],
    },
  },
  about: {
    profile: {
      name: "Bruce Bai",
      title: "Software Engineer & CS Graduate Student",
      image: "/bruce-profile.jpg",
      description: [
        "I'm a software engineer passionate about tackling complex full-stack challenges, from optimizing database queries to architecting responsive web interfaces.",
        "Currently completing my Master's at USC, I've spent my career interning across the tech and finance sectors, migrating legacy systems, building C++ Proof of Concepts, and tracing request flows to cut load times from minutes to milliseconds.",
        "Outside of code, I'm an active tenor in a university acapella group, where I arrange music mashups and perform.",
      ],
    },
    education: [
      {
        title: "University of Southern California",
        date: "Expected Dec 2026",
        icon: "mdi:school",
        description:
          "M.S. in Computer Science. Coursework includes Artificial Intelligence, Machine Learning, Database Systems, and Analysis of Algorithms.",
      },
      {
        title: "University of California Santa Cruz",
        date: "Sept 2020 - June 2024",
        icon: "mdi:school-outline",
        description:
          "B.S. in Computer Science, Cum Laude (GPA: 3.83). Coursework focused on Distributed Systems, Computer Systems Design, and Computer Networking.",
      },
    ],
    experience: [
      {
        title: "Software Engineering Intern | Medtronic",
        date: "June 2026 - Aug 2026",
        icon: "mdi:briefcase",
        description:
          "Developed a C++ GUI Proof of Concept to migrate embedded Linux from Chromium to WebKitGTK. Architected a simulated debug port framework using backend C++ Crow APIs and automated Playwright frontend actions.",
      },
      {
        title: "Software Engineering Intern | Olympiah Startup",
        date: "June 2025 - Aug 2025",
        icon: "mdi:briefcase",
        description:
          "Diagnosed a homepage bottleneck across React, Node.js, and MongoDB, reducing load times to sub-second performance. Refactored REST APIs from Next.js routes to Express.",
      },
      {
        title: "Software Engineering Intern | Best Egg Financial Services",
        date: "June 2023 - Sept 2023",
        icon: "mdi:code-tags",
        description:
          "Integrated a chatbot UI widget using Angular and TypeScript. Prevented frontend regressions by authoring Karma unit tests and merged verified features via Git pull requests.",
      },
      {
        title: "Financial Technology Intern | Marlette Funding LLC",
        date: "June 2022 - Sept 2022",
        icon: "mdi:database",
        description:
          "Cut forecasting runtimes from 12+ hours to 25 minutes by migrating a legacy SAS workflow to optimized SQL pipelines and tuning relational database query performance.",
      },
    ],
    technologies: {
      frontend: {
        description:
          "Building dynamic, responsive user interfaces using modern JavaScript frameworks.",
        tools: [
          { name: "React", icon: "logos:react" },
          { name: "Angular", icon: "logos:angular-icon" },
          { name: "Vue", icon: "logos:vue" },
          { name: "TypeScript", icon: "logos:typescript-icon" },
          { name: "Tailwind", icon: "logos:tailwindcss-icon" },
        ],
      },
      backend: {
        description:
          "Architecting robust APIs, managing data, and optimizing server performance.",
        tools: [
          { name: "C++", icon: "logos:c-plusplus" },
          { name: "Python", icon: "logos:python" },
          { name: "Node.js", icon: "logos:nodejs-icon" },
          { name: "Express", icon: "simple-icons:express" },
          { name: "SQL", icon: "logos:mysql-icon" },
          { name: "MongoDB", icon: "logos:mongodb-icon" },
        ],
      },
      tools: {
        description:
          "Leveraging industry-standard tools for version control, testing, and deployment.",
        tools: [
          { name: "Git", icon: "logos:git-icon" },
          { name: "Docker", icon: "logos:docker-icon" },
          { name: "Postman", icon: "logos:postman-icon" },
          { name: "GitHub Actions", icon: "logos:github-actions" },
        ],
      },
    },
  },
  projects: {
    sectionTitle: "Featured Projects",
    sectionDescription:
      "A selection of my academic and hackathon projects showcasing full-stack development and algorithmic optimization.",
    work: [
      {
        id: 1,
        title: "Floorplan Processing Optimization",
        description:
          "Parsed deeply nested JSON spatial datasets to isolate layout attributes and identify root-cause rendering failures.",
        image: "/grad-project-thumb.png", // <--- Updated!
        gallery: [],
        category: "Graduate Project",
        details:
          "Navigated complex multi-index schemas to extract core geometric inputs. Stress-tested TSP variants and evaluated Dynamic Programming and Simulated Annealing paradigms to pinpoint a failure in legacy wall-merging coordinate tracking.",
        github: "https://github.com/bruceb002",
        tech: [
          { name: "Python", icon: "logos:python" },
          { name: "Algorithms", icon: "lucide:git-merge" },
        ],
      },
      {
        id: 2,
        title: "Blackboard Mobile App",
        description:
          "Mobile application for academic schedules and dynamic class registration flows.",
        image: "/capstone-thumb.jpeg", // <--- Updated!
        gallery: [],
        category: "Capstone",
        details:
          "Developed core screens and custom UI components via Expo Go. Integrated Cloud Firestore and Firebase Cloud Storage to model NoSQL schemas and securely map user profile media uploads. Led the team through Agile sprints using Jira.",
        github: "https://github.com/bruceb002",
        tech: [
          { name: "React Native", icon: "logos:react" },
          { name: "Firebase", icon: "logos:firebase" },
          { name: "Expo", icon: "simple-icons:expo" },
        ],
      },
      {
        id: 3,
        title: "JBS Rideshare Web Application",
        description:
          "First Place winner at the 2023 ACM Hackathon. Transit landing view mapped to asynchronous driver data.",
        image: "/hackathon-thumb.png", // <--- Updated!
        gallery: [],
        category: "Hackathon",
        details:
          "Engineered a Vue.js transit landing view, integrating Firebase APIs to map asynchronous driver data into structured UI blocks under strict time constraints.",
        github: "https://github.com/bruceb002",
        tech: [
          { name: "Vue.js", icon: "logos:vue" },
          { name: "Firebase", icon: "logos:firebase" },
        ],
      },
    ],
  },
  contact: {
    heading:
      "Looking for a driven software engineer? Let's connect.",
    location: {
      address: "Los Angeles, CA",
    },
  },
  morphingTexts: {
    about: ["Software Engineer", "Full-Stack", "Problem Solver"] as const,
    projects: ["My Work", "Projects", "Hackathons", "Architecture"] as const,
    contact: ["Let's", "Build", "Together"] as const,
  },
  navigation: [
    { name: "Home", href: "/", icon: "lucide:home" },
    { name: "About", href: "/about", icon: "lucide:user" },
    { name: "Projects", href: "/projects", icon: "lucide:folder-code" },
    { name: "Contact", href: "/contact", icon: "lucide:send" },
  ],
  footer: {
    name: "Bruce Bai",
    description: "Software Engineer",
    contact: {
      email: "brucebai002@gmail.com",
      phone: "(510) 409-5811",
      location: "Fremont, CA", 
    },
    socialLinks: [
      { platform: "GitHub", url: "https://github.com/bruceb002", icon: "mdi:github" },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/bruce-bai/",
        icon: "mdi:linkedin",
      },
    ],
    services: ["Software Engineering", "Full-Stack Development", "Systems Optimization"],
  },
} as const;