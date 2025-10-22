"use client";

import TierCard from "@/components/dashboard/TierCard";
import { TIER_DETAILS } from "@/lib/tier-config";

interface TierFeature {
  name: string;
  description: string;
  tiers: {
    free: boolean;
    professional: boolean;
    enterprise: boolean;
  };
}

// Feature list intentionally unused by the current UI; left for future expansion
const _features: TierFeature[] = [
  {
    name: "Initial Career Assessment",
    description: "Comprehensive assessment of your career interests and goals",
    tiers: {
      free: true,
      professional: true,
      enterprise: true,
    },
  },
  {
    name: "Basic Report",
    description: "1-page summary of your career path options",
    tiers: {
      free: true,
      professional: true,
      enterprise: true,
    },
  },
  {
    name: "L1 Chatbot Support",
    description: "Basic AI-powered guidance and support",
    tiers: {
      free: true,
      professional: true,
      enterprise: true,
    },
  },
  {
    name: "Full Advisory Report",
    description: "15+ page personalized career analysis and recommendations",
    tiers: {
      free: false,
      professional: true,
      enterprise: true,
    },
  },
  {
    name: "AI Voice Session",
    description: "10-minute consultation with our AI advisor",
    tiers: {
      free: false,
      professional: true,
      enterprise: true,
    },
  },
  {
    name: "Human Advisor Session",
    description: "30-minute session with a career expert",
    tiers: {
      free: false,
      professional: false,
      enterprise: true,
    },
  },
  {
    name: "Proactive AI Monitoring",
    description: "Ongoing progress tracking and personalized updates",
    tiers: {
      free: false,
      professional: false,
      enterprise: true,
    },
  },
];

async function handleUpgrade(tierId: number) {
  try {
    const response = await fetch('/api/payments/create-checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tierId,
        currency: 'usd',  // Can be made dynamic later for NGN support
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to create payment session');
    }

    // Redirect to checkout URL
    window.location.href = data.checkoutUrl;
  } catch (error) {
    console.error('Payment initiation failed:', error);
    // You can add toast/notification here
  }
}

export function TierFeatures() {
  // Build a deduplicated master list of features from tier config
  const _allFeatures = Array.from(new Set(TIER_DETAILS.flatMap((t) => t.features)));

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Available Features</h2>
        <p className="text-muted-foreground">Compare different tiers to find the right fit for your career journey</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {TIER_DETAILS.map((tier) => {
          // cumulative features: include features from tiers with id <= current tier id
          const cumulative = new Set(
            TIER_DETAILS.filter((t) => t.id <= tier.id).flatMap((t) => t.features)
          );

          return (
            <TierCard
              key={tier.id}
              id={tier.id}
              name={tier.name}
              description={tier.description}
              price={tier.pricing.usd === 0 ? "$0" : `$${tier.pricing.usd}`}
              note={tier.pricing.usd === 0 ? undefined : "one-time"}
              highlighted={tier.id === 2}
              features={tier.features}
              includes={tier.id === 2 ? "Includes all Free Exploration features" : tier.id === 3 ? "Includes Guided Consultation features" : undefined}
              ctaLabel={tier.id === 1 ? "Current Plan" : "Upgrade"}
              onUpgrade={tier.id !== 1 ? () => handleUpgrade(tier.id) : undefined}
              ctaVariant={tier.id === 1 ? "outline" : "default"}
              disabled={tier.id === 1} // Disable the button for Free tier since it's current plan
            />
          );
        })}
      </div>
    </div>
  );
}