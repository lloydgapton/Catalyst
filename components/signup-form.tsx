"use client";

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
<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { loadOnboardingAnswers } from "@/lib/onboarding-storage";
=======
import React, { useState } from "react";
>>>>>>> origin/master
import { Separator } from "./ui/separator";
import { useAuth } from "@/AuthContext";
import { useRouter } from "next/navigation";
// import { useForm, SubmitHandler } from "react-hook-form";

<<<<<<< HEAD
export function SignupForm({ next, ...props }: { next?: string } & React.ComponentProps<typeof Card>) {
  const router = useRouter();
  const [prefillEmail, setPrefillEmail] = useState<string | undefined>(undefined);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    // TODO: Call signup API (email+password) and create user
    // For now, simulate successful signup and redirect to next or dashboard
    const destination = next ? decodeURIComponent(next) : '/dashboard';
    router.push(destination);
  };

  useEffect(() => {
    const saved = loadOnboardingAnswers();
    if (saved && saved.email) setPrefillEmail(saved.email);
  }, []);

=======
export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  const { signup } = useAuth();
  const router = useRouter()
  // const { register, handleSubmit } = useForm();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      setLoading(true);
      signup(email, password);
      router.push('/dashboard')
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err);
      }else{

      console.log("unknown error");
      }
    } finally {
      setLoading(false);
    }
  }
>>>>>>> origin/master
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
<<<<<<< HEAD
                defaultValue={prefillEmail}
=======
                //{...register("email")}
>>>>>>> origin/master
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
