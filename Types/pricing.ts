export type PricingStrategy =
  | "BUDGET"
  | "STANDARD"
  | "PREMIUM"
  | "CUSTOM";

export type PricingConfidence =
  | "LOW"
  | "MEDIUM"
  | "HIGH";

export interface PriceOption {
  amount: number;
  currency: string;
  label: string;
  description?: string;
}

export interface PlatformFee {
  platform: string;
  percentage?: number;
  fixedAmount?: number;
  currency?: string;
}

export interface PricingAnalysis {
  id: string;

  // Related records
  opportunityId?: string;
  clientId?: string;
  projectId?: string;
  applicationId?: string;

  // Budget
  clientBudgetMin?: number;
  clientBudgetMax?: number;
  budgetCurrency?: string;

  // AI recommendation
  strategy: PricingStrategy;
  recommendedPrice: number;
  recommendedCurrency: string;
  minimumPrice: number;
  targetPrice: number;
  maximumPrice: number;

  // Alternatives
  options: PriceOption[];

  // Fees and net earnings
  platformFees: PlatformFee[];
  estimatedTotalFees: number;
  estimatedNetEarning: number;

  // AI reasoning
  confidence: PricingConfidence;
  reasoning: string[];
  marketFactors?: string[];
  riskFactors?: string[];

  // CEO control
  requiresCEOApproval: boolean;
  approvedByCEO: boolean;
  approvedPrice?: number;
  ceoNotes?: string;

  // Timeline
  createdAt: string;
  updatedAt: string;
  }
