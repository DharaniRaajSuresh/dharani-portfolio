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
  tagline: 'Architecting Scalable Dual-Backend AI Systems & Low-Latency Multilingual Platforms',
  email: 'dharanisuresh307@gmail.com',
  phone: '+91 9042503337',
  location: 'Chennai, Tamil Nadu, India',
  education: {
    institution: 'Vellore Institute of Technology (VIT), Chennai',
    degree: 'Bachelor of Technology in Computer Science',
    cgpa: '8.35',
    graduationYear: 'Expected May 2028',
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
  { label: 'REST APIs Architected', value: '35+', detail: 'Spring Boot 3.4 & FastAPI' },
  { label: 'ML Models Deployed', value: '9 Models', detail: 'XGBoost / GBR in Production' },
  { label: 'VIT Chennai CGPA', value: '8.35', detail: 'B.Tech Computer Science' },
  { label: 'MAPE Error Reduction', value: '42× Down', detail: '414% → 9.8% in Healthcare AI' },
];

export const WORK_EXPERIENCE = [
  {
    role: 'Software Engineer Intern',
    company: 'HCLTech',
    location: 'Chennai, India',
    period: 'May 2026 – Jul 2026',
    githubRepo: 'https://github.com/DharaniRaajSuresh/HospitalIQ',
    highlights: [
      'Architected a scalable healthcare AI platform using Spring Boot 3.4 + FastAPI dual-backend microservice architecture — serving 35 REST APIs across 15 database tables, deploying 9 machine learning models on 1.64M records across 30 Indian states.',
      'Containerized the full stack via Docker Compose (4 services) with CI/CD pipelines using GitHub Actions; built React 19/TypeScript frontend with Agile SDLC delivering 0 TypeScript errors across 14 pages.',
      'Implemented patient microservice with JPA/Hibernate (5 entities), layered architecture, secure JWT (HS256 + bcrypt + httpOnly) for cybersecurity, and 3-tier testing — 91 tests (62 Python + 29 Java) at 100% pass rate.',
      'Diagnosed 414% MAPE due to data leakage in forecast pipeline; replaced Ridge regression with tuned XGBoost using chronological train/test splits, reducing error 42× to 9.8%.',
      'Optimized frontend performance with stale-while-revalidate caching (5-min TTL) and Vite code-splitting into 32 chunks (5 vendor groups), reducing Lighthouse load times by ~60%.',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'hospitaliq',
    title: 'HospitalIQ',
    tagline: 'Enterprise Healthcare AI & Pandemic Prediction Engine',
    category: 'AI & ML',
    period: 'May 2026 – Jul 2026',
    githubUrl: 'https://github.com/DharaniRaajSuresh/HospitalIQ',
    liveUrl: 'https://github.com/DharaniRaajSuresh/HospitalIQ',
    featured: true,
    metrics: ['9 ML Models', '35 REST APIs', '1.64M Patient Records', '0 TS Errors'],
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
      'Dual-backend microservice platform predicting hospital bed availability, mortality risk, and pandemic R0 trajectories across 30 Indian states.',
      'Engineered an XGBoost-based ScenarioPredictor and R0Predictor with 9.8% MAPE, replacing legacy Ridge regression models.',
      'Full CI/CD integration with Docker Compose (4 services) and 91 automated tests passing at 100%.',
    ],
    architecture: {
      frontend: 'React 19 + TypeScript + Tailwind CSS with custom Glassmorphism UI & Vite code splitting',
      backend: 'Spring Boot 3.4 (Patient Microservice) + FastAPI (ML Inference & Epidemiology Engine)',
      database: 'PostgreSQL + JPA/Hibernate with 15 normalized tables',
      aiOrCore: '9 supervised ML models (XGBoost, GBR, Random Forest) trained on 1.64M records',
    },
  },
  {
    id: 'ai-scam-shield',
    title: 'AI Scam Shield',
    tagline: 'Real-Time Multilingual Audio Fraud Detection Platform',
    category: 'AI & ML',
    period: 'Jan 2026 – Feb 2026',
    githubUrl: 'https://github.com/DharaniRaajSuresh/realtimeScamfinal',
    featured: true,
    metrics: ['Sub-Second Latency', '500+ Concurrent Websockets', '5 Scam Taxonomies', 'English / Tamil'],
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
      'Engineered a low-latency real-time scam detection system using deep learning STT to transcribe and analyze live multilingual (English/Tamil) calls with sub-second latency.',
      'Built async FastAPI + WebSocket backend handling 500+ concurrent connections with real-time NLP risk scoring.',
      'Developed interactive geospatial dashboards for visualizing fraud hotspots and alert trends in real time.',
    ],
    architecture: {
      frontend: 'React + WebSockets with live call transcript feed & risk indicator dials',
      backend: 'Async FastAPI + WebSocket server handling high-throughput concurrent streams',
      database: 'Redis / In-Memory Session Store for instant risk score aggregation',
      aiOrCore: 'Multilingual speech-to-text (STT) + NLP classifier identifying 5 distinct scam patterns',
    },
  },
  {
    id: 'ather',
    title: 'ATHER (GreenRouting)',
    tagline: 'Urban CO₂ Digital Twin & 3D Atmospheric Simulation Platform',
    category: '3D & Systems',
    period: 'Feb 2026 – Mar 2026',
    githubUrl: 'https://github.com/DharaniRaajSuresh/GreenRouting',
    featured: true,
    metrics: ['5+ Real-Time APIs', 'CesiumJS 3D Globe', 'Google Gemini GenAI', 'Multi-Layer Cache'],
    techStack: [
      'React',
      'TypeScript',
      'Node.js',
      'CesiumJS',
      'Google Gemini AI',
      'Open-Meteo',
      'TomTom API',
    ],
    description: [
      'Developed an urban CO₂ digital twin platform fusing real-time data from 5+ APIs (Open-Meteo, TomTom, Mapbox, OSM) with Google Gemini GenAI for predictive AQI forecasting.',
      'Engineered interactive 3D city visualizations using CesiumJS with custom particle systems and physics-based CO₂ reduction modeling.',
      'Constructed Node.js/Express backend with multi-layer caching, intelligent API batching, and structured Gemini AI output parsing.',
    ],
    architecture: {
      frontend: 'React + TypeScript with CesiumJS 3D rendering and physics particle systems',
      backend: 'Node.js + Express with intelligent request batching & multi-layer caching',
      database: 'Geospatial cache & time-series AQI logs',
      aiOrCore: 'Google Gemini GenAI prompt pipeline for real-time urban policy recommendation',
    },
  },
  {
    id: 'healthcare-ms',
    title: 'Healthcare Management System',
    tagline: 'Role-Based Hospital Portal with Real-Time Medical WebSockets',
    category: 'Full-Stack',
    period: 'Mar 2026 – Apr 2026',
    githubUrl: 'https://github.com/DharaniRaajSuresh',
    featured: false,
    metrics: ['3 Role Dashboards', '15+ REST APIs', 'PostgreSQL RBAC', 'WebSocket Sync'],
    techStack: [
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'WebSockets',
      'JWT Auth',
      'RBAC Security',
    ],
    description: [
      'Architected a full-stack platform with role-based dashboards (patient/doctor/admin), JWT auth, and RBAC — 15+ REST APIs for appointments, medical records, and product orders.',
      'Implemented real-time chat, data sync, and step-count tracking via WebSockets and browser sensor APIs.',
    ],
    architecture: {
      frontend: 'Next.js 14 + TypeScript with responsive RBAC layouts',
      backend: 'Node.js API routes with JWT authentication & role authorization middleware',
      database: 'PostgreSQL relational database with foreign key constraints and audit logs',
      aiOrCore: 'Real-time WebSocket event broadcaster for chat and sensor telemetry',
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
      { name: 'C++', proficiency: 85, badge: 'Algorithms' },
      { name: 'JavaScript', proficiency: 90, badge: 'ES2023+' },
      { name: 'SQL', proficiency: 90, badge: 'Relational DBMS' },
    ],
  },
  {
    category: 'Backend & Machine Learning',
    skills: [
      { name: 'Spring Boot 3.4', proficiency: 95, badge: 'Enterprise Java' },
      { name: 'FastAPI', proficiency: 95, badge: 'Async Python' },
      { name: 'XGBoost & scikit-learn', proficiency: 90, badge: 'Predictive ML' },
      { name: 'Spring Security & JWT', proficiency: 90, badge: 'Cybersecurity' },
      { name: 'JPA & Hibernate', proficiency: 88, badge: 'ORM' },
      { name: 'Node.js & Express', proficiency: 85, badge: 'Event Loop' },
    ],
  },
  {
    category: 'Frontend & 3D Visuals',
    skills: [
      { name: 'React 19', proficiency: 95, badge: 'Hooks & Suspense' },
      { name: 'Next.js', proficiency: 88, badge: 'App Router' },
      { name: 'Tailwind CSS / Glass UI', proficiency: 95, badge: 'Modern Design' },
      { name: 'CesiumJS', proficiency: 80, badge: '3D Globe Viz' },
      { name: 'Vite & Build Opt.', proficiency: 90, badge: 'Code Splitting' },
    ],
  },
  {
    category: 'DevOps, Cloud & Architecture',
    skills: [
      { name: 'Docker & Compose', proficiency: 90, badge: 'Containerization' },
      { name: 'PostgreSQL', proficiency: 92, badge: '15+ Tables' },
      { name: 'WebSockets & RTC', proficiency: 88, badge: 'Real-Time' },
      { name: 'GitHub Actions CI/CD', proficiency: 85, badge: 'Automated Build' },
      { name: 'Microservices', proficiency: 90, badge: 'Dual Backend' },
    ],
  },
];
