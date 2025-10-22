export interface UserProfile {
  id: string;
  name: string;
  email: string;
  tier: UserTier;
  avatarUrl?: string;
}

export type UserTier = {
  level: 1 | 2 | 3;
  name: "Free" | "Professional" | "Enterprise";
  features: string[];
  maxSessions: number;
  price: number;
};

export interface Assessment {
  id: string;
  type: "diagnostic" | "interest";
  title: string;
  description: string;
  status: "not-started" | "in-progress" | "completed";
  completedAt?: Date;
  score?: number;
}

export interface AdvisoryReport {
  id: string;
  title: string;
  createdAt: Date;
  type: "basic" | "comprehensive";
  status: "draft" | "published";
  sections: {
    title: string;
    content: string;
  }[];
}