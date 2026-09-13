export type ProjectStatus =
  | "NEW"
  | "PLANNING"
  | "IN_PROGRESS"
  | "TESTING"
  | "REVISION"
  | "READY_FOR_DELIVERY"
  | "DELIVERED"
  | "COMPLETED"
  | "ON_HOLD"
  | "CANCELLED";

export type ProjectPriority = "LOW" | "MEDIUM" | "HIGH" | "URGENT";

export type ProjectTaskStatus =
  | "TODO"
  | "IN_PROGRESS"
  | "BLOCKED"
  | "TESTING"
  | "DONE";

export type ProjectTaskType =
  | "AI"
  | "WEBSITE"
  | "CHATBOT"
  | "DESIGN"
  | "DATA"
  | "CONTENT"
  | "QA"
  | "CLIENT"
  | "OTHER";

export type RevisionStatus =
  | "REQUESTED"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "APPROVED";

export interface ProjectRequirement {
  id: string;
  title: string;
  description: string;
  required: boolean;
  completed: boolean;
  source?: string;
  createdAt: string;
}

export interface ProjectTask {
  id: string;
  title: string;
  description?: string;
  type: ProjectTaskType;
  status: ProjectTaskStatus;
  priority: ProjectPriority;
  assignedAgentId?: string;
  estimatedMinutes?: number;
  actualMinutes?: number;
  dueAt?: string;
  completedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProjectRevision {
  id: string;
  revisionNumber: number;
  requestedBy: "CLIENT" | "CEO" | "SYSTEM";
  description: string;
  status: RevisionStatus;
  requestedAt: string;
  completedAt?: string;
}

export interface ProjectFile {
  id: string;
  name: string;
  type: "SOURCE" | "ASSET" | "DOCUMENT" | "DELIVERY" | "OTHER";
  url?: string;
  sizeBytes?: number;
  uploadedAt: string;
}

export interface ProjectMilestone {
  id: string;
  title: string;
  description?: string;
  dueAt?: string;
  completed: boolean;
  completedAt?: string;
}

export interface Project {
  id: string;

  // Related records
  applicationId?: string;
  opportunityId?: string;
  clientId?: string;

  // Basic information
  title: string;
  description: string;
  status: ProjectStatus;
  priority: ProjectPriority;

  // Client requirements
  requirements: ProjectRequirement[];

  // Work management
  tasks: ProjectTask[];
  milestones: ProjectMilestone[];

  // Revisions
  revisions: ProjectRevision[];
  revisionLimit?: number;

  // Files and delivery
  files: ProjectFile[];
  deliveryUrl?: string;
  deliveryNotes?: string;

  // Pricing and payment
  agreedAmount?: number;
  currency?: string;
  paymentStatus:
    | "NOT_REQUIRED"
    | "PENDING"
    | "PARTIAL"
    | "PAID"
    | "VERIFIED";

  // AI workforce
  assignedAgentIds: string[];
  aiAllowed: boolean;
  humanOnly: boolean;

  // Progress
  progressPercent: number;

  // Deadlines
  startAt?: string;
  deadlineAt?: string;
  deliveredAt?: string;
  completedAt?: string;

  // CEO control
  requiresCEOApproval: boolean;
  ceoApproved: boolean;
  ceoNotes?: string;

  // Audit
  createdAt: string;
  updatedAt: string;
  lastAction?: string;
  lastActionAt?: string;
}
