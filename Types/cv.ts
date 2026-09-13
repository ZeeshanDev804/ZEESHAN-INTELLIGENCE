export type CVDocumentType =
  | "CV"
  | "RESUME"
  | "COVER_LETTER"
  | "PROPOSAL"
  | "PORTFOLIO"
  | "OTHER";

export type CVVersionStatus =
  | "DRAFT"
  | "READY"
  | "ACTIVE"
  | "ARCHIVED";

export interface CVExperience {
  id: string;
  jobTitle: string;
  company?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  current: boolean;
  description: string;
  skills: string[];
}

export interface CVEducation {
  id: string;
  institution: string;
  qualification: string;
  field?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
}

export interface CVLanguage {
  id: string;
  language: string;
  level: "BASIC" | "INTERMEDIATE" | "ADVANCED" | "NATIVE";
}

export interface CVSkill {
  name: string;
  level: "BEGINNER" | "INTERMEDIATE" | "ADVANCED" | "EXPERT";
  yearsOfExperience?: number;
}

export interface CVDocument {
  id: string;
  type: CVDocumentType;
  name: string;
  url?: string;
  version?: string;
  status: CVVersionStatus;
  createdAt: string;
  updatedAt: string;
}

export interface CVProfile {
  id: string;

  // Personal information
  fullName: string;
  professionalTitle?: string;
  location?: string;
  email?: string;
  phone?: string;
  website?: string;
  linkedinUrl?: string;
  githubUrl?: string;

  // Professional profile
  professionalSummary: string;
  skills: CVSkill[];
  services: string[];

  // Background
  experience: CVExperience[];
  education: CVEducation[];
  languages: CVLanguage[];

  // Portfolio
  portfolioDemoIds: string[];

  // Documents
  documents: CVDocument[];

  // Version control
  activeVersion?: string;
  version: string;

  createdAt: string;
  updatedAt: string;
}

export interface CVCustomization {
  id: string;

  cvProfileId: string;
  opportunityId?: string;
  applicationId?: string;

  // AI customization
  targetRole?: string;
  targetCompany?: string;
  selectedSkills: string[];
  highlightedExperienceIds: string[];
  selectedDemoIds: string[];

  customizedSummary?: string;
  customizedContent?: string;

  // AI reasoning
  changes: string[];
  reasoning?: string;

  // CEO control
  requiresCEOApproval: boolean;
  approvedByCEO: boolean;
  approvedAt?: string;
  ceoNotes?: string;

  createdAt: string;
  updatedAt: string;
}

export interface CoverLetter {
  id: string;

  opportunityId?: string;
  applicationId?: string;
  cvProfileId?: string;

  title: string;
  content: string;

  generatedByAI: boolean;
  requiresCEOApproval: boolean;
  approvedByCEO: boolean;

  createdAt: string;
  updatedAt: string;
}

export interface CVGenerationRequest {
  id: string;

  opportunityId?: string;
  applicationId?: string;

  targetRole: string;
  requiredSkills: string[];
  preferredSkills?: string[];

  selectedExperienceIds?: string[];
  selectedDemoIds?: string[];

  includeCoverLetter: boolean;
  includePortfolio: boolean;

  status:
    | "PENDING"
    | "GENERATING"
    | "READY"
    | "FAILED";

  createdAt: string;
  completedAt?: string;
  errorMessage?: string;
}
