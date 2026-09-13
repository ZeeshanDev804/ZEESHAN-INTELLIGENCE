export type MemoryCategory =
  | "CEO_PROFILE"
  | "SKILL"
  | "SERVICE"
  | "EXPERIENCE"
  | "EDUCATION"
  | "LANGUAGE"
  | "PORTFOLIO"
  | "DEMO"
  | "PRICING"
  | "PREFERENCE"
  | "APPLICATION"
  | "CLIENT"
  | "PROJECT"
  | "WORKFLOW"
  | "SYSTEM_RULE"
  | "OTHER";

export type MemoryImportance =
  | "LOW"
  | "MEDIUM"
  | "HIGH"
  | "CRITICAL";

export type MemorySource =
  | "CEO"
  | "SYSTEM"
  | "AI_AGENT"
  | "APPLICATION"
  | "CLIENT"
  | "PROJECT"
  | "INTEGRATION";

export type MemoryStatus =
  | "ACTIVE"
  | "ARCHIVED"
  | "PENDING_REVIEW"
  | "DISABLED";

export interface MemoryTag {
  id: string;
  name: string;
}

export interface MemoryItem {
  id: string;

  category: MemoryCategory;
  title: string;
  content: string;

  source: MemorySource;
  sourceId?: string;

  importance: MemoryImportance;
  status: MemoryStatus;

  tags: MemoryTag[];

  verified: boolean;
  verifiedBy?: "CEO" | "SYSTEM";
  verifiedAt?: string;

  expiresAt?: string;

  createdAt: string;
  updatedAt: string;
  lastUsedAt?: string;
}

export interface CEOPreference {
  id: string;

  key: string;
  value: string;

  category:
    | "WORK"
    | "PRICING"
    | "COMMUNICATION"
    | "APPLICATION"
    | "SECURITY"
    | "AI"
    | "OTHER";

  enabled: boolean;

  createdAt: string;
  updatedAt: string;
}

export interface MemoryQuery {
  query: string;

  categories?: MemoryCategory[];
  tags?: string[];

  minimumImportance?: MemoryImportance;

  verifiedOnly?: boolean;
  activeOnly?: boolean;

  limit?: number;
}

export interface MemorySearchResult {
  memoryId: string;

  title: string;
  content: string;

  category: MemoryCategory;

  relevanceScore: number;
  importance: MemoryImportance;

  source: MemorySource;

  createdAt: string;
  updatedAt: string;
}

export interface MemoryUpdateRequest {
  memoryId?: string;

  category: MemoryCategory;

  title: string;
  content: string;

  source: MemorySource;
  sourceId?: string;

  importance: MemoryImportance;

  tags?: string[];

  requiresCEOApproval: boolean;
}

export interface MemoryReview {
  id: string;

  memoryId: string;

  reason: string;

  status:
    | "PENDING"
    | "APPROVED"
    | "REJECTED";

  reviewedBy?: "CEO" | "SYSTEM";

  reviewedAt?: string;

  notes?: string;

  createdAt: string;
}

export interface MemorySnapshot {
  id: string;

  name: string;
  description?: string;

  memoryIds: string[];

  version: string;

  createdAt: string;
  createdBy: "CEO" | "SYSTEM";
}

export interface MemoryStatistics {
  totalMemories: number;

  activeMemories: number;
  archivedMemories: number;
  pendingReview: number;

  verifiedMemories: number;
  unverifiedMemories: number;

  byCategory: Record<MemoryCategory, number>;

  lastUpdated: string;
}

export interface MemoryState {
  memories: MemoryItem[];

  preferences: CEOPreference[];

  reviews: MemoryReview[];

  snapshots: MemorySnapshot[];

  statistics: MemoryStatistics;

  lastUpdated: string;
}
