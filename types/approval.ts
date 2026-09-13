export type ApprovalAction =
  | "APPROVE"
  | "EDIT"
  | "REJECT";

export type ApprovalStatus =
  | "PENDING"
  | "APPROVED"
  | "EDIT_REQUESTED"
  | "REJECTED"
  | "EXPIRED"
  | "CANCELLED";

export type ApprovalEntityType =
  | "OPPORTUNITY"
  | "APPLICATION"
  | "CLIENT"
  | "MESSAGE"
  | "PROJECT"
  | "PAYMENT"
  | "PROPOSAL"
  | "CV"
  | "DEMO"
  | "DELIVERY"
  | "OTHER";

export type ApprovalPriority =
  | "LOW"
  | "MEDIUM"
  | "HIGH"
  | "URGENT";

export interface ApprovalChange {
  field: string;
  currentValue?: string;
  proposedValue?: string;
  reason?: string;
}

export interface ApprovalRiskSummary {
  level: "LOW" | "REVIEW" | "HIGH";
  score: number;
  warningCount: number;
  paymentRequired: boolean;
  paymentAmount?: number;
  paymentCurrency?: string;
}

export interface ApprovalDecision {
  action: ApprovalAction;
  decidedAt: string;
  decidedBy: "CEO";
  notes?: string;
}

export interface Approval {
  id: string;

  // What needs approval
  entityType: ApprovalEntityType;
  entityId: string;
  title: string;
  description: string;

  // AI proposal
  proposedAction: string;
  proposedByAgentId?: string;
  proposedByAgentName?: string;
  proposedAt: string;

  // Changes suggested by AI
  changes?: ApprovalChange[];

  // Risk and payment
  risk?: ApprovalRiskSummary;

  // Approval state
  status: ApprovalStatus;
  priority: ApprovalPriority;

  // CEO decision
  decision?: ApprovalDecision;

  // Deadline / expiry
  expiresAt?: string;

  // Related records
  opportunityId?: string;
  applicationId?: string;
  clientId?: string;
  projectId?: string;
  messageId?: string;

  // Audit
  createdAt: string;
  updatedAt: string;
  lastAction?: string;
  lastActionAt?: string;
}
