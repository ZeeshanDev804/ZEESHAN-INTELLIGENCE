export type AnalyticsPeriod =
  | "DAY"
  | "WEEK"
  | "MONTH"
  | "QUARTER"
  | "YEAR"
  | "ALL_TIME";

export interface OpportunityAnalytics {
  total: number;
  suitable: number;
  highRisk: number;
  reviewRequired: number;
  approved: number;
  rejected: number;
}

export interface ApplicationAnalytics {
  total: number;
  prepared: number;
  approved: number;
  applied: number;
  replies: number;
  interviews: number;
  selected: number;
  rejected: number;
  completed: number;
}

export interface ProjectAnalytics {
  total: number;
  active: number;
  testing: number;
  revision: number;
  delivered: number;
  completed: number;
  cancelled: number;
}

export interface EarningsAnalytics {
  pending: number;
  paid: number;
  verified: number;
  totalGross: number;
  totalFees: number;
  totalNet: number;
  currency: string;
}

export interface WorkforceAnalytics {
  totalAgents: number;
  activeAgents: number;
  readyAgents: number;
  pausedAgents: number;
  tasksCompleted: number;
  tasksFailed: number;
  successRate: number;
}

export interface PlatformAnalytics {
  platform: string;
  opportunities: number;
  applications: number;
  interviews: number;
  selected: number;
  verifiedEarnings: number;
  currency: string;
}

export interface CategoryAnalytics {
  category: string;
  opportunities: number;
  applications: number;
  selected: number;
  verifiedEarnings: number;
  currency: string;
}

export interface AnalyticsSnapshot {
  period: AnalyticsPeriod;
  startDate: string;
  endDate: string;

  opportunities: OpportunityAnalytics;
  applications: ApplicationAnalytics;
  projects: ProjectAnalytics;
  earnings: EarningsAnalytics;
  workforce: WorkforceAnalytics;

  platforms: PlatformAnalytics[];
  categories: CategoryAnalytics[];

  lastUpdated: string;
}
