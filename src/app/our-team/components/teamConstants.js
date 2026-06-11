// ── Shared constants — imported by all team components ────────────────────────

// ── Shared constants — imported by all team components ────────────────────────

export const TEAM = [
  { 
    "id": 1, 
    "name": "Waqas Ali", 
    "role": "Chief Executive Officer (CEO)", 
    "department": "Leadership", 
    "description": "Drives overall company vision, strategy, and growth. Responsible for stakeholder relations, business development, and long-term value creation.",
    "bio": "Visionary leader driving AgenticSense's mission to redefine enterprise AI. 15+ years building technology companies across the Gulf and South Asia.", 
    "image": "/team-images/Waqas.jpeg", 
    "tags": ["STRATEGY", "BUSINESS LEADERSHIP", "ENTERPRISE AI", "M&A", "GOVERNANCE", "INNOVATION"], 
    "social": { "linkedin": "https://www.linkedin.com/in/waqas-ali-cais-cds-fcma-adma-82492538/", "github": "#" } 
  },
  { 
    "id": 2, 
    "name": "Raheel Ahmed", 
    "role": "Chief Technology Officer (CTO)", 
    "department": "Leadership", 
    "description": "Leads technology vision, architecture, and innovation. Oversees product engineering, R&D, and emerging technologies.",
    "bio": "Architect of our multi-agent AI platform. Previously led engineering at two unicorn-stage SaaS companies. Expert in LangGraph and distributed systems.", 
    "image": "/team-images/Raheel.jpeg", 
    "tags": ["SYSTEM ARCHITECTURE", "AI/ML", "CLOUD", "DEVOPS", "MLOPS", "INFORMATION SECURITY"], 
    "social": { "linkedin": "https://www.linkedin.com/in/muhammadraheel42/", "github": "#" } 
  },
  { 
    "id": 3, 
    "name": "Syed Muzammil", 
    "role": "Chief Operating Officer (COO)", 
    "department": "Leadership", 
    "description": "Ensures operational excellence and delivery at scale. Manages projects, processes, and cross-functional execution.",
    "bio": "Bridges the gap between client business needs and technical delivery. Expert in agile execution, sprint planning, and managing enterprise automation workflows.", 
    "image": "/team-images/Muzammil.jpeg", 
    "tags": ["OPERATIONS MANAGEMENT", "AGILE", "SCRUM", "JIRA", "PROCESS OPTIMIZATION", "RISK MANAGEMENT"], 
    "social": { "linkedin": "https://www.linkedin.com/in/syed-muzammil1/?skipRedirect=true", "github": "#" } 
  },
  
];

export const DEPARTMENTS = ["All", "Leadership", "Management", "Engineering", "Design", "Solutions"];

export const DEPT_ACCENT = {
  Leadership: "bg-amber-400", 
  Management: "bg-amber-400", // Fallback color map handling
  Engineering: "bg-[#625eff]",
  Design: "bg-rose-400",      
  Solutions: "bg-emerald-400", 
  Growth: "bg-sky-400",
};

export const DEPT_TEXT = {
  Leadership: "text-slate-500", 
  Management: "text-amber-500", // Fallback color map handling
  Engineering: "text-[#625eff]",
  Design: "text-rose-500",      
  Solutions: "text-emerald-500", 
  Growth: "text-sky-500",
};

export const STATS = [
  { value: "15+", label: "Core Team Members" },
  { value: "5",   label: "Departments"       },
  { value: "12+", label: "Countries Served"  },
  { value: "40+", label: "Projects Shipped"  },
];

export const PALETTE = [
  [148,130,255],[98,94,255],[180,170,255],
  [80,120,255],[200,190,255],[255,255,255],[120,200,255],
];