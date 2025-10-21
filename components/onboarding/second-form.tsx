"use client";

import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

export default function SecondPage() {
  const careers = [
    { value: "frontend", label: "Frontend Development" },
    { value: "backend", label: "Backend Development" },
    { value: "data", label: "Data Science / AI" },
    { value: "design", label: "UI/UX Design" },
    { value: "security", label: "Cybersecurity" },
    { value: "management", label: "Product / Project Management" },
    { value: "not sure", label: "Not sure yet" },
  ];

  const achieves = [
    { value: "career", label: "Get career direction" },
    { value: "switch", label: "Switch Careers" },
    { value: "upskill", label: "Upskill in my current role" },
    { value: "explore", label: "Explore new opportunities" },
  ];
  return (
    <>
      <CardHeader>
        <CardTitle>Career Goals</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel>
                What area of tech or digial career are you most interested in
                exploring?
              </FieldLabel>

              <RadioGroup defaultValue="" name="career-interest" aria-label="Select your career interest">
                {careers.map((career) => (
                  <div className="flex items-center gap-3" key={career.value}>
                    <RadioGroupItem value={career.value} id={`career-${career.value}`} />
                    <Label htmlFor={`career-${career.value}`}>{career.label}</Label>
                  </div>
                ))}
              </RadioGroup>
            </Field>
            <Field>
              <FieldLabel htmlFor="interest-reason">Why are you interested in this field?</FieldLabel>
              <Input 
                type="text"
                id="interest-reason"
                name="interest-reason"
                aria-label="Explain why you are interested in this field"
                placeholder="Share your motivation..."
              />
            </Field>
            <Field>
              <FieldLabel>
                What do you hope to achieve from this program?
              </FieldLabel>
              <RadioGroup defaultValue="" name="achievement-goal" aria-label="Select your primary goal">
                {achieves.map((achieve) => (
                  <div className="flex items-center gap-3" key={achieve.value}>
                    <RadioGroupItem value={achieve.value} id={`achieve-${achieve.value}`} />
                    <Label htmlFor={`achieve-${achieve.value}`}>{achieve.label}</Label>
                  </div>
                ))}
              </RadioGroup>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </>
  );
}
