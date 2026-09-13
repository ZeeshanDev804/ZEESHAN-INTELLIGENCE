export type SearchEntityType =
  | "OPPORTUNITY"
  | "CLIENT"
  | "PROJECT"
  | "APPLICATION"
  | "MESSAGE"
  | "DEMO"
  | "OTHER";

export type SearchSource =
  | "JOB_BOARD"
  | "FREELANCE_PLATFORM"
  | "DIRECT_CLIENT"
  | "COMPANY"
  | "SOCIAL_MEDIA"
  | "WEBSITE"
  | "OTHER";

export type SearchWorkType =
  | "AI_JOB"
  | "AI_TRAINING"
  | "DATA_ANNOTATION"
  | "AI_EVALUATION"
  | "SOFTWARE"
  | "WEBSITE"
  | "AI_AGENT"
  | "CHATBOT"
  | "DESIGN"
  | "DATA"
  | "CONTENT"
  | "AUTOMATION"
  | "OTHER";

export type SearchRemoteType =
  | "REMOTE"
  | "HYBRID"
  | "ONSITE"
  | "UNKNOWN";

export type SearchSortBy =
  | "RELEVANCE"
  | "NEWEST"
  | "OLDEST"
  | "HIGHEST_BUDGET"
  | "LOWEST_BUDGET"
  | "HIGHEST_MATCH"
  | "LOWEST_RISK"
  | "DEADLINE";

export type SearchOrder = "ASC" | "DESC";

export interface SearchBudgetFilter {
  minimum?: number;
  maximum?: number;
  currency?: string;
}

export interface SearchDateFilter {
  from?: string;
  to?: string;
}

export interface SearchRiskFilter {
  levels?: Array<"LOW" | "REVIEW" | "HIGH">;
  maximumScore?: number;
}

export interface SearchMatchFilter {
  minimumScore?: number;
}

export interface SearchPaymentFilter {
  paymentRequired?: boolean;
  maximumPayment?: number;
  currency?: string;
}

export interface SearchFilter {
  countries?: string[];
  remoteTypes?: SearchRemoteType[];

  sources?: SearchSource[];
  workTypes?: SearchWorkType[];

  skills?: string[];
  requiredSkills?: string[];

  budget?: SearchBudgetFilter;
  deadline?: SearchDateFilter;

  risk?: SearchRiskFilter;
  match?: SearchMatchFilter;
  payment?: SearchPaymentFilter;

  aiAllowed?: boolean;
  humanOnly?: boolean;

  sourceVerified?: boolean;
  clientVerified?: boolean;

  statuses?: string[];
}

export interface SearchQuery {
  id: string;

  query?: string;

  entityType: SearchEntityType;

  filters: SearchFilter;

  sortBy: SearchSortBy;
  order: SearchOrder;

  page: number;
  pageSize: number;

  createdAt: string;
  updatedAt: string;
}

export interface SearchResult {
  id: string;

  entityType: SearchEntityType;

  title: string;
  description?: string;

  relevanceScore?: number;
  matchScore?: number;
  riskScore?: number;

  source?: SearchSource;
  sourceUrl?: string;

  country?: string;
  remoteType?: SearchRemoteType;

  skills?: string[];

  budget?: SearchBudgetFilter;

  deadline?: string;

  paymentRequired?: boolean;

  sourceVerified?: boolean;
  clientVerified?: boolean;

  duplicateGroupId?: string;

  createdAt: string;
  updatedAt: string;
}

export interface SearchPagination {
  page: number;
  pageSize: number;

  totalResults: number;
  totalPages: number;

  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface SearchResponse {
  queryId: string;

  results: SearchResult[];

  pagination: SearchPagination;

  searchTimeMs?: number;

  sourcesChecked?: number;

  duplicatesDetected?: number;

  createdAt: string;
}

export interface DuplicateCandidate {
  id: string;

  entityType: SearchEntityType;

  title: string;

  source?: SearchSource;
  sourceUrl?: string;

  similarityScore: number;

  matchingFields: string[];

  duplicateGroupId?: string;

  createdAt: string;
}

export interface DuplicateGroup {
  id: string;

  canonicalResultId?: string;

  memberIds: string[];

  similarityScore: number;

  status:
    | "DETECTED"
    | "REVIEW_REQUIRED"
    | "MERGED"
    | "IGNORED";

  reason?: string;

  createdAt: string;
  updatedAt: string;
}

export interface SearchSourceStatus {
  source: SearchSource;

  name: string;

  enabled: boolean;

  available: boolean;

  lastCheckedAt?: string;

  lastSuccessfulSearchAt?: string;

  errorMessage?: string;

  resultsFound: number;
}

export interface SearchState {
  activeQuery?: SearchQuery;

  lastResponse?: SearchResponse;

  duplicateGroups: DuplicateGroup[];

  sourceStatuses: SearchSourceStatus[];

  recentQueries: SearchQuery[];

  lastUpdated: string;
}
