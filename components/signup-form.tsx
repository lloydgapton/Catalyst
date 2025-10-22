"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { useAuth } from "@/AuthContext";
import { loadOnboardingAnswers } from "@/lib/onboarding-storage";

export function SignupForm({ next, ...props }: { next?: string } & React.ComponentProps<typeof Card>) {
  const router = useRouter();
  const { signup } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const saved = loadOnboardingAnswers();
    if (saved && saved.email) setEmail(saved.email);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (password !== passwordConfirm) {
      // Simple validation: passwords must match
      alert("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      await signup(email, password);
      const destination = next ? decodeURIComponent(next) : "/dashboard";
      router.push(destination);
    } catch (err: unknown) {
      console.error(err);
      alert("Signup failed. Check console for details.");
    } finally {
      setLoading(false);
    }
  }
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                name="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="m@example.com"
                autoComplete="email"
                required
                // Prefilled from onboarding answers if available
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
                required
                //{...register("password")}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="confirm-password">
                Confirm Password
              </FieldLabel>
              <Input
                id="confirm-password"
                name="confirmPassword"
                type="password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                autoComplete="new-password"
                required
                //{...register("passwordConfirm")}
              />
            </Field>
            <FieldGroup>
              <Field>
                <Button type="submit" disabled={loading}>
                  Create Account
                </Button>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  type="button"
                  aria-label="Sign up with Google"
                >
                  Sign up with Google
                </Button>
                <FieldDescription className="px-6 text-center">
                  Already have an account? <Link href="/login">Sign in</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
