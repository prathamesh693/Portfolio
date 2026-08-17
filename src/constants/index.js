import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  dataguard,
  nexora,
  projectflow,
  pan_agent,
  rent_extractor,
  threejs,
  msfabric,
  photoshop,
  powerbi,
  python,
  sql,
  ai,
  lang_graph,
  n8n,
  fastapi,
  logo,
  ct,
  scatterpie,
  tks,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "certification",
    title: "Certification",
  },
  {
    id: "publications",
    title: "Publications",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Agentic AI",
    subtitle: "LangGraph, N8N & Workflows",
    icon: ai,
  },
  {
    title: "Data Science & ML",
    subtitle: "Predictive Modeling & Pipelines",
    icon: backend,
  },
  {
    title: "Business Intelligence",
    subtitle: "Power BI & Analytics",
    icon: powerbi,
  },
  {
    title: "SQL & Data Engineering",
    subtitle: "Multi-DBs & Data Quality",
    icon: sql,
  },
  {
    title: "FastAPI & APIs",
    subtitle: "Backend Services & LLM Routing",
    icon: fastapi,
  },
  {
    title: "System Architecture",
    subtitle: "AI-Powered System Design",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Power BI",
    icon: powerbi,
  },
  {
    name: "Agentic AI",
    icon: ai,
  },
  {
    name: "LangGraph",
    icon: lang_graph,
  },
  {
    name: "N8N",
    icon: n8n,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Business Intelligence Developer & Agentic AI Builder",
    company_name: "Techknomatic Services Pvt. Ltd.",
    icon: tks,
    iconBg: "#1d1836",
    date: "Jan 2026 – Present | Pune, On-site",
    points: [
      "Shipped 3 enterprise AI platforms (Data Governance, Multi-Agent BI, Project Management) using Agentic AI development workflows, owning system architecture, data flow design, and end-to-end integration.",
      "Collaborated in cross-functional teams of 4–5 (Senior Data Engineers, Developers, Data Scientists), translating complex business requirements into working system designs.",
      "Built Power BI ITSM and operational monitoring dashboards using advanced DAX, Power Query transformations, and SQL for executive reporting.",
    ],
  },
  {
    title: "Data Analyst Trainee",
    company_name: "ScatterPie Analytics",
    icon: scatterpie,
    iconBg: "#E6DEDD",
    date: "Sep 2025 – Dec 2025 | Remote",
    points: [
      "Selected for Excellence Program 2025 conducted by ScatterPie Analytics.",
      "Received structured industry training in SQL, Microsoft Power BI, and Data Analytics fundamentals through real-world business case studies.",
      "Applied statistical models, exploratory data analysis, and dashboard optimization techniques for corporate analytics.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Prathamesh's ability to architect multi-agent AI systems and translate intricate data requirements into enterprise-ready platforms is exceptional.",
    name: "Engineering Lead",
    designation: "Technical Lead",
    company: "Enterprise AI Solutions",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "Delivered high-impact Power BI monitoring dashboards and robust SQL data models that significantly accelerated our operational decision-making.",
    name: "Analytics Mentor",
    designation: "Principal Analyst",
    company: "ScatterPie Analytics",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    testimonial:
      "Outstanding grasp of Agentic AI workflows, system architectures, and end-to-end multi-database integration. A true problem solver.",
    name: "Senior Data Engineer",
    designation: "Sr. Data Architect",
    company: "Techknomatic Services",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
];

const projects = [
  {
    name: "DataGuard (Tecknow-Lytics)",
    description:
      "Enterprise-grade Database Governance & AI Observability SaaS. Features TalkSight natural-language BI, automated regex PII classification, pluggable Data Quality Engine evaluating 4M+ records with 99.8% compliance, automated SQL remediation script advisor, and ARIMA anomaly detection.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs/express",
        color: "green-text-gradient",
      },
      {
        name: "postgresql/mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "data-governance",
        color: "orange-text-gradient",
      },
    ],
    image: dataguard,
    source_code_link: "https://github.com/prathamesh693",
  },
  {
    name: "Nexora AI – Beyond Dashboard",
    description:
      "Multi-Agent Intelligence & Predictive Forecasting Platform. Features 4 specialized AI agents: dynamic Text-to-SQL querying across multi-databases, auto KPI dashboard generator (30+ KPIs), and ML regression pipelines (XGBoost & CatBoost) for Sales, Profit, and Demand forecasting.",
    tags: [
      {
        name: "fastapi",
        color: "blue-text-gradient",
      },
      {
        name: "react19-ts",
        color: "green-text-gradient",
      },
      {
        name: "multi-agent-ai",
        color: "pink-text-gradient",
      },
      {
        name: "xgboost/catboost",
        color: "orange-text-gradient",
      },
    ],
    image: nexora,
    source_code_link: "https://github.com/prathamesh693",
  },
  {
    name: "ProjectFlow (AAI_Replica)",
    description:
      "Full-stack Enterprise Project Planning & Portfolio Management Portal. Features hierarchical Work Breakdown Structure (WBS) scheduling, BOQ cost tracking, contract management (GST, retention, milestones), and dynamic billing analytics dashboard.",
    tags: [
      {
        name: "fastapi",
        color: "blue-text-gradient",
      },
      {
        name: "react19-ts",
        color: "green-text-gradient",
      },
      {
        name: "sqlalchemy",
        color: "pink-text-gradient",
      },
      {
        name: "recharts",
        color: "orange-text-gradient",
      },
    ],
    image: projectflow,
    source_code_link: "https://github.com/prathamesh693",
  },
  {
    name: "AI Email PAN Verification Agent",
    description:
      "Intelligent automation system integrating Microsoft Graph API to monitor Outlook mailboxes, extract Indian PAN numbers via regex with LLM fallback, verify against employee DBs, and auto-dispatch context-aware AI replies.",
    tags: [
      {
        name: "fastapi",
        color: "blue-text-gradient",
      },
      {
        name: "microsoft-graph",
        color: "green-text-gradient",
      },
      {
        name: "genai-llms",
        color: "pink-text-gradient",
      },
      {
        name: "postgresql/sqlserver",
        color: "orange-text-gradient",
      },
    ],
    image: pan_agent,
    source_code_link: "https://github.com/prathamesh693",
  },
  {
    name: "Rent Agreement Data Extractor",
    description:
      "Production-grade AI pipeline extracting structured data from scanned legal agreement PDFs on Government Bond Paper. Uses Mistral for OCR, Claude API for semantic entity extraction into Pydantic schemas, and exports to Excel/CSV with anomaly review flags.",
    tags: [
      {
        name: "python/flask",
        color: "blue-text-gradient",
      },
      {
        name: "claude-api",
        color: "green-text-gradient",
      },
      {
        name: "mistral-ocr",
        color: "pink-text-gradient",
      },
      {
        name: "pydantic/pandas",
        color: "orange-text-gradient",
      },
    ],
    image: rent_extractor,
    source_code_link: "https://github.com/prathamesh693",
  },
];

export { services, technologies, experiences, testimonials, projects };
