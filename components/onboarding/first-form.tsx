"use client";

import { useAuth } from "@/AuthContext";
import {
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

type FirstPageProps = {
  formData: { [key: string]: string };
  updateField: (key: string, value: string) => void;
};

export default function FirstPage({ formData, updateField }: FirstPageProps) {
  const occupations = ["Student", "Graduate", "Working Professional", "Other"];
  // const { currentUser } = useAuth();

  return (
    <>
      <CardHeader>
        <CardTitle>Welcome! Let&apos;s get to know you</CardTitle>
        <CardDescription>
          To start, tell us a bit about yourself. We&apos;ll use this to
          personalize your experience
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="fullName">Full Name</FieldLabel>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="John Doe"
                required
                aria-label="Your full name"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="mail@mail.com"
                // value={currentUser.email}
                required
                aria-label="Your email address"
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
        </div>
      </CardContent>
    </>
  );
}
