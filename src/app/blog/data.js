// ─── Blog Data ────────────────────────────────────────────────────────────────
// All blog content defined inline - no external imports required.
// Add/edit posts here; pages consume this directly.

export const categories = [
  { id: "all",          label: "All Posts" },
  { id: "ai-agents",    label: "AI Agents" },
  { id: "finance-ai",   label: "Finance AI" },
  { id: "erp",          label: "ERP Integration" },
  { id: "industry",     label: "Industry Insights" },
  { id: "engineering",  label: "Engineering" },
  { id: "strategy",     label: "AI Strategy" },
];

export const authors = {
  "agenticsense-team": {
    name: "AgenticSense Team",
    role: "Editorial",
    avatar: "/authors/team.png",
  },
  "waqas-ali": {
    name: "Waqas Ali",
    role: "Senior AI Engineer",
    avatar: "/authors/waqas.png",
  },
  "zeeshan-taqi": {
    name: "Muhammad Zeeshan Taqi",
    role: "CEO, AgenticSense",
    avatar: "/authors/zeeshan.png",
  },
};

export const posts = [
  {
    slug: "why-finance-ai-pilots-fail",
    title: "Why Finance AI Pilots Fail - And What to Do Instead",
    excerpt:
      "Most AI pilots in financial services look impressive in a demo and never reach production. The reasons are almost always the same - and almost always avoidable.",
    category: "finance-ai",
    author: "zeeshan-taqi",
    date: "2025-01-15",
    readTime: "8 min read",
    featured: true,
    coverGradient: "from-[#1a194d] via-[#2d2b6b] to-[#625eff]",
    tags: ["Finance AI", "AP Automation", "Production AI", "ERP"],
    seo: {
      title: "Why Finance AI Pilots Fail and How to Fix It | AgenticSense",
      description:
        "Discover the real reasons AI pilots stall before production in financial services - and the engineering discipline that gets them across the line.",
    },
    body: [
      {
        type: "intro",
        text: "Eighty percent of enterprise AI projects never make it to production. In financial services, the number may be higher. Not because the technology is unready - but because the conditions for production are systematically ignored in the pilot phase.",
      },
      {
        type: "h2",
        text: "The Demo Problem",
      },
      {
        type: "p",
        text: "A finance AI pilot that works on clean, curated, export-from-ERP data tells you almost nothing about whether it will work on your live AP inbox. The variance in real vendor invoice formats, the exception cases, the vendor-specific parsing quirks - none of that is present in a demo dataset.",
      },
      {
        type: "p",
        text: "The result is a pilot that produces impressive accuracy metrics on synthetic data, then quietly fails in the first week of production when a supplier sends an invoice in a format nobody planned for.",
      },
      {
        type: "callout",
        text: "The question to ask in any pilot: is this being tested on data that actually exists in our environment, or on data that was prepared to make it look good?",
      },
      {
        type: "h2",
        text: "The Integration Gap",
      },
      {
        type: "p",
        text: "Most finance AI pilots extract data but stop short of posting it to the ERP. The extraction accuracy is measured, declared a success, and the engagement moves toward a 'Phase 2 integration' that frequently never materialises.",
      },
      {
        type: "p",
        text: "This is backwards. The value of AP automation is not in extracting invoice data - your team can do that. The value is in posting to SAP Business One or Oracle Fusion without a human touchpoint on clean invoices. If the pilot doesn't prove that end-to-end chain works, it hasn't proved anything commercially relevant.",
      },
      {
        type: "h2",
        text: "The Compliance Afterthought",
      },
      {
        type: "p",
        text: "Finance operations run inside regulatory and control frameworks that generic AI pilots ignore. When the compliance team sees the proposed deployment and realises there are no audit trails, no segregation of duties controls and no human-in-the-loop checkpoints for exception cases, the pilot gets blocked - often permanently.",
      },
      {
        type: "p",
        text: "Building these controls into the architecture from the start adds maybe 20% to the initial build time. Retrofitting them after a compliance review rejection adds months - and often kills the project entirely.",
      },
      {
        type: "h2",
        text: "What a Production-Ready Pilot Looks Like",
      },
      {
        type: "p",
        text: "A pilot that is designed to reach production has four properties that a demo-optimised pilot almost never has: it runs against real data from your live systems; it tests the full chain from intake to ERP posting; it has audit logging and human oversight checkpoints active from day one; and it defines measurable success criteria - reconciliation rate, exception rate, straight-through processing percentage - before the build begins.",
      },
      {
        type: "p",
        text: "Those criteria become the acceptance test for go-live. The pilot either passes them or it does not - and that clarity is far more valuable than an impressive demo that leaves the question of production readiness unanswered.",
      },
    ],
  },
  {
    slug: "building-erp-native-ai-agents",
    title: "Building ERP-Native AI Agents: The Case Against Middleware",
    excerpt:
      "Third-party connectors between your AI and your ERP introduce failure points, latency and upgrade risk that official API integration eliminates entirely.",
    category: "erp",
    author: "waqas-ali",
    date: "2025-01-28",
    readTime: "11 min read",
    featured: true,
    coverGradient: "from-[#0f172a] via-[#1e293b] to-[#334155]",
    tags: ["ERP Integration", "SAP B1", "Oracle Fusion", "Architecture"],
    seo: {
      title: "Building ERP-Native AI Agents Without Middleware | AgenticSense",
      description:
        "Why official API integration with SAP Business One, Oracle Fusion and NetSuite produces more reliable, maintainable AI agents than third-party connector platforms.",
    },
    body: [
      {
        type: "intro",
        text: "Every ERP integration project eventually encounters the middleware question: use a connector platform like Boomi or MuleSoft, or integrate directly with the ERP's own APIs. For AI agents that need to act on live data in real time, the answer should almost always be the same.",
      },
      {
        type: "h2",
        text: "What Middleware Actually Costs You",
      },
      {
        type: "p",
        text: "Connector platforms solve a real problem - they reduce the initial integration effort by abstracting away the ERP's API quirks. That abstraction comes at a price: another moving part between your agent and your data source, another failure mode to monitor, another vendor relationship to manage, and another component that may not handle an ERP upgrade gracefully.",
      },
      {
        type: "callout",
        text: "When SAP releases a Service Layer update, a direct API integration typically requires a config change. A middleware integration requires coordination across two vendor ecosystems simultaneously.",
      },
      {
        type: "h2",
        text: "SAP Business One via Service Layer",
      },
      {
        type: "p",
        text: "SAP Business One's Service Layer exposes a comprehensive REST API that covers the full business object model - AP invoices, purchase orders, goods receipts, business partners, landed costs and more. Agents built on Service Layer make authenticated HTTP calls, work with JSON-formatted SAP objects and use the same session management model as SAP's own certified add-ons.",
      },
      {
        type: "p",
        text: "For operations that Service Layer doesn't expose cleanly - complex GRN-to-landed-cost mapping, for example - a direct HANA SQL connection via hdbcli provides a clean, supported alternative that SAP explicitly accommodates. This is not a workaround; it is a documented integration path.",
      },
      {
        type: "h2",
        text: "Oracle Fusion Cloud",
      },
      {
        type: "p",
        text: "Oracle Fusion Cloud's REST API surface is extensive, covering financial management, supply chain, HCM and project management. For AI workloads, OCI GenAI Agents and AI Agent Studio provide a native intelligence layer that connects directly to Fusion data through Oracle's own managed service - removing the need for any external infrastructure to serve AI capabilities to Fusion users.",
      },
      {
        type: "h2",
        text: "The Agent Architecture That Works",
      },
      {
        type: "p",
        text: "An AI agent that reads from and writes to your ERP through official APIs has a clean, documented, upgrade-safe integration surface. It authenticates through your existing identity infrastructure. It can be audited at the API call level. When the ERP updates, the integration team needs to review API changelog notes - not coordinate an emergency middleware patch.",
      },
    ],
  },
  {
    slug: "agentic-ai-healthcare-rcm",
    title: "Agentic AI in Healthcare Revenue Cycle: What Actually Works",
    excerpt:
      "Revenue cycle management is one of the highest-value AI applications in healthcare - and one of the most consistently oversold. Here is what production deployments look like.",
    category: "industry",
    author: "agenticsense-team",
    date: "2025-02-06",
    readTime: "9 min read",
    featured: false,
    coverGradient: "from-[#064e3b] via-[#065f46] to-[#059669]",
    tags: ["Healthcare", "RCM", "Pre-Auth", "Clinical AI"],
    seo: {
      title: "Agentic AI in Healthcare Revenue Cycle Management | AgenticSense",
      description:
        "A production-focused look at AI in healthcare RCM - pre-authorisation, claim submission, denial management and what it takes to go live in a clinical environment.",
    },
    body: [
      {
        type: "intro",
        text: "Revenue cycle management has been a target for AI automation for over a decade. The gap between the vendor promises and the actual production deployments remains large. This piece focuses on what works, why it works, and what the clinical and technical prerequisites are.",
      },
      {
        type: "h2",
        text: "Pre-Authorisation: The Highest-ROI Starting Point",
      },
      {
        type: "p",
        text: "Pre-authorisation delays are a direct cost - they delay procedures, add administrative burden and when they fail, they result in denials that are expensive to appeal. An AI agent that handles pre-auth submission has a clear, measurable input (the procedure requiring authorisation, the patient's insurance details, the clinical documentation), a clear output (the submitted pre-auth request and the tracked response), and a clear success metric (cycle time and first-pass approval rate).",
      },
      {
        type: "callout",
        text: "Pre-auth automation is attractive precisely because the workflow is well-defined, the failure modes are known and the ROI is directly measurable against baseline cycle times.",
      },
      {
        type: "h2",
        text: "The Data Governance Prerequisite",
      },
      {
        type: "p",
        text: "Healthcare AI deployments that fail almost always fail on data governance rather than technology. Patient data isolation, consent-aware access controls, role-based data access and audit trails are not features you add to a working system - they are architecture decisions you make before the first line of code.",
      },
      {
        type: "h2",
        text: "FHIR Integration and Why It Matters",
      },
      {
        type: "p",
        text: "HL7 FHIR is the most important standard in healthcare interoperability. An AI agent that integrates through FHIR-compliant APIs accesses patient data through a structured, versioned, governable interface - one that your HIS vendor maintains, documents and supports across upgrades. This is the integration path that survives the long term.",
      },
    ],
  },
  {
    slug: "multi-agent-systems-langgraph",
    title: "Multi-Agent Systems with LangGraph: Architecture Patterns for Production",
    excerpt:
      "LangGraph's directed graph model solves real problems in enterprise agent orchestration. This is how we use it in production - including the parts vendors don't talk about.",
    category: "engineering",
    author: "waqas-ali",
    date: "2025-02-14",
    readTime: "14 min read",
    featured: false,
    coverGradient: "from-[#1e1b4b] via-[#312e81] to-[#4338ca]",
    tags: ["LangGraph", "FastAPI", "Multi-Agent", "Architecture"],
    seo: {
      title: "Multi-Agent Systems with LangGraph: Production Architecture Patterns | AgenticSense",
      description:
        "How we architect multi-agent systems using LangGraph for enterprise production environments - state management, failure handling, human-in-the-loop and operational monitoring.",
    },
    body: [
      {
        type: "intro",
        text: "LangGraph describes itself as a framework for building stateful, multi-actor applications with language models. In practice, it is the most production-viable orchestration layer we have found for the kind of multi-agent workflows that enterprise automation requires.",
      },
      {
        type: "h2",
        text: "Why Directed Graphs for Agent Orchestration",
      },
      {
        type: "p",
        text: "The fundamental problem with chain-based agent orchestration is that real enterprise workflows are not chains - they are graphs. An AP automation workflow has conditional branches (does the invoice have a PO? is the amount within tolerance? does the vendor exist in the master?), cycles (retry extraction on low-confidence parse), and explicit terminal states (posted, rejected, escalated).",
      },
      {
        type: "p",
        text: "LangGraph's directed graph model makes these control flows explicit and auditable. The state at every node is defined in your state schema. Transitions between nodes are conditional functions you write. The graph is a documentation artefact, not just an implementation detail.",
      },
      {
        type: "callout",
        text: "The key LangGraph property for enterprise deployments: every agent action produces a state update that persists in the graph's checkpointing layer. This gives you the audit trail that compliance requires without building a separate logging system.",
      },
      {
        type: "h2",
        text: "Human-in-the-Loop Checkpoints",
      },
      {
        type: "p",
        text: "LangGraph's interrupt mechanism allows you to pause graph execution at any node and require a human decision before continuing. For AP workflows, this means invoices above a tolerance threshold, or with missing PO references, or from new vendors pause at a review node - the agent presents the extracted data and the matching evidence to a human reviewer, who approves or corrects, and execution resumes from that checkpoint.",
      },
      {
        type: "h2",
        text: "Production Deployment Patterns",
      },
      {
        type: "p",
        text: "We deploy LangGraph agents behind FastAPI services with Gunicorn multi-worker configuration and Celery for background task processing. Redis serves as the state backend for LangGraph's persistence layer in most deployments. This stack gives you horizontal scalability, observable state and the ability to replay any agent execution from a checkpoint - which is essential for debugging production issues without access to the original input data.",
      },
    ],
  },
  {
    slug: "ai-strategy-what-boards-miss",
    title: "What Board-Level AI Strategy Gets Wrong - Every Time",
    excerpt:
      "Enterprise AI strategy documents have a consistent failure pattern: they focus on what AI could do and ignore what the organisation is actually capable of deploying.",
    category: "strategy",
    author: "zeeshan-taqi",
    date: "2025-02-25",
    readTime: "7 min read",
    featured: false,
    coverGradient: "from-[#1a194d] via-[#1e1b4b] to-[#312e81]",
    tags: ["AI Strategy", "Enterprise AI", "Readiness", "Leadership"],
    seo: {
      title: "What Enterprise AI Strategy Gets Wrong | AgenticSense",
      description:
        "The consistent failure patterns in board-level AI strategy - and the readiness assessment questions that separate deployable AI from aspirational roadmaps.",
    },
    body: [
      {
        type: "intro",
        text: "Most enterprise AI strategy documents share a structural flaw: they are written from the outside in. They describe what AI can do, what competitors are doing with AI, and what the organisation should aspire to. They rarely assess what the organisation is actually capable of deploying - and the gap between those two things is where strategy dies.",
      },
      {
        type: "h2",
        text: "The Data Quality Blind Spot",
      },
      {
        type: "p",
        text: "Every AI strategy asserts that data is the organisation's most valuable asset. Almost none of them include an honest assessment of the data's actual quality. An AI model trained on inconsistent, incomplete or inaccurate data produces inconsistent, incomplete or inaccurate outputs. This is not a technology problem - it is a data governance problem that shows up as an AI problem.",
      },
      {
        type: "callout",
        text: "The most useful question to ask of any AI strategy: if we built the agent described on page 12, what data would it actually run on - and is that data in a state where we would trust its outputs?",
      },
      {
        type: "h2",
        text: "API Access Is Not Assumed",
      },
      {
        type: "p",
        text: "AI strategies routinely assume that the ERP, the CRM and the data warehouse will expose the data the AI needs through clean, available APIs. In reality, many enterprise systems have limited API coverage, deprecated endpoints, licensing restrictions on API access or simply undocumented behaviour that requires significant engineering to navigate. A strategy that does not account for this is not a plan - it is a wish.",
      },
      {
        type: "h2",
        text: "What a Useful AI Strategy Actually Contains",
      },
      {
        type: "p",
        text: "A strategy that can be acted on answers four questions before any use-case prioritisation: what is the actual state of the data the AI will operate on? What APIs does the target system expose, and what do they not expose? What are the compliance and governance requirements that any production deployment must satisfy? And what does the organisation have the capability to operate and maintain post-deployment?",
      },
      {
        type: "p",
        text: "These questions are less exciting than a capability vision. They are also the ones that determine whether the strategy ever becomes a system.",
      },
    ],
  },
  {
    slug: "dynamic-pricing-ecommerce-guardrails",
    title: "Dynamic Pricing AI in E-commerce: Why Guardrails Are the Product",
    excerpt:
      "A dynamic pricing engine without well-designed commercial guardrails is not a product - it is a liability. Here is how to build the constraints that make AI pricing safe to deploy.",
    category: "industry",
    author: "agenticsense-team",
    date: "2025-03-08",
    readTime: "10 min read",
    featured: false,
    coverGradient: "from-[#2e1065] via-[#4c1d95] to-[#7c3aed]",
    tags: ["E-commerce", "Dynamic Pricing", "Retail AI", "Guardrails"],
    seo: {
      title: "Dynamic Pricing AI in E-commerce: Guardrail Architecture | AgenticSense",
      description:
        "How to design the commercial guardrails that make dynamic pricing AI safe to deploy in enterprise e-commerce - floor prices, competitor rules, margin controls and human override.",
    },
    body: [
      {
        type: "intro",
        text: "The feature list of a dynamic pricing engine sounds straightforward: responds to demand signals, adjusts to competitor pricing, accounts for inventory levels, maximises margin. The commercial reality is that a pricing engine without carefully designed constraints can move prices in ways that damage brand perception, trigger race-to-the-bottom dynamics with competitors or simply undercut your own margin targets on high-velocity SKUs.",
      },
      {
        type: "h2",
        text: "The Guardrail Architecture",
      },
      {
        type: "p",
        text: "Every pricing agent we deploy has a minimum viable guardrail set: a floor price below which the agent cannot go regardless of any signal; a ceiling price above which the agent cannot go regardless of demand; a maximum single-step change percentage to prevent jarring price movements; and a competitor response rule that prevents the agent from entering a price war without human escalation.",
      },
      {
        type: "callout",
        text: "The guardrails are not a constraint on what the AI can do - they are the definition of what the business is willing to have the AI do. Designing them carefully is strategy, not engineering.",
      },
      {
        type: "h2",
        text: "Category-Specific Rule Sets",
      },
      {
        type: "p",
        text: "A single global guardrail set is almost always the wrong architecture. High-margin, low-velocity products have different pricing dynamics than commodity, high-velocity SKUs. Premium products have brand-protection constraints that commodity products don't. The guardrail configuration should be a per-category or per-product-class configuration, not a global parameter.",
      },
      {
        type: "h2",
        text: "The Human Override Interface",
      },
      {
        type: "p",
        text: "A production pricing agent needs a commercial team override interface - a way for merchandising or commercial leadership to inspect what the agent is doing, understand why, and intervene when they disagree. The interface is not an emergency stop; it is a normal part of operations. Designing it as an afterthought produces a tool that the commercial team does not trust and eventually works around.",
      },
    ],
  },
];

// Utility functions
export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug) ?? null;
}

export function getFeaturedPosts() {
  return posts.filter((p) => p.featured);
}

export function getPostsByCategory(categoryId) {
  if (categoryId === "all") return posts;
  return posts.filter((p) => p.category === categoryId);
}

export function getRelatedPosts(currentSlug, category, limit = 3) {
  return posts
    .filter((p) => p.slug !== currentSlug && p.category === category)
    .slice(0, limit);
}

export function getAllSlugs() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric", month: "long", year: "numeric",
  });
}