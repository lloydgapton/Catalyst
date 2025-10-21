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

              <RadioGroup defaultValue="">
                {careers.map((career, i) => (
                  <div className="flex items-center gap-3" key={i}>
                    <RadioGroupItem value={career.value} id={`i${i}`} />
                    <Label htmlFor={`i${i}`}>{career.label}</Label>
                  </div>
                ))}
              </RadioGroup>
            </Field>
            <Field>
              <FieldLabel>Why are you interested in this field?</FieldLabel>
              <Input type="text" />
            </Field>
            <Field>
              <FieldLabel>
                What do you hope to achieve from this program
              </FieldLabel>{" "}
              <RadioGroup defaultValue="">
                {achieves.map((achieve, i) => (
                  <div className="flex items-center gap-3" key={i}>
                    <RadioGroupItem value={achieve.value} id={`i${i}`} />
                    <Label htmlFor={`i${i}`}>{achieve.label}</Label>
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
