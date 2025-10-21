"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function FirstPage() {
  const occupations = ["Student", "Graduate", "Working Professional", "Other"];

  return (
    <>
      <CardHeader>
        <CardTitle>Welcome! Let's get to know you</CardTitle>
        <CardDescription>
          To start, tell us a bit about yourself. We'll use this to personalize
          your experience
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="fullName">Full Name</FieldLabel>
              <Input
                id="fullName"
                type="text"
                placeholder="John Doe"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="mail@mail.com"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="age">Age</FieldLabel>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select an age range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="18">&lt; 18</SelectItem>
                  <SelectItem value="18-24"> 18 - 24</SelectItem>
                  <SelectItem value="25-34"> 25 - 34</SelectItem>
                  <SelectItem value="35+"> 35+</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel>Current Occupation</FieldLabel>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Current Occupation" />
                </SelectTrigger>
                <SelectContent>
                  {occupations.map((occupation) => (
                    <SelectItem value={occupation} key={occupation}>
                      {occupation}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </>
  );
}
