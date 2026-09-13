export type NotificationType =
  | "OPPORTUNITY"
  | "RISK_ALERT"
  | "PAYMENT"
  | "APPROVAL"
  | "CLIENT_MESSAGE"
  | "INTERVIEW"
  | "PROJECT"
  | "DEADLINE"
  | "EARNINGS"
  | "SYSTEM"
  | "SECURITY";

export type NotificationPriority =
  | "LOW"
  | "MEDIUM"
  | "HIGH"
  | "URGENT";

export type NotificationStatus =
  | "UNREAD"
  | "READ"
  | "ARCHIVED";

export interface NotificationAction {
  label: string;
  action:
    | "OPEN"
    | "APPROVE"
    | "EDIT"
    | "REJECT"
    | "REVIEW"
    | "DISMISS";
  targetId?: string;
}

export interface Notification {
  id: string;

  // Notification information
  type: NotificationType;
  title: string;
  message: string;
  priority: NotificationPriority;
  status: NotificationStatus;

  // Related records
  opportunityId?: string;
  applicationId?: string;
  clientId?: string;
  projectId?: string;
  approvalId?: string;
  interviewId?: string;
  earningId?: string;

  // Action
  requiresAction: boolean;
  action?: NotificationAction;

  // Timing
  createdAt: string;
  readAt?: string;
  expiresAt?: string;

  // Source
  sourceAgentId?: string;
  sourceAgentName?: string;

  // CEO control
  requiresCEOApproval: boolean;

  // Audit
  lastAction?: string;
  lastActionAt?: string;
  }
