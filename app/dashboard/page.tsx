"use client";
import { DashboardWidgets } from "@/components/dashboard/widgets";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight">Welcome back, John!</h2>
      <p className="text-muted-foreground">
        Here&apos;s an overview of your learning journey and upcoming activities.
      </p>
      
      <DashboardWidgets />
    </div>
  );
}