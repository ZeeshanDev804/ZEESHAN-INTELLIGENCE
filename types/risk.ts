export type RiskLevel = "LOW" | "REVIEW" | "HIGH";

export type RiskSignalType =
  | "PAYMENT_REQUEST"
  | "UNREALISTIC_PAYMENT"
  | "SUSPICIOUS_CLIENT"
  | "UNVERIFIED_SOURCE"
  | "OFF_PLATFORM_CONTACT"
  | "IDENTITY_CONCERN"
  | "JOB_REQUIREMENT_CONCERN"
  | "SUSPICIOUS_LINK"
  | "URGENT_PRESSURE"
  | "OTHER";

export interface RiskSignal {
  id: string;
  type: RiskSignalType;
  severity: "LOW" | "MEDIUM" | "HIGH";
  title: string;
  description: string;
  evidence?: string;
}

export interface PaymentRequirement {
  required: boolean;
  amount?: number;
  currency?: string;
  reason?: string;
  refundable?: boolean;
  verified: boolean;
  riskLevel: RiskLevel;
  requiresCEOApproval: boolean;
}

export interface RiskAssessment {
  opportunityId: string;

  level: RiskLevel;
  score: number;

  signals: RiskSignal[];

  payment: PaymentRequirement;

  sourceVerified: boolean;
  clientVerified: boolean;

  recommendation:
    | "PROCEED"
    | "REVIEW"
    | "SKIP";

  explanation: string;

  checkedAt: string;
}
