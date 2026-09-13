export type MessageSenderType =
  | "CLIENT"
  | "CEO"
  | "AI_AGENT"
  | "SYSTEM";

export type MessageChannel =
  | "FIVERR"
  | "UPWORK"
  | "EMAIL"
  | "LINKEDIN"
  | "WHATSAPP"
  | "WEBSITE"
  | "OTHER";

export type MessageStatus =
  | "DRAFT"
  | "SENT"
  | "DELIVERED"
  | "READ"
  | "FAILED";

export type MessagePriority =
  | "LOW"
  | "MEDIUM"
  | "HIGH"
  | "URGENT";

export type MessageIntent =
  | "GENERAL"
  | "INQUIRY"
  | "REQUIREMENTS"
  | "PRICING"
  | "NEGOTIATION"
  | "REVISION"
  | "SUPPORT"
  | "INTERVIEW"
  | "FOLLOW_UP"
  | "DELIVERY"
  | "PAYMENT"
  | "OTHER";

export interface MessageAttachment {
  id: string;
  name: string;
  type: string;
  url?: string;
  sizeBytes?: number;
}

export interface MessageReplySuggestion {
  id: string;
  content: string;
  confidence: number;
  reason?: string;
  requiresCEOApproval: boolean;
  createdAt: string;
}

export interface Message {
  id: string;

  // Conversation references
  clientId?: string;
  applicationId?: string;
  projectId?: string;

  // Message information
  senderId?: string;
  senderType: MessageSenderType;
  content: string;
  channel: MessageChannel;
  status: MessageStatus;
  priority: MessagePriority;
  intent: MessageIntent;

  // AI intelligence
  aiAnalyzed: boolean;
  sentiment?: "POSITIVE" | "NEUTRAL" | "NEGATIVE";
  requiresResponse: boolean;
  suggestedReplies?: MessageReplySuggestion[];

  // CEO control
  requiresCEOApproval: boolean;
  approvedByCEO: boolean;
  approvedAt?: string;

  // Attachments
  attachments?: MessageAttachment[];

  // Read state
  read: boolean;
  readAt?: string;

  // Reply tracking
  replyToMessageId?: string;
  repliedAt?: string;

  // Timeline
  createdAt: string;
  updatedAt: string;
}
