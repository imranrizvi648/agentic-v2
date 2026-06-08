// ── Shared constants — imported by all team components ────────────────────────

export const TEAM = [
  { 
    id: 1, 
    name: "Waqas Ali", 
    role: "Chief Executive Officer", 
    department: "Leadership", 
    bio: "Visionary leader driving AgenticSense's mission to redefine enterprise AI. 15+ years building technology companies across the Gulf and South Asia.", 
    image: "/team-images/Waqas.jpeg", 
    tags: ["Strategy", "Enterprise AI", "M&A", "Leadership"], 
    social: { linkedin: "#", twitter: "#" } 
  },
  { 
    id: 2, 
    name: "Mr Raheel", 
    role: "Team Lead", 
    department: "Leadership", 
    bio: "Architect of our multi-agent AI platform. Previously led engineering at two unicorn-stage SaaS companies. Expert in LangGraph and distributed systems.", 
    image: "/team-images/Raheel.jpeg", 
    tags: ["LangGraph", "FastAPI", "MLOps", "Architecture"], 
    social: { linkedin: "#", github: "#" } 
  },
  { 
    id: 3, 
    name: "Syed Muzammil", 
    role: "Project Manager", 
    department: "Management", 
    bio: "Bridges the gap between client business needs and technical delivery. Expert in agile execution, sprint planning, and managing enterprise automation workflows.", 
    image: "/team-images/Muzammil.jpeg", 
    tags: ["Project Management", "Agile", "Scrum", "Jira"], 
    social: { linkedin: "#", github: "#" } 
  },
  { 
    id: 4, 
    name: "Raza Abbas", 
    role: "AI Engineer", 
    department: "Engineering", 
    bio: "Specialises in RAG pipelines, vector search, and fine-tuning production LLMs. Passionate about making AI systems explainable and measurable.", 
    image: "/team-images/Raza_Abbas.jpeg", 
    tags: ["RAG", "pgvector", "Gemini", "LLMs"], 
    social: { linkedin: "#", twitter: "#" } 
  },
  { 
    id: 5, 
    name: "Zeeshan Hussain", 
    role: "Backend / Python Engineer", 
    department: "Engineering", 
    bio: "Keeps our backend infrastructure resilient at scale. Expert in Python, FastAPI, Celery pipelines, Redis, and microservice architecture on AWS.", 
    image: "/team-images/Zeeshan_Hussain.jpeg", 
    tags: ["Python", "FastAPI", "Celery", "Redis", "PostgreSQL"], 
    social: { linkedin: "#", twitter: "#" } 
  },
  { 
    id: 6, 
    name: "Syed Muhammad Imran", 
    role: "Javascript Developer", 
    department: "Engineering", 
    bio: "Builds high-performance interactive interfaces and dynamic web applications. Expert in modern JavaScript frameworks, asynchronous logic, and state management.", 
    image: "/team-images/Syed_Muhammad_Imran.jpeg", 
    tags: ["JavaScript", "React.js", "Next.js", "Node.js", "ES6+"], 
    social: { linkedin: "#" } 
  },
  { 
    id: 7, 
    name: "Muhammad Saif", 
    role: "AI Engineer", 
    department: "Engineering", 
    bio: "Develops advanced intelligent agents, custom AI workflows, and multi-agent orchestration systems using deep learning frameworks.", 
    image: "/team-images/Muhammad_Saif.jpeg", 
    tags: ["AI Agents", "LangChain", "NLP", "Deep Learning"], 
    social: { linkedin: "#", twitter: "#" } 
  },
  { 
    id: 8, 
    name: "Muhammad Hamza", 
    role: "UI/Ux Designer", 
    department: "Design", 
    bio: "Transforms complex AI workflows into premium, intuitive interfaces. Design systems advocate specializing in high-fidelity prototypes and user-centric wireframes.", 
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=600&auto=format&fit=crop&q=80", 
    tags: ["UI/UX Design", "Figma", "Design Systems", "Wireframing", "Prototyping"], 
    social: { linkedin: "#", github: "#" } 
  }
];

export const DEPARTMENTS = ["All","Leadership","Management","Engineering","Design","Solutions"];

export const DEPT_ACCENT = {
  Leadership:"bg-amber-400", Engineering:"bg-[#625eff]",
  Design:"bg-rose-400",      Solutions:"bg-emerald-400", Growth:"bg-sky-400",
};
export const DEPT_TEXT = {
  Leadership:"text-amber-500", Engineering:"text-[#625eff]",
  Design:"text-rose-500",      Solutions:"text-emerald-500", Growth:"text-sky-500",
};

export const STATS = [
  { value:"15+",  label:"Core Team Members" },
  { value:"5",   label:"Departments"       },
  { value:"12+", label:"Countries Served"  },
  { value:"40+", label:"Projects Shipped"  },
];

export const PALETTE = [
  [148,130,255],[98,94,255],[180,170,255],
  [80,120,255],[200,190,255],[255,255,255],[120,200,255],
];
