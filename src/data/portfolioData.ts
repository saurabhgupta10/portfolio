export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: 'Full-Stack' | 'AI & Automation' | 'Web Apps';
  description: string;
  technologies: string[];
  keyFeatures: string[];
  problem: string;
  solution: string;
  challenges: string;
  results?: string;
  architecture?: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  isLive: boolean;
  featured: boolean;
  accentColor: string;
  coverImage: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "wedsend",
    title: "WedSend",
    tagline: "Wedding & Event Guest Management Platform",
    category: "Full-Stack",
    description: "A professional wedding and event guest management platform designed to simplify guest management, digital invitation workflows, and bulk event communication.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Fastify",
      "Supabase",
      "PostgreSQL",
      "WhatsApp Cloud API"
    ],
    keyFeatures: [
      "User authentication and protected role workspaces",
      "Comprehensive event creation and schedule planning",
      "Granular guest-list management with RSVP statuses",
      "Automated PDF guest-list extraction and parsing",
      "Campaign management and automated invitation broadcast",
      "Real-time WhatsApp Cloud API messaging integration",
      "Live message delivery and read tracking telemetry",
      "Centralized event overview and dashboard analytics"
    ],
    problem: "Couples and event planners face chaotic coordination across spreadsheets, paper lists, and manual phone contacts, resulting in misplaced RSVPs and high communication overhead.",
    solution: "WedSend unifies the entire guest lifecycle into a single operational hub: automated roster parsing from PDF documents, verified database storage, and instant bulk delivery with confirmation telemetry via WhatsApp Cloud API.",
    challenges: "Handling rate limits and webhooks from Meta's WhatsApp Cloud API while keeping database states in sync under concurrent delivery queues, resolved through Fastify asynchronous task processing.",
    results: "Streamlined guest communication workflow, eliminated manual phone messaging, and delivered real-time RSVP visibility for event organizers.",
    architecture: [
      "Next.js & Tailwind CSS Frontend (Responsive Organizer Portal)",
      "Fastify Microservice (High-throughput API & Webhook Ingestion)",
      "Supabase PostgreSQL (Event records, RSVP telemetry, & Auth)",
      "Meta WhatsApp Cloud API (Automated bulk broadcast & delivery receipts)"
    ],
    githubUrl: "https://github.com/Saurabhgupta10",
    liveDemoUrl: undefined,
    isLive: false,
    featured: true,
    accentColor: "from-rose-500/20 to-orange-500/20",
    coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "autonomous-ai-lead-engine",
    title: "Autonomous AI Lead Engine",
    tagline: "Autonomous AI-Powered Lead Generation & Enrichment Engine",
    category: "AI & Automation",
    description: "An AI-powered business lead generation and enrichment platform that automates prospect discovery, extracts structured business data, evaluates prospects using Google Gemini AI, and organizes qualified sales leads through Google Sheets and an interactive analytics dashboard.",
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Google Gemini API",
      "Google Sheets API",
      "BeautifulSoup4",
      "Google GenAI SDK",
      "gspread"
    ],
    keyFeatures: [
      "Automated web business data extraction and contact scraping",
      "AI-powered lead qualification and ICP scoring via Google Gemini",
      "Intelligent prospect filtering and revenue potential estimation",
      "Real-time two-way Google Sheets CRM synchronization",
      "High-concurrency FastAPI backend with asynchronous task execution",
      "Interactive React & Next.js sales analytics dashboard",
      "Resilient API caching and exponential backoff fallback mechanisms",
      "Automated strategic business prospect insights extraction"
    ],
    problem: "Sales and marketing teams spend countless hours manually researching company websites, copying contact emails into spreadsheets, and subjectively scoring leads.",
    solution: "Built a fully autonomous pipeline that crawls target domains, utilizes Google Gemini to assess company offerings against ideal customer profiles, enriches contact intelligence, and syncs directly into actionable CRM sheets.",
    challenges: "Navigating variable HTML structures across disparate company sites and managing rate-limiting quotas on generative AI models through intelligent token caching and retry queues.",
    architecture: [
      "Web Data Extraction (BeautifulSoup4 & Python Scraper)",
      "AI Evaluation Layer (Google Gemini API via Google GenAI SDK)",
      "Data Synchronization (Google Sheets API via gspread)",
      "API & Automation Layer (FastAPI Asynchronous Backend)",
      "Presentation Layer (React Analytics Dashboard & Lead Viewer)"
    ],
    githubUrl: "https://github.com/saurabhgupta10/autonomous-ai-lead-engine",
    liveDemoUrl: undefined,
    isLive: false,
    featured: true,
    accentColor: "from-blue-500/20 to-indigo-500/20",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
  }
];

