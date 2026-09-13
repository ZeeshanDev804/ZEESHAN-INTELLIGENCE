export type AgentStatus = "ACTIVE" | "READY" | "PAUSED";

export type AgentCategory =
  | "INTELLIGENCE"
  | "CREATION"
  | "COMMUNICATION"
  | "OPERATIONS"
  | "CONTROL";

export interface WorkforceAgent {
  id: string;
  name: string;
  shortName: string;
  description: string;
  category: AgentCategory;
  status: AgentStatus;
  icon: string;
  requiresApproval: boolean;
}

export const workforceAgents: WorkforceAgent[] = [
  {
    id: "opportunity-finder",
    name: "Opportunity Finder",
    shortName: "Opportunity",
    description:
      "Discovers relevant AI, software, freelance and client opportunities from authorized sources.",
    category: "INTELLIGENCE",
    status: "ACTIVE",
    icon: "search",
    requiresApproval: false,
  },
  {
    id: "task-analyzer",
    name: "Task Analyzer",
    shortName: "Analyzer",
    description:
      "Understands requirements, skills, deadlines, deliverables and task complexity.",
    category: "INTELLIGENCE",
    status: "READY",
    icon: "target",
    requiresApproval: false,
  },
  {
    id: "skill-matcher",
    name: "Skill Matcher",
    shortName: "Matcher",
    description:
      "Compares opportunities with the CEO profile, skills, experience and portfolio.",
    category: "INTELLIGENCE",
    status: "READY",
    icon: "crosshair",
    requiresApproval: false,
  },
  {
    id: "risk-scam-checker",
    name: "Risk & Scam Checker",
    shortName: "Risk Check",
    description:
      "Checks suspicious requirements, fake-job signals, client risk and payment concerns.",
    category: "CONTROL",
    status: "READY",
    icon: "shield",
    requiresApproval: false,
  },
  {
    id: "payment-checker",
    name: "Payment & Fee Checker",
    shortName: "Payment Check",
    description:
      "Detects application fees and payment requirements before any money is spent.",
    category: "CONTROL",
    status: "READY",
    icon: "wallet",
    requiresApproval: true,
  },
  {
    id: "cv-agent",
    name: "CV & Document Agent",
    shortName: "CV Agent",
    description:
      "Prepares and customizes CVs and supporting documents for relevant opportunities.",
    category: "CREATION",
    status: "READY",
    icon: "file-text",
    requiresApproval: true,
  },
  {
    id: "proposal-agent",
    name: "Proposal Agent",
    shortName: "Proposal",
    description:
      "Creates tailored proposals, cover letters and application responses.",
    category: "CREATION",
    status: "READY",
    icon: "file-edit",
    requiresApproval: true,
  },
  {
    id: "demo-selector",
    name: "Demo & Portfolio Agent",
    shortName: "Demo Selector",
    description:
      "Selects the most relevant demos, screenshots and portfolio proof for each opportunity.",
    category: "CREATION",
    status: "READY",
    icon: "layout",
    requiresApproval: true,
  },
  {
    id: "website-builder",
    name: "Website Builder",
    shortName: "Web Builder",
    description:
      "Builds professional websites and web applications according to approved requirements.",
    category: "CREATION",
    status: "READY",
    icon: "globe",
    requiresApproval: false,
  },
  {
    id: "ai-agent-builder",
    name: "AI Agent & Chatbot Builder",
    shortName: "AI Builder",
    description:
      "Designs AI agents, chatbots and intelligent business workflows.",
    category: "CREATION",
    status: "READY",
    icon: "bot",
    requiresApproval: false,
  },
  {
    id: "data-processing-agent",
    name: "Data Processing Agent",
    shortName: "Data Agent",
    description:
      "Handles approved data processing, organization, transformation and analysis tasks.",
    category: "OPERATIONS",
    status: "READY",
    icon: "database",
    requiresApproval: false,
  },
  {
    id: "design-agent",
    name: "Design & Asset Agent",
    shortName: "Design Agent",
    description:
      "Creates approved visual assets, layouts, brand materials and supporting graphics.",
    category: "CREATION",
    status: "READY",
    icon: "palette",
    requiresApproval: false,
  },
  {
    id: "client-communication-agent",
    name: "Client Communication Agent",
    shortName: "Communication",
    description:
      "Organizes client messages and prepares suggested replies and follow-ups.",
    category: "COMMUNICATION",
    status: "READY",
    icon: "message-square",
    requiresApproval: true,
  },
  {
    id: "pricing-agent",
    name: "Pricing Agent",
    shortName: "Pricing",
    description:
      "Suggests project pricing based on requirements, scope, complexity and value.",
    category: "COMMUNICATION",
    status: "READY",
    icon: "badge-dollar-sign",
    requiresApproval: true,
  },
  {
    id: "interview-agent",
    name: "Interview Preparation Agent",
    shortName: "Interview",
    description:
      "Prepares interview questions, talking points and follow-up suggestions.",
    category: "COMMUNICATION",
    status: "READY",
    icon: "mic",
    requiresApproval: false,
  },
  {
    id: "project-delivery-agent",
    name: "Project & Delivery Agent",
    shortName: "Delivery",
    description:
      "Organizes approved client work from planning through QA, revisions and delivery.",
    category: "OPERATIONS",
    status: "READY",
    icon: "workflow",
    requiresApproval: false,
  },
  {
    id: "qa-agent",
    name: "Testing & QA Agent",
    shortName: "QA Agent",
    description:
      "Checks approved builds, workflows, errors, responsiveness and delivery readiness.",
    category: "CONTROL",
    status: "READY",
    icon: "check-circle",
    requiresApproval: false,
  },
  {
    id: "earnings-agent",
    name: "Earnings & Reporting Agent",
    shortName: "Earnings",
    description:
      "Tracks verified earnings, project status and prepares daily or nightly CEO reports.",
    category: "OPERATIONS",
    status: "READY",
    icon: "chart",
    requiresApproval: false,
  },
];

export const activeWorkforceCount = workforceAgents.filter(
  (agent) => agent.status === "ACTIVE"
).length;

export const workforceCount = workforceAgents.length;
