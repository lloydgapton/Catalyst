"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

export function TierOverview() {
  const _currentTier = "free";
  const nextTierFeatures = [
    "One-on-one Advisory Sessions",
    "Personalized Career Reports",
    "Learning Path Creation",
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Your Current Plan</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="text-2xl font-bold">Free Tier</div>
          <p className="text-sm text-muted-foreground">Basic career guidance</p>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium">Unlock in Professional Tier:</p>
          {nextTierFeatures.map((feature) => (
            <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="h-4 w-4" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <Link href="/dashboard/upgrade">
          <Button className="w-full gap-2">
            Upgrade
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}