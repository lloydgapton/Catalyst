"use client";

import Navbar from "@/components/ui/Navbar";
import { DashboardHeader } from "@/components/dashboard/header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row bg-gray-50">
      <Navbar />
      <main className="flex-1">
        <DashboardHeader />
        <div className="p-6">{children}</div>
      </main>
      {/* Placeholder for future chatbot widget */}
      <div id="chatbot-widget" className="hidden fixed bottom-4 right-4" />
    </div>
  );
}