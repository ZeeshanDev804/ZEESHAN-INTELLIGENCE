export type ApplicationStatus =
  | "SAVED"
  | "ANALYZING"
  | "PREPARED"
  | "PENDING_APPROVAL"
  | "APPROVED"
  | "APPLIED"
  | "REPLY_RECEIVED"
  | "INTERVIEW"
  | "SELECTED"
  | "REJECTED"
  | "WITHDRAWN"
  | "COMPLETED";

export type ApplicationPriority = "LOW" | "MEDIUM" | "HIGH" | "URGENT";

export type ApplicationSource =
  | "JOB_BOARD"
  | "FREELANCE_PLATFORM"
  | "DIRECT_CLIENT"
  | "COMPANY"
  | "SOCIAL_MEDIA"
  | "OTHER";

export type CEOAction =
  | "PENDING"
  | "APPROVE"
  | "EDIT"
  | "REJECT";

export interface ApplicationDocument {
  id: string;
  type: "CV" | "COVER_LETTER" | "PROPOSAL" | "PORTFOLIO" | "OTHER";
  name: string;
  version?: string;
  url?: string;
  createdAt: string;
}

export interface ApplicationMessage {
  id: string;
  sender: "CLIENT" | "PLATFORM" | "SYSTEM" | "CEO";
  message: string;
  receivedAt: string;
  requiresResponse: boolean;
}

export interface ApplicationInterview {
  scheduled: boolean;
  dateTime?: string;
  platform?: string;
  meetingUrl?: string;
  notes?: string;
  preparationStatus?: "NOT_STARTED" | "READY" | "COMPLETED";
}

export interface Application {
  id: string;

  // Opportunity reference
  opportunityId: string;
  title: string;
  companyOrClient: string;
  source: ApplicationSource;
  sourceUrl?: string;

  // Matching
  matchScore: number;
  matchedSkills: string[];
  missingSkills?: string[];

  // Application content
  proposal?: string;
  coverLetter?: string;
  selectedCVId?: string;
  selectedDemoIds?: string[];
  documents?: ApplicationDocument[];

  // Pricing
  proposedAmount?: number;
  currency?: string;
  pricingNote?: string;

  // Payment requirement
  paymentRequired: boolean;
  paymentAmount?: number;
  paymentCurrency?: string;
  paymentApprovedByCEO: boolean;

  // AI / human rules
  aiAllowed: boolean;
  humanOnly: boolean;

  // CEO control
  approvalStatus: CEOAction;
  approvedAt?: string;
  rejectedAt?: string;
  rejectionReason?: string;
  ceoNotes?: string;

  // Application state
  status: ApplicationStatus;
  priority: ApplicationPriority;

  // Communication
  messages: ApplicationMessage[];
  unreadMessageCount: number;

  // Interview
  interview?: ApplicationInterview;

  // Timeline
  createdAt: string;
  updatedAt: string;
  appliedAt?: string;
  selectedAt?: string;
  rejectedAt?: string;
  completedAt?: string;

  // Follow-up
  followUpRequired: boolean;
  nextFollowUpAt?: string;

  // Audit
  lastAction?: string;
  lastActionAt?: string;
}
