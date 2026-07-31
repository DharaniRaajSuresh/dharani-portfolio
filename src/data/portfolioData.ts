export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'AI & ML' | 'Full-Stack' | '3D & Systems';
  period: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  metrics: string[];
  techStack: string[];
  description: string[];
  architecture: {
    frontend: string;
    backend: string;
    database: string;
    aiOrCore: string;
  };
}

export interface SkillGroup {
  category: string;
  skills: { name: string; proficiency: number; badge: string }[];
}

export const PERSONAL_INFO = {
  name: 'Dharani Raaj Suresh',
  title: 'Full-Stack & Healthcare AI Engineer',
  tagline: 'Architecting Scalable Dual-Backend AI Systems & Financial-Grade Distributed Platforms',
  email: 'dharanisuresh307@gmail.com',
  phone: '+91 9042503337',
  location: 'Chennai, Tamil Nadu, India',
  education: {
    institution: 'Vellore Institute of Technology (VIT), Chennai',
    degree: 'Bachelor of Technology in Computer Science',
    cgpa: '8.35',
    graduationYear: 'Expected May 2028',
  },
  certification: {
    name: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional (1Z0-1127-25)',
    year: '2026',
    verifyUrl: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=563D63A228CF212EC5945EAA54F1D3CFE95DBCC1082273F0184F52B931CB4DE8',
  },
  socials: {
    github: 'https://github.com/DharaniRaajSuresh',
    linkedin: 'https://www.linkedin.com/in/dharani-raaj-s-b55b53323',
    leetcode: 'https://leetcode.com/u/DRJ18/',
    leetcodeHandle: 'DRJ18',
  },
  availability: 'Seeking Fall 2026 / Spring 2027 Software Engineering & AI Internships',
};

export const KPI_STATS = [
  { label: 'REST APIs Architected', value: '36+ APIs', detail: 'Spring Boot 3.4 & FastAPI' },
  { label: 'Automated Test Pass', value: '100% Pass', detail: '119 Tests across Projects' },
  { label: 'VIT Chennai CGPA', value: '8.35', detail: 'B.Tech Computer Science' },
  { label: 'Oracle OCI Certified', value: 'GenAI Pro', detail: '2025 Professional Cert' },
];

