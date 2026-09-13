export type DemoType =
  | "WEBSITE"
  | "AI_AGENT"
  | "CHATBOT"
  | "AI_TOOL"
  | "DASHBOARD"
  | "AUTOMATION"
  | "DESIGN"
  | "OTHER";

export type DemoStatus =
  | "DRAFT"
  | "READY"
  | "LIVE"
  | "ARCHIVED";

export type DemoVisibility =
  | "PRIVATE"
  | "PUBLIC"
  | "CLIENT_ONLY";

export type DemoAssetType =
  | "IMAGE"
  | "VIDEO"
  | "SCREENSHOT"
  | "DOCUMENT"
  | "OTHER";

export interface DemoAsset {
  id: string;
  type: DemoAssetType;
  name: string;
  url: string;
  thumbnailUrl?: string;
  description?: string;
  createdAt: string;
}

export interface DemoVersion {
  id: string;
  version: string;
  changes?: string[];
  createdAt: string;
  isCurrent: boolean;
}

export interface Demo {
  id: string;

  // Basic information
  name: string;
  title: string;
  description: string;
  type: DemoType;
  status: DemoStatus;
  visibility: DemoVisibility;

  // Links
  liveUrl?: string;
  repositoryUrl?: string;

  // Skills and matching
  skills: string[];
  services: string[];
  suitableFor: string[];

  // Portfolio assets
  assets: DemoAsset[];

  // Versions
  versions: DemoVersion[];
  currentVersion?: string;

  // Client / opportunity matching
  relatedOpportunityIds?: string[];
  relatedProjectIds?: string[];

  // Presentation
  featured: boolean;
  displayOrder?: number;

  // Analytics
  views?: number;
  selectedCount?: number;

  // Audit
  createdAt: string;
  updatedAt: string;
  lastUpdatedBy?: string;
}
