export type InterviewStatus =
  | "REQUESTED"
  | "SCHEDULED"
  | "PREPARING"
  | "READY"
  | "COMPLETED"
  | "CANCELLED"
  | "NO_SHOW"
  | "RESCHEDULED";

export type InterviewType =
  | "VIDEO"
  | "AUDIO"
  | "PHONE"
  | "CHAT"
  | "IN_PERSON"
  | "OTHER";

export type InterviewOutcome =
  | "PENDING"
  | "PASSED"
  | "FAILED"
  | "SELECTED"
  | "REJECTED"
  | "FOLLOW_UP"
  | "UNKNOWN";

export type PreparationStatus =
  | "NOT_STARTED"
  | "IN_PROGRESS"
  | "READY"
  | "COMPLETED";

export interface InterviewQuestion {
  id: string;
  question: string;
  category:
    | "GENERAL"
    | "TECHNICAL"
    | "BEHAVIORAL"
    | "PROJECT"
    | "ROLE"
    | "CLIENT"
    | "OTHER";
  suggestedAnswer?: string;
  keyPoints?: string[];
  prepared: boolean;
}

export interface InterviewPreparation {
  status: PreparationStatus;
  questions: InterviewQuestion[];
  strengths?: string[];
  weakAreas?: string[];
  preparationNotes?: string;
  generatedByAgentId?: string;
  generatedAt?: string;
  updatedAt?: string;
}

export interface InterviewFollowUp {
  required: boolean;
  message?: string;
  scheduledAt?: string;
  sentAt?: string;
  completed: boolean;
}

export interface Interview {
  id: string;

  // Related records
  applicationId?: string;
  opportunityId?: string;
  clientId?: string;
  projectId?: string;

  // Interview details
  title: string;
  type: InterviewType;
  status: InterviewStatus;

  scheduledAt?: string;
  durationMinutes?: number;
  timezone?: string;

  // Meeting information
  platform?: string;
  meetingUrl?: string;
  contactName?: string;

  // Preparation
  preparation: InterviewPreparation;

  // CEO control
  requiresCEOApproval: boolean;
  approvedByCEO: boolean;
  ceoNotes?: string;

  // Result
  outcome: InterviewOutcome;
  interviewerFeedback?: string;
  resultNotes?: string;

  // Follow-up
  followUp: InterviewFollowUp;

  // Timeline
  createdAt: string;
  updatedAt: string;
  completedAt?: string;
}
