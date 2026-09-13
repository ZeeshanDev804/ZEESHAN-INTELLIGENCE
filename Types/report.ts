export type ReportType =
  | "DAILY"
  | "NIGHTLY"
  | "WEEKLY"
  | "MONTHLY"
  | "SYSTEM"
  | "CUSTOM";

export type ReportStatus =
  | "GENERATING"
  | "READY"
  | "SENT"
  | "FAILED";

export type ReportPriority =
  | "LOW"
  | "MEDIUM"
  | "HIGH"
  | "URGENT";

export interface ReportOpportunitySummary {
  discovered: number;
  analyzed: number;
  suitable: number;
  highRisk: number;
  reviewRequired: number;
  approved: number;
  applied: number;
}

export interface ReportApplicationSummary {
  prepared: number;
  pendingApproval: number;
  approved: number;
  applied: number;
  replies: number;
  interviews: number;
  selected: number;
  rejected: number;
}

export interface ReportClientSummary {
  newClients: number;
  activeClients: number;
  newMessages: number;
  messagesRequiringResponse: number;
  followUpsDue: number;
}

export interface ReportProjectSummary {
  newProjects: number;
  activeProjects: number;
  testingProjects: number;
  revisionProjects: number;
  deliveredProjects: number;
  completedProjects: number;
  overdueProjects: number;
}

export interface ReportEarningsSummary {
  pending: number;
  processing: number;
  paid: number;
  verified: number;

  totalGross: number;
  totalFees: number;
  totalNet: number;

  currency: string;
}

export interface ReportRiskSummary {
  totalAlerts: number;
  lowRisk: number;
  reviewRequired: number;
  highRisk: number;

  paymentRequests: number;
  suspiciousClients: number;
  unverifiedSources: number;

  criticalAlerts: number;
}

export interface ReportApprovalSummary {
  pending: number;
  approved: number;
  editRequested: number;
  rejected: number;
  expired: number;
}

export interface ReportWorkforceSummary {
  totalAgents: number;
  activeAgents: number;
  readyAgents: number;
  pausedAgents: number;

  tasksStarted: number;
  tasksCompleted: number;
  tasksFailed: number;

  successRate: number;
}

export interface ReportSystemSummary {
  systemStatus:
    | "ONLINE"
    | "DEGRADED"
    | "OFFLINE"
    | "MAINTENANCE";

  integrationsConnected: number;
  integrationsWithErrors: number;

  errors: number;
  retries: number;
  recoveredOperations: number;

  aiRequests: number;
  estimatedAICost?: number;
  currency?: string;
}

export interface ReportFollowUp {
  id: string;

  title: string;
  description: string;

  relatedType:
    | "OPPORTUNITY"
    | "APPLICATION"
    | "CLIENT"
    | "PROJECT"
    | "INTERVIEW"
    | "PAYMENT"
    | "OTHER";

  relatedId?: string;

  priority: ReportPriority;

  dueAt?: string;

  requiresCEOAction: boolean;

  completed: boolean;
}

export interface ReportHighlight {
  id: string;

  title: string;
  description: string;

  type:
    | "SUCCESS"
    | "WARNING"
    | "RISK"
    | "OPPORTUNITY"
    | "SYSTEM"
    | "EARNING"
    | "CLIENT"
    | "PROJECT";

  priority: ReportPriority;

  relatedId?: string;

  createdAt: string;
}

export interface ReportRecommendation {
  id: string;

  title: string;
  recommendation: string;

  reason: string;

  priority: ReportPriority;

  expectedImpact?: string;

  requiresCEOApproval: boolean;

  createdAt: string;
}

export interface Report {
  id: string;

  type: ReportType;

  title: string;

  periodStart: string;
  periodEnd: string;

  status: ReportStatus;

  priority: ReportPriority;

  opportunities: ReportOpportunitySummary;
  applications: ReportApplicationSummary;
  clients: ReportClientSummary;
  projects: ReportProjectSummary;
  earnings: ReportEarningsSummary;
  risks: ReportRiskSummary;
  approvals: ReportApprovalSummary;
  workforce: ReportWorkforceSummary;
  system: ReportSystemSummary;

  highlights: ReportHighlight[];

  followUps: ReportFollowUp[];

  recommendations: ReportRecommendation[];

  executiveSummary?: string;

  generatedBy?: string;

  generatedAt: string;

  sentAt?: string;

  errorMessage?: string;
}

export interface ReportSchedule {
  id: string;

  name: string;

  type: ReportType;

  enabled: boolean;

  timezone?: string;

  recipients?: string[];

  includeEarnings: boolean;
  includeRisks: boolean;
  includeApplications: boolean;
  includeProjects: boolean;
  includeClients: boolean;
  includeWorkforce: boolean;
  includeSystemHealth: boolean;

  createdAt: string;
  updatedAt: string;
}

export interface ReportState {
  reports: Report[];

  schedules: ReportSchedule[];

  latestDailyReportId?: string;
  latestNightlyReportId?: string;

  lastGeneratedAt?: string;

  lastUpdated: string;
}
