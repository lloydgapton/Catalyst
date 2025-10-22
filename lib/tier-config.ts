export interface TierPricing {
  usd: number;
  ngn: number;
}

export interface TierDetails {
  id: 1 | 2 | 3;
  name: "Free Exploration" | "Guided Consultation" | "Premium Hybrid";
  pricing: TierPricing;
  description: string;
  features: string[];
}

export const TIER_DETAILS: TierDetails[] = [
  {
    id: 1,
    name: "Free Exploration",
    pricing: {
      usd: 0,
      ngn: 0
    },
    description: "Start your tech career journey with initial assessments and basic guidance",
    features: [
      "Initial career assessment quiz",
      "Basic 1-page report",
      "General WDC course information",
      "L1 Chatbot support",
      "Path Snapshot (shareable)",
    ]
  },
  {
    id: 2,
    name: "Guided Consultation",
    pricing: {
      usd: 49,
      ngn: 49000
    },
    description: "Get deep, actionable insights and full AI-guided path mapping",
    features: [
      "Full 15+ page Personalized Advisory Report",
      "Skills Gap Analysis",
      "10-minute AI Voice Session",
      "Shareable Career Path Assets",
      "Advanced AI Career Guidance",
      "Personalized Learning Roadmap",
      "Course Recommendations",
      "Industry Insights Access"
    ]
  },
  {
    id: 3,
    name: "Premium Hybrid",
    pricing: {
      usd: 199,
      ngn: 199000
    },
    description: "Experience premium advisory with human expert consultation",
    features: [
      "All Guided Consultation features",
      "30-minute Human Advisor Session",
      "Priority Booking System",
      "Proactive AI monitoring",
      "Follow-up Support",
      "Extended Career Planning",
      "Custom Learning Path",
      "Industry Network Access"
    ]
  }
];