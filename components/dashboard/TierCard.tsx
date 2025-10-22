"use client";

// Link intentionally removed: TierCard now uses button onClick handlers
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check } from "lucide-react";

type TierCardProps = {
  id: number;
  name: string;
  description?: string;
  price: string;
  note?: string;
  highlighted?: boolean;
  /** Features specifically unlocked at this tier (not cumulative) */
  features?: string[];
  /** Optional includes message, e.g. "Includes all Tier 1 features" */
  includes?: string;
  ctaLabel?: string;
  ctaVariant?: "default" | "outline" | "link";
  /** Whether the CTA button should be disabled */
  disabled?: boolean;
  /** Handler for upgrade button click */
  onUpgrade?: () => void;
};

export default function TierCard({
  id,
  name,
  description,
  price,
  note,
  highlighted,
  features = [],
  includes,
  ctaLabel = "Upgrade",
  ctaVariant = "default",
  disabled = false,
  onUpgrade,
}: TierCardProps) {
  return (
    <Card className={highlighted ? "border-primary relative overflow-hidden" : ""}>
      {highlighted && (
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm">
          Most Popular
        </div>
      )}
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
        <div className="mt-4">
          <div className="text-3xl font-bold">{price}</div>
          {note && <div className="text-muted-foreground text-sm">{note}</div>}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {includes && (
          <div className="text-sm text-muted-foreground">{includes}</div>
        )}

        {(features || []).map((feature) => (
          <div key={feature} className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-500" />
            <span>{feature}</span>
          </div>
        ))}

        <div className="mt-4">
          <Button
            className="w-full"
            variant={ctaVariant}
            disabled={disabled}
            onClick={onUpgrade}
          >
            {ctaLabel}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
