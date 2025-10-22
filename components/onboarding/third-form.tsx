"use client";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "../ui/slider";

export default function ThirdPage() {
  return (
    <>
      <CardHeader>
        <CardTitle>What draws you most?</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <FieldGroup>
            <Field>
              <FieldLabel >Have you taken any tech courses before?</FieldLabel>
              <Select name="has-prior-courses" >
                <SelectTrigger aria-label="Select if you have taken tech courses before">
                  <SelectValue placeholder="Choose yes or no" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel htmlFor="prev">If yes, which ones?</FieldLabel>
              <Input 
                id="prev"
                name="previous-courses"
                type="text"
                placeholder="e.g., Codecademy, Coursera, university courses"
                aria-label="List your previous tech courses"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="tech-comfort">
                Rate your comfort with digital tools / coding / analytics
              </FieldLabel>
              <Slider
                id="tech-comfort"
                name="tech-comfort"
                max={5}
                step={1}
                defaultValue={[3]}
                aria-label="Rate your technical comfort level from 1 to 5"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>Beginner</span>
                <span>Intermediate</span>
                <span>Advanced</span>
              </div>
            </Field>
            <Field>
              <FieldLabel htmlFor="proj">
                What kind of projects or challenges do you enjoy?
              </FieldLabel>
              <Input 
                id="proj"
                name="project-interests"
                type="text"
                placeholder="e.g., web apps, mobile apps, data analysis"
                aria-label="Describe the types of projects that interest you"
                required
              />
            </Field>
          </FieldGroup>
        </div>
      </CardContent>
    </>
  );
}
