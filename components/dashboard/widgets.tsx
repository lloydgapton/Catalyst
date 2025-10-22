"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@radix-ui/react-progress";
import { BadgeCheck, Calendar, ChevronRight, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function DashboardWidgets() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {/* Journey Progress */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Journey Progress</CardTitle>
          <Target className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Progress value={60} max={100} />
            <p className="text-xs text-muted-foreground">3 of 5 steps completed</p>
          </div>
        </CardContent>
      </Card>

      {/* Assessments */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Assessments</CardTitle>
          <BadgeCheck className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">2/4</div>
          <p className="text-xs text-muted-foreground">Assessments completed</p>
        </CardContent>
      </Card>

      {/* Next Session */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Next Session</CardTitle>
          <Calendar className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-sm font-medium">Career Planning</div>
          <p className="text-xs text-muted-foreground">Tomorrow, 3:00 PM</p>
        </CardContent>
      </Card>

      {/* Current Plan Overview */}
      <Card className="col-span-1 md:col-span-2 lg:col-span-1">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Current Plan</CardTitle>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="text-2xl font-bold">Free Tier</div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">2 of 7 features available</span>
            </div>

            <div className="mt-3 flex gap-2">
              <Button asChild size="sm" className="h-auto">
                <Link href="/dashboard/upgrade">Upgrade</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}