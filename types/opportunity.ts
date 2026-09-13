export type OpportunityType =
  | "AI_JOB"
  | "SOFTWARE_JOB"
  | "FREELANCE_PROJECT"
  | "CLIENT_REQUEST"
  | "AI_TRAINING"
  | "DATA_ANNOTATION"
  | "AI_EVALUATION"
  | "WEBSITE_PROJECT"
  | "AI_AGENT_PROJECT"
  | "CHATBOT_PROJECT"
  | "OTHER";

export type OpportunityStatus =
  | "NEW"
  | "ANALYZING"
  | "MATCHED"
  | "REVIEW"
  | "APPROVED"
  | "APPLIED"
  | "REPLIED"
  | "INTERVIEW"
  | "SELECTED"
  | "REJECTED"
  | "COMPLETED"
  | "SKIPPED";

export type RiskLevel = "LOW" | "REVIEW" | "HIGH";

export type ApprovalStatus =
  | "NOT_REQUIRED"
  | "PENDING"
  | "APPROVED"
  | "REJECTED";

export interface Opportunity {
  id: string;
  title: string;
  companyOrClient: string;
  description: string;

  type: OpportunityType;
  platform: string;
  sourceUrl: string;

  country?: string;
  remote: boolean;

  skills: string[];
  requiredSkills: string[];

  budgetMin?: number;
  budgetMax?: number;
  currency?: string;

  paymentRequired: boolean;
  paymentAmount?: number;
  paymentCurrency?: string;
  paymentReason?: string;

  riskLevel: RiskLevel;
  riskScore: number;
  riskReasons: string[];

  matchScore: number;

  aiAllowed?: boolean;
  humanOnly?: boolean;

  deadline?: string;
  postedAt?: string;

  status: OpportunityStatus;
  approvalStatus: ApprovalStatus;

  recommendedAction?: string;

  duplicateGroupId?: string;

  sourceVerified: boolean;
  lastCheckedAt?: string;

  createdAt: string;
  updatedAt: string;
}
