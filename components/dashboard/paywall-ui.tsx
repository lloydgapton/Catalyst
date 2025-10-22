"use client";

import TierCard from "@/components/dashboard/TierCard";
// Separator import not used; removed
import { TIER_DETAILS } from "@/lib/tier-config";
import { trackEvent } from "@/lib/analytics";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function PaywallUI() {
  const [_loading, setLoading] = useState<number | null>(null);
  const router = useRouter();
  const [currency, setCurrency] = useState<"usd" | "ngn">("usd");

  const handleUpgrade = async (tierId: number) => {
    setLoading(tierId);
    
    // Track upgrade button click
    await trackEvent({
      event_name: "upgrade_click",
      tier_id: tierId,
      metadata: {
        currency,
        from_page: window.location.pathname,
      }
    });

    // Simulate payment gateway routing
    try {
      // In production, this would integrate with Paystack/Flutterwave for NGN
      // or Stripe/PayPal for USD
      const gatewayUrl = currency === "ngn" 
        ? "/api/payment/paystack"
        : "/api/payment/stripe";

      router.push(gatewayUrl);
    } catch (error) {
      console.error("Payment initiation failed:", error);
    }

    setLoading(null);
  };

  const formatPrice = (price: number) => {
    if (currency === "ngn") {
      return `₦${price.toLocaleString()}`;
    }
    return `$${price}`;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Choose Your Plan</h2>
          <p className="text-muted-foreground">
            Select the plan that best fits your career goals
          </p>
        </div>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value as "usd" | "ngn")}
          className="border rounded-md p-2"
        >
          <option value="usd">USD</option>
          <option value="ngn">NGN</option>
        </select>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {TIER_DETAILS.map((tier) => {
              // const allFeatures = Array.from(new Set(TIER_DETAILS.flatMap((t) => t.features)));
              // const cumulative = new Set(
              //   TIER_DETAILS.filter((t) => t.id <= tier.id).flatMap((t) => t.features)
              // );

          return (
            <TierCard
              key={tier.id}
              id={tier.id}
              name={tier.name}
              description={tier.description}
              price={formatPrice(tier.pricing[currency])}
              note={"One-time payment"}
              highlighted={tier.id === 2}
              features={tier.features}
              includes={tier.id === 2 ? "Includes all Free Exploration features" : tier.id === 3 ? "Includes Guided Consultation features" : undefined}
              ctaLabel={tier.id === 1 ? "Current Plan" : `Upgrade to ${tier.name}`}
              onUpgrade={tier.id !== 1 ? () => handleUpgrade(tier.id) : undefined}
              ctaVariant={tier.id === 1 ? "outline" : "default"}
              disabled={tier.id === 1}
            />
          );
        })}
      </div>

      <div className="mt-8 text-center text-sm text-muted-foreground">
        <p>Secure payment processing via Stripe, Paystack, or Flutterwave</p>
        <p>All prices are in {currency.toUpperCase()}</p>
      </div>
    </div>
  );
}