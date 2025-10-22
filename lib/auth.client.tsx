"use client";

import { useEffect, useState } from "react";

export interface UserProfile {
  id: string;
  name: string;
  email?: string;
  tier?: number;
  avatarUrl?: string;
}

export function useAuth() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function init() {
      try {
        // Placeholder: your auth team can implement /api/auth/session
        // const res = await fetch('/api/auth/session');
        // const json = await res.json();
        // if (mounted) setUser(json.user || null);
      } catch (_err) {
        // ignore
      } finally {
        if (mounted) setLoading(false);
      }
    }

    init();

    return () => {
      mounted = false;
    };
  }, []);

  const signIn = async (_provider?: string) => {
    // Replace with real sign-in flow; this is a safe fallback.
    window.location.href = "/login";
  };

  const signOut = async () => {
    // Replace with real sign-out implementation.
    setUser(null);
    window.location.href = "/login";
  };

  return { user, loading, isAuthenticated: !!user, signIn, signOut } as const;
}
