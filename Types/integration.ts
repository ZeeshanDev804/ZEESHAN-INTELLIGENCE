export type IntegrationCategory =
  | "AI"
  | "OPPORTUNITY_SOURCE"
  | "FREELANCE_PLATFORM"
  | "EMAIL"
  | "NOTIFICATION"
  | "DATABASE"
  | "PAYMENT"
  | "STORAGE"
  | "AUTHENTICATION"
  | "OTHER";

export type IntegrationStatus =
  | "CONNECTED"
  | "DISCONNECTED"
  | "CONNECTING"
  | "ERROR"
  | "DISABLED"
  | "NOT_CONFIGURED";

export type IntegrationAuthType =
  | "API_KEY"
  | "OAUTH"
  | "TOKEN"
  | "PASSWORD"
  | "NONE"
  | "OTHER";

export type IntegrationEnvironment =
  | "DEVELOPMENT"
  | "TEST"
  | "PRODUCTION";

export type IntegrationHealth =
  | "HEALTHY"
  | "DEGRADED"
  | "UNHEALTHY"
  | "UNKNOWN";

export interface IntegrationUsage {
  requestsToday: number;
  requestsThisMonth: number;
  successfulRequests: number;
  failedRequests: number;
  tokensUsed?: number;
  estimatedCost?: number;
  currency?: string;
  lastUsedAt?: string;
}

export interface IntegrationError {
  code?: string;
  message: string;
  occurredAt: string;
  recoverable: boolean;
  retryCount: number;
  lastRetryAt?: string;
}

export interface IntegrationSync {
  enabled: boolean;
  lastSyncAt?: string;
  nextSyncAt?: string;
  itemsProcessed?: number;
  itemsAdded?: number;
  itemsUpdated?: number;
  itemsSkipped?: number;
  lastSyncStatus?: "SUCCESS" | "PARTIAL" | "FAILED";
  errorMessage?: string;
}

export interface IntegrationPermission {
  read: boolean;
  write: boolean;
  send: boolean;
  pay: boolean;
  delete: boolean;
}

export interface Integration {
  id: string;
  name: string;
  provider: string;
  category: IntegrationCategory;
  description?: string;

  status: IntegrationStatus;
  health: IntegrationHealth;

  authType: IntegrationAuthType;
  environment: IntegrationEnvironment;

  enabled: boolean;
  verified: boolean;

  permissions: IntegrationPermission;

  usage?: IntegrationUsage;
  sync?: IntegrationSync;
  lastError?: IntegrationError;

  baseUrl?: string;
  documentationUrl?: string;

  connectedAt?: string;
  disconnectedAt?: string;
  lastCheckedAt?: string;

  requiresCEOApproval: boolean;
  ceoApproved: boolean;

  createdAt: string;
  updatedAt: string;
  lastAction?: string;
  lastActionAt?: string;
}

export interface IntegrationConnectionRequest {
  id: string;
  integrationId: string;
  requestedBy: "CEO" | "SYSTEM" | "AI_AGENT";

  authType: IntegrationAuthType;
  environment: IntegrationEnvironment;

  requestedPermissions: IntegrationPermission;

  reason?: string;

  status:
    | "PENDING"
    | "APPROVED"
    | "REJECTED"
    | "CONNECTED"
    | "FAILED";

  requiresCEOApproval: boolean;
  approvedByCEO: boolean;
  approvedAt?: string;
  rejectedAt?: string;
  rejectionReason?: string;

  createdAt: string;
  updatedAt: string;
}

export interface IntegrationHealthCheck {
  id: string;
  integrationId: string;

  status: IntegrationHealth;

  responseTimeMs?: number;
  statusCode?: number;

  checkedAt: string;

  errorMessage?: string;
  details?: string;
}

export interface IntegrationLog {
  id: string;
  integrationId: string;

  action:
    | "CONNECT"
    | "DISCONNECT"
    | "SYNC"
    | "REQUEST"
    | "SEND"
    | "PAY"
    | "VERIFY"
    | "ERROR"
    | "RETRY";

  status: "SUCCESS" | "FAILED" | "BLOCKED" | "PENDING";

  message: string;

  requestId?: string;
  errorCode?: string;

  createdAt: string;
}

export interface IntegrationSummary {
  total: number;
  connected: number;
  disconnected: number;
  errors: number;
  healthy: number;
  needsCEOApproval: number;

  totalRequestsToday: number;
  totalRequestsThisMonth: number;

  estimatedCostToday?: number;
  estimatedCostThisMonth?: number;
  currency?: string;

  lastUpdated: string;
}