export const SKILLS_DATA = [
  {
    category: "Frontend Development",
    skills: [
      { name: "TypeScript", level: "Advanced" },
      { name: "React", level: "Advanced" },
      { name: "Next.js (App Router)", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "HTML5 & Semantic Web", level: "Expert" },
      { name: "Responsive UI/UX Design", level: "Advanced" }
    ]
  },
  {
    category: "Backend & APIs",
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "Fastify", level: "Intermediate" },
      { name: "RESTful API Architecture", level: "Advanced" },
      { name: "FastAPI / Python", level: "Intermediate" },
      { name: "Webhook Ingestion & Handlers", level: "Advanced" }
    ]
  },
  {
    category: "Database & Cloud",
    skills: [
      { name: "PostgreSQL", level: "Advanced" },
      { name: "Supabase", level: "Advanced" },
      { name: "Database Schema Design", level: "Advanced" },
      { name: "Google Sheets API Integration", level: "Advanced" }
    ]
  },
  {
    category: "Developer Tools & Workflow",
    skills: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "VS Code", level: "Advanced" },
      { name: "Postman API Testing", level: "Advanced" },
      { name: "Vercel Cloud Deployment", level: "Advanced" }
    ]
  }
];

export const SERVICES_DATA = [
  {
    title: "Full-Stack Web Development",
    description: "End-to-end development of modern web applications with clean architecture, high performance, and seamless user experiences.",
    deliverables: ["Full-stack architecture", "Type-safe codebase", "Optimized database layer", "Clean, maintainable source code"]
  },
  {
    title: "Business Website Development",
    description: "Fast-loading, SEO-optimized business websites designed to build trust, communicate value, and convert visitors into clients.",
    deliverables: ["Responsive design across devices", "Search engine optimization", "Fast Core Web Vitals", "Intuitive navigation"]
  },
  {
    title: "Custom Web Application Development",
    description: "Tailored SaaS platforms and business portals engineered specifically around your workflow requirements and operational rules.",
    deliverables: ["Modular component system", "Secure role-based access", "State management", "Scalable data models"]
  },
  {
    title: "Admin Dashboard Development",
    description: "Data-driven administrative control centers providing clear metrics, real-time analytics, filtering, and operation controls.",
    deliverables: ["Interactive data visualizations", "CRUD interfaces", "CSV/PDF report exports", "Granular permission settings"]
  },
  {
    title: "API & Third-Party Integration",
    description: "Seamless connection of external services, payment gateways, messaging systems (e.g. WhatsApp Cloud API), and cloud APIs.",
    deliverables: ["Webhook handling", "Secure token management", "Error logging & retries", "Standardized REST endpoints"]
  },
  {
    title: "Database Architecture & Integration",
    description: "Reliable database design, indexing, and integration using PostgreSQL and Supabase for secure and performant queries.",
    deliverables: ["Relational schema design", "Row-level security policies", "Optimized queries", "Data migrations"]
  },
  {
    title: "Business Process Automation",
    description: "Automate repetitive business workflows, data extraction, lead scoring, and CRM synchronization using custom scripts and AI.",
    deliverables: ["Automated background jobs", "Data parsing pipelines", "CRM/Google Sheets sync", "Notification alerts"]
  },
  {
    title: "Website Maintenance & Bug Fixing",
    description: "Comprehensive code audits, responsiveness adjustments, performance speedups, and resolving legacy code defects.",
    deliverables: ["Code refactoring", "Bug troubleshooting", "Speed optimization", "Security updates"]
  }
];
