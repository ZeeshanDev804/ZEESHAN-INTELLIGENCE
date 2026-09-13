export type AuditActorType =
  | "CEO"
  | "AI_AGENT"
  | "SYSTEM"
  | "CLIENT"
  | "INTEGRATION";

export type AuditAction =
  | "CREATE"
  | "UPDATE"
  | "DELETE"
  | "APPROVE"
  | "EDIT"
  | "REJECT"
  | "APPLY"
  | "SEND"
  | "PAY"
  | "VERIFY"
  | "LOGIN"
  | "LOGOUT"
  | "START"
  | "COMPLETE"
  | "FAIL"
  | "RETRY"
  | "OTHER";

export type AuditEntityType =
  | "OPPORTUNITY"
  | "APPLICATION"
  | "CLIENT"
  | "MESSAGE"
  | "PROJECT"
  | "TASK"
  | "PAYMENT"
  | "EARNING"
  | "INTERVIEW"
  | "APPROVAL"
  | "AGENT"
  | "SYSTEM"
  | "USER"
  | "OTHER";

export type AuditResult =
  | "SUCCESS"
  | "FAILED"
  | "BLOCKED"
  | "PENDING";

export interface AuditChange {
  field: string;
  previousValue?: string;
  newValue?: string;
}

export interface AuditLog {
  id: string;

  // Who performed the action
  actorId?: string;
  actorName?: string;
  actorType: AuditActorType;

  // What happened
  action: AuditAction;
  entityType: AuditEntityType;
  entityId?: string;

  title: string;
  description: string;

  // Result
  result: AuditResult;
  errorMessage?: string;

  // Changes
  changes?: AuditChange[];

  // Related records
  opportunityId?: string;
  applicationId?: string;
  clientId?: string;
  projectId?: string;
  messageId?: string;
  approvalId?: string;
  earningId?: string;
  interviewId?: string;

  // Security / trace information
  sessionId?: string;
  requestId?: string;
  ipAddress?: string;

  // Timing
  createdAt: string;
}
