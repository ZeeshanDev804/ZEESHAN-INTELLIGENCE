export type ClientStatus =
  | "LEAD"
  | "ACTIVE"
  | "NEGOTIATING"
  | "PROJECT_ACTIVE"
  | "COMPLETED"
  | "INACTIVE"
  | "BLOCKED";

export type ClientSource =
  | "FIVERR"
  | "UPWORK"
  | "DIRECT"
  | "LINKEDIN"
  | "EMAIL"
  | "SOCIAL_MEDIA"
  | "OTHER";

export type ClientTrustLevel = "LOW" | "MEDIUM" | "HIGH" | "UNKNOWN";

export type ClientMessageSender =
  | "CLIENT"
  | "CEO"
  | "AI_AGENT"
  | "SYSTEM";

export interface ClientContact {
  name?: string;
  email?: string;
  phone?: string;
  platformUsername?: string;
  website?: string;
}

export interface ClientMessage {
  id: string;
  sender: ClientMessageSender;
  message: string;
  sentAt: string;
  requiresResponse: boolean;
  responded: boolean;
}

export interface ClientRequirement {
  id: string;
  title: string;
  description: string;
  priority: "LOW" | "MEDIUM" | "HIGH";
  completed: boolean;
  createdAt: string;
}

export interface ClientProjectSummary {
  projectId: string;
  title: string;
  status:
    | "PLANNING"
    | "IN_PROGRESS"
    | "TESTING"
    | "REVISION"
    | "DELIVERED"
    | "COMPLETED"
    | "CANCELLED";
  agreedAmount?: number;
  currency?: string;
  startedAt?: string;
  completedAt?: string;
}

export interface ClientFollowUp {
  id: string;
  message?: string;
  scheduledAt: string;
  completed: boolean;
  completedAt?: string;
}

export interface Client {
  id: string;

  // Basic information
  name: string;
  company?: string;
  source: ClientSource;
  status: ClientStatus;

  // Contact information
  contact: ClientContact;

  // Client intelligence
  industry?: string;
  country?: string;
  timezone?: string;
  description?: string;
  servicesInterestedIn: string[];

  // Trust and risk
  trustLevel: ClientTrustLevel;
  riskScore?: number;
  riskNotes?: string;
  verified: boolean;

  // Communication
  messages: ClientMessage[];
  unreadMessageCount: number;

  // Requirements
  requirements: ClientRequirement[];

  // Projects
  projects: ClientProjectSummary[];

  // Pricing
  totalAgreedValue?: number;
  currency?: string;

  // Follow-ups
  followUps: ClientFollowUp[];

  // CEO control
  requiresCEOApproval: boolean;
  ceoNotes?: string;

  // Audit
  createdAt: string;
  updatedAt: string;
  lastContactAt?: string;
  lastAction?: string;
  lastActionAt?: string;
}
