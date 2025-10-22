"use client";

import FirstPage from "@/components/onboarding/first-form";
import FourthPage from "@/components/onboarding/fourth-form";
import SecondPage from "@/components/onboarding/second-form";
import ThirdPage from "@/components/onboarding/third-form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth.client";
import { useRouter } from "next/navigation";
import { saveOnboardingAnswers, loadOnboardingAnswers } from "@/lib/onboarding-storage";

export default function Page() {
  const [step, setStep] = useState(1);
  const { user, loading, isAuthenticated } = useAuth();
  const router = useRouter();

  function handleNext() {
    if (step === 4) {
      // final step: complete onboarding
      handleComplete();
      return;
    }
    persistForm();
    setStep((step) => step + 1);
  }

  function handlePrevious() {
    if (step === 1) return;
    persistForm();
    setStep((step) => step - 1);
  }

  function handleComplete() {
    // persist before finishing
    persistForm();
    // If user is authenticated, allow access to full reports (redirect to dashboard)
    if (isAuthenticated) {
      router.push('/dashboard');
      return;
    }

    // If unauthenticated, prompt sign-up flow and include a `next` param so they can return
    const next = encodeURIComponent('/onboarding?completed=true');
    router.push(`/signup?next=${next}`);
  }

  // Persist current form values by serializing inputs inside the onboarding card
  function persistForm() {
    try {
      const form = document.querySelector('#onboarding-form') as HTMLFormElement | null;
      if (!form) return;
      const data = new FormData(form);
      const obj: Record<string, string> = {};
      for (const [key, value] of data.entries()) {
        obj[key] = String(value ?? '');
      }
      saveOnboardingAnswers(obj);
    } catch (e) {
      console.error('Failed to persist onboarding form', e);
    }
  }

  // Restore persisted values on mount
  useEffect(() => {
    const saved = loadOnboardingAnswers();
    if (!saved) return;
    // Try to populate inputs after first render
    requestAnimationFrame(() => {
      const form = document.querySelector('#onboarding-form') as HTMLFormElement | null;
      if (!form) return;
      Object.entries(saved).forEach(([k, v]) => {
        const el = form.elements.namedItem(k) as Element | RadioNodeList | null;
        if (!el) return;
        try {
          // Handle radio groups
          if (el instanceof RadioNodeList) {
            const node = Array.from(form.querySelectorAll<HTMLInputElement>(`input[name="${k}"]`)).find((n) => n.value === v);
            if (node) node.checked = true;
          } else if (el instanceof HTMLSelectElement) {
            el.value = v;
          } else if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
            (el as HTMLInputElement).value = v;
          }
        } catch (err) {
          // ignore individual set errors
        }
      });
    });
  }, []);

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <div className="text-sm text-muted-foreground text-center">
            Step {step} of 4
          </div>
          <Card>
            <form id="onboarding-form">
              {step === 1 && <FirstPage />}
              {step === 2 && <SecondPage />}
              {step === 3 && <ThirdPage />}
              {step === 4 && <FourthPage />}
            </form>
            <div className="flex justify-between px-6 py-4">
              <Button 
                onClick={handlePrevious}
                disabled={step === 1}
                aria-label={step === 1 ? "No previous step available" : "Go to previous step"}
              >
                Previous
              </Button>
              <Button 
                onClick={handleNext}
                aria-label={step === 4 ? "Complete onboarding" : "Go to next step"}
              >
                {step === 4 ? "Complete" : "Next"}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
