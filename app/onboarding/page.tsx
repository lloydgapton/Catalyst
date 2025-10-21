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
          <Card>
            {step === 1 && <FirstPage />}
            {step === 2 && <SecondPage />}
            {step === 3 && <ThirdPage />}
            {step === 4 && <FourthPage />}
            <div className="flex justify-around">
              <Button onClick={handlePrevious}>Previous</Button>
              <Button onClick={handleNext}>Next</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
