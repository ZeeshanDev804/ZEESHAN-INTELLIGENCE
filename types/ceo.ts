export interface CEOProfile {
  id: string;
  name: string;
  role: "FOUNDER_AND_CEO";

  location: string;
  country: string;

  headline: string;
  bio: string;

  skills: string[];
  services: string[];

  experience: ExperienceItem[];
  education: EducationItem[];

  languages: LanguageItem[];

  portfolio: PortfolioItem[];
  demos: DemoItem[];

  preferredWorkTypes: string[];
  preferredPlatforms: string[];

  minimumBudget?: BudgetPreference;
  pricingPreferences?: PricingPreferences;

  availability: "AVAILABLE" | "LIMITED" | "UNAVAILABLE";

  cv?: CVProfile;

  createdAt: string;
  updatedAt: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  company?: string;
  description: string;
  startDate?: string;
  endDate?: string;
  current: boolean;
}

export interface EducationItem {
  id: string;
  qualification: string;
  institution?: string;
  year?: string;
}

export interface LanguageItem {
  name: string;
  level: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  url?: string;
  imageUrl?: string;
  category: string;
  technologies: string[];
}

export interface DemoItem {
  id: string;
  name: string;
  description: string;
  url?: string;
  category: string;
  technologies: string[];
  tags: string[];
  available: boolean;
}

export interface BudgetPreference {
  amount: number;
  currency: string;
  period?: "PROJECT" | "HOUR" | "MONTH";
}

export interface PricingPreferences {
  currency: string;
  hourlyRate?: number;
  projectMinimum?: number;
  negotiationAllowed: boolean;
  requiresCEOApproval: boolean;
}

export interface CVProfile {
  id: string;
  title: string;
  summary: string;
  skills: string[];
  experience: ExperienceItem[];
  education: EducationItem[];
  languages: LanguageItem[];
  fileUrl?: string;
  version: number;
  updatedAt: string;
}
