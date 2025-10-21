"use client";

import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function FourthPage() {
  return (
    <>
      <CardHeader>
        <CardTitle>What draws you most?</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel >Preferred learning style</FieldLabel>
              <Select name="learning-style" >
                <SelectTrigger aria-label="Choose your preferred learning style">
                  <SelectValue placeholder="Select preferred learning style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="visual">Visual Learning (Videos, Diagrams)</SelectItem>
                  <SelectItem value="reading">Reading & Writing</SelectItem>
                  <SelectItem value="interactive">Interactive (Hands-on Practice)</SelectItem>
                  <SelectItem value="audio">Audio Learning (Lectures, Discussions)</SelectItem>
                  <SelectItem value="mixed">Mixed Approach</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel >Availability</FieldLabel>
              <Select name="availability" >
                <SelectTrigger aria-label="Select your availability for learning">
                  <SelectValue placeholder="Select your availability" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-time">Full-time (40+ hours/week)</SelectItem>
                  <SelectItem value="part-time">Part-time (15-20 hours/week)</SelectItem>
                  <SelectItem value="evenings">Evenings & Weekends</SelectItem>
                  <SelectItem value="flexible">Flexible Schedule</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel >Preferred communication channel</FieldLabel>
              <Select name="communication" >
                <SelectTrigger aria-label="Choose your preferred way to communicate">
                  <SelectValue placeholder="Select communication preference" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="chat">Chat/Messaging</SelectItem>
                  <SelectItem value="video">Video Calls</SelectItem>
                  <SelectItem value="mixed">Mixed (All channels)</SelectItem>
                </SelectContent>
              </Select>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </>
  );
}