export const WORK_EXPERIENCE = [
  {
    role: 'Software Engineer Intern',
    company: 'HCLTech',
    location: 'Chennai, India',
    period: 'May 2026 – July 2026',
    githubRepo: 'https://github.com/DharaniRaajSuresh/HospitalIQ',
    highlights: [
      'Owned a scalable healthcare AI platform end-to-end from design through deployment, architecting a Spring Boot 3.4 + FastAPI dual-backend distributed microservice system serving 36 REST APIs across 15 database tables and deploying 8 ML models + 1 deterministic risk formula on 1.4M records across 30 Indian states and union territories.',
      'Diagnosed 414% MAPE from data leakage in a scenario-prediction model; rebuilt it and a related forecast model with time-series-aware XGBoost using chronological, no-lookahead train/test splits — reducing error to 9.8% MAPE, applying the same backtesting discipline used to validate financial forecasting models.',
      'Containerized the full stack via Docker Compose (4 services) with GitHub Actions CI/CD; validated the system with 92 automated tests (63 Python, 29 Java) at 100% pass rate across a 3-tier testing strategy.',
      'Built a React 19/TypeScript frontend with secure JWT authentication (HS256 + bcrypt + httpOnly), plus in-memory TTL caching and Vite code-splitting across 14 pages to reduce initial load times.',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'techtrove',
    title: 'TechTrove (Rental Management Platform)',
    tagline: 'Production-Grade Financial Rental System with Upstash Redis & Spring Boot',
    category: 'Full-Stack',
    period: 'July 2026 – Present',
    githubUrl: 'https://github.com/DharaniRaajSuresh/TechTrove',
    liveUrl: 'https://ttstts.vercel.app',
    featured: true,
    metrics: ['26 REST Endpoints', '5 DB Tables', '27 JUnit Tests (100% Pass)', 'Financial Security'],
    techStack: [
      'Spring Boot',
      'PostgreSQL',
      'Upstash Redis',
      'Docker Compose',
      'Flyway',
      'JWT Security',
      'GitHub Actions',
      'MapStruct',
    ],
    description: [
      'Independently designed and built a production-grade rental management platform for a family-owned business — 26 REST endpoints and 5 database tables implementing full CRUD lifecycle for customers, items, rentals, and payments.',
      'Implemented rate-limited authentication (20 req/min per IP) with JWT stateless sessions via Spring Security, enforcing HSTS, CSP, and X-Frame-Options for financial-grade security.',
      'Used BigDecimal(10,2) for monetary fields and batch-loaded payment lookups to eliminate N+1 query patterns; containerized via Docker Compose with Flyway migrations and Upstash Redis REST API.',
    ],
    architecture: {
      frontend: 'Vite React application with financial-grade dashboards and responsive layout',
      backend: 'Spring Boot 3 REST API with rate limiting, MapStruct DTO mappers, and stateless JWT',
      database: 'PostgreSQL with Flyway schema migrations + Upstash Redis REST API for low-latency cache',
      aiOrCore: '27 JUnit unit + integration tests passing at 100% across 3 core service classes',
    },
  },
  {
    id: 'hospitaliq',
    title: 'HospitalIQ',
    tagline: 'Enterprise Healthcare AI & Pandemic Epidemiology Engine',
    category: 'AI & ML',
    period: 'May 2026 – July 2026',
    githubUrl: 'https://github.com/DharaniRaajSuresh/HospitalIQ',
    featured: true,
    metrics: ['36 REST APIs', '8 ML + 1 Risk Model', '1.4M Patient Records', '92 Tests (100% Pass)'],
    techStack: [
      'Spring Boot 3.4',
      'FastAPI',
      'React 19',
      'TypeScript',
      'XGBoost',
      'Docker Compose',
      'JPA / Hibernate',
      'PostgreSQL',
    ],
    description: [
      'Dual-backend microservice platform predicting hospital bed availability, mortality risk, and pandemic trajectories across 30 Indian states on 1.4M records.',
      'Diagnosed 414% MAPE from data leakage; rebuilt with time-series-aware XGBoost using chronological train/test splits, reducing error to 9.8% MAPE.',
      'Full CI/CD integration with Docker Compose (4 services) and 92 automated tests (63 Python, 29 Java) at 100% pass rate.',
    ],
    architecture: {
      frontend: 'React 19 + TypeScript with secure JWT (HS256 + bcrypt + httpOnly) & Vite code-splitting',
      backend: 'Spring Boot 3.4 (Patient Microservice) + FastAPI (ML Inference Engine)',
      database: 'PostgreSQL + JPA/Hibernate with 15 normalized tables & MapStruct mappers',
      aiOrCore: '8 ML models (XGBoost, GBR) + 1 deterministic risk formula trained on 1.4M records',
    },
  },
  {
    id: 'ai-scam-shield',
    title: 'AI Scam Shield',
    tagline: 'Real-Time Multilingual Audio Fraud Detection Platform',
    category: 'AI & ML',
    period: 'Aug 2025 – Dec 2025',
    githubUrl: 'https://github.com/DharaniRaajSuresh/realtimeScamfinal',
    featured: true,
    metrics: ['Sub-Second Latency', '500+ Concurrent WebSockets', '5 Scam Taxonomies', 'English / Tamil'],
    techStack: [
      'React',
      'FastAPI',
      'WebSockets',
      'Agora RTC/STT',
      'Deep Learning NLP',
      'AsyncIO',
      'Tailwind CSS',
    ],
    description: [
      'Engineered a low-latency real-time scam detection system leveraging AI speech-to-text (STT) to transcribe and analyze live multilingual (English/Tamil) calls with sub-second latency.',
      'Built a scalable asynchronous FastAPI + WebSocket backend handling 500+ concurrent connections with real-time NLP risk scoring.',
      'Designed interactive geospatial dashboards for visualizing fraud hotspots and alert trends in real time.',
    ],
    architecture: {
      frontend: 'React + WebSockets with live call transcript feed & risk indicator dials',
      backend: 'Async FastAPI + WebSocket server handling high-throughput concurrent audio streams',
      database: 'In-Memory Session Store for instant risk score aggregation',
      aiOrCore: 'Multilingual speech-to-text (STT) + NLP classifier identifying 5 distinct scam patterns',
    },
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Java', proficiency: 95, badge: 'Core & Enterprise' },
      { name: 'Python', proficiency: 95, badge: 'AI & Backend' },
      { name: 'TypeScript', proficiency: 90, badge: 'Strict Typing' },
      { name: 'C++', proficiency: 88, badge: 'Algorithms' },
      { name: 'JavaScript', proficiency: 90, badge: 'ES2023+' },
      { name: 'SQL', proficiency: 92, badge: 'Relational DBMS' },
    ],
  },
  {
    category: 'Enterprise Backend & Security',
    skills: [
      { name: 'Spring Boot 3.4', proficiency: 95, badge: 'Microservices' },
      { name: 'FastAPI', proficiency: 95, badge: 'Async Python' },
      { name: 'Spring Security & JWT', proficiency: 92, badge: 'Financial Grade' },
      { name: 'JPA / Hibernate & MapStruct', proficiency: 90, badge: 'ORM & DTO' },
      { name: 'JUnit & Mockito', proficiency: 92, badge: '100% Pass Tests' },
      { name: 'Express.js & REST APIs', proficiency: 88, badge: 'Web API' },
    ],
  },
  {
    category: 'Machine Learning & Data AI',
    skills: [
      { name: 'XGBoost & scikit-learn', proficiency: 92, badge: 'Time-Series ML' },
      { name: 'Generative AI (Oracle OCI)', proficiency: 95, badge: 'Certified Pro' },
      { name: 'Pandas & NumPy', proficiency: 90, badge: 'Data Wrangling' },
      { name: 'NLP & Speech-to-Text', proficiency: 88, badge: 'Agora RTC/STT' },
      { name: 'Ridge Regression / MAPE Opt', proficiency: 90, badge: 'Data Leakage' },
    ],
  },
  {
    category: 'Databases, Cloud & DevOps',
    skills: [
      { name: 'PostgreSQL & Flyway', proficiency: 92, badge: 'Schema Migrations' },
      { name: 'Upstash Redis', proficiency: 88, badge: 'REST API Cache' },
      { name: 'Docker Compose', proficiency: 90, badge: '4 Microservices' },
      { name: 'GitHub Actions CI/CD', proficiency: 88, badge: 'Automated Pipeline' },
      { name: 'WebSockets & RTC', proficiency: 88, badge: 'Low-Latency' },
    ],
  },
];
