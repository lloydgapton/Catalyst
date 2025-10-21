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
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel>Have you taken any tech courses before?</FieldLabel>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Yes or No" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Yes">Yes</SelectItem>
                  <SelectItem value="No">No</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel htmlFor="prev">If yes, which ones?</FieldLabel>
              <Input id="prev" type="text" required />
            </Field>
            <Field>
              <FieldLabel>
                Rate your comfort with digital tools / coding / analytics
              </FieldLabel>
              <Slider max={5} step={1} defaultValue={[3]} />
            </Field>
            <Field>
              <FieldLabel htmlFor="proj">
                What kind of projects or challenges do you enjoy?
              </FieldLabel>
              <Input id="proj" type="text" required />
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </>
  );
}
