"use client";

import FirstPage from "@/components/onboarding/first-form";
import FourthPage from "@/components/onboarding/fourth-form";
import SecondPage from "@/components/onboarding/second-form";
import ThirdPage from "@/components/onboarding/third-form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export default function Page() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ Full_Name: "" });

  const updateField = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  function handleNext() {
    if (step === 4) return;
    setStep((step) => step + 1);
  }

  function handlePrevious() {
    if (step === 1) return;
    setStep((step) => step - 1);
  }

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <div className="text-sm text-muted-foreground text-center">
            Step {step} of 4
          </div>
          <Card>
            {step === 1 && (
              <FirstPage formData={formData} updateField={updateField} />
            )}
            {step === 2 && <SecondPage />}
            {step === 3 && <ThirdPage />}
            {step === 4 && <FourthPage />}
            <div className="flex justify-between px-6 py-4">
              <Button
                onClick={handlePrevious}
                disabled={step === 1}
                aria-label={
                  step === 1
                    ? "No previous step available"
                    : "Go to previous step"
                }
              >
                Previous
              </Button>
              <Button
                onClick={handleNext}
                // disabled={step === 4}
                aria-label={
                  step === 4 ? "No next step available" : "Go to next step"
                }
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