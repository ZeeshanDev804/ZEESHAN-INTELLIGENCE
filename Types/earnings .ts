export type EarningStatus =
  | "PENDING"
  | "PROCESSING"
  | "PAID"
  | "VERIFIED"
  | "FAILED"
  | "REFUNDED"
  | "CANCELLED";

export type EarningSource =
  | "FIVERR"
  | "UPWORK"
  | "DIRECT_CLIENT"
  | "OTHER";

export type PaymentMethod =
  | "BANK"
  | "EASYPaisa"
  | "JAZZCASH"
  | "PAYONEER"
  | "PAYPAL"
  | "OTHER";

export interface EarningFee {
  id: string;
  name: string;
  amount: number;
  currency: string;
}

export interface PaymentVerification {
  verified: boolean;
  verifiedAt?: string;
  referenceId?: string;
  evidenceUrl?: string;
  verifiedBy: "SYSTEM" | "CEO";
  notes?: string;
}

export interface EarningTransaction {
  id: string;

  // Related records
  projectId?: string;
  applicationId?: string;
  clientId?: string;

  // Payment information
  source: EarningSource;
  platformName?: string;
  paymentMethod?: PaymentMethod;

  grossAmount: number;
  currency: string;

  fees: EarningFee[];
  totalFees: number;
  netAmount: number;

  status: EarningStatus;

  // Verification
  verification: PaymentVerification;

  // Dates
  earnedAt?: string;
  paidAt?: string;
  createdAt: string;
  updatedAt: string;

  // CEO notes
  ceoNotes?: string;

  // Audit
  lastAction?: string;
  lastActionAt?: string;
}

export interface EarningsSummary {
  currency: string;

  pending: number;
  processing: number;
  paid: number;
  verified: number;
  failed: number;
  refunded: number;

  totalGross: number;
  totalFees: number;
  totalNet: number;

  lastUpdated: string;
}

export interface PayoutRecord {
  id: string;

  amount: number;
  currency: string;
  paymentMethod: PaymentMethod;

  status:
    | "REQUESTED"
    | "PROCESSING"
    | "COMPLETED"
    | "FAILED"
    | "CANCELLED";

  requestedAt: string;
  processedAt?: string;

  referenceId?: string;
  notes?: string;
}
