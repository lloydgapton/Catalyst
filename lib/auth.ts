// Lightweight auth helpers / placeholders to make swapping in Firestore simple
// This file intentionally contains no provider-specific code. Your Firestore
// integration can replace these implementations or import/extend them.

export interface UserProfile {
  id: string;
  name: string;
  email?: string;
  tier?: number; // 1 | 2 | 3
  avatarUrl?: string;
}

/**
 * Server-side helper used in server components/pages to determine if a user
 * is authenticated. When Firestore auth is ready, replace the body with a
 * real session check (cookie, token verification, or server SDK call).
 */
export async function getServerAuthStatus(): Promise<boolean> {
  // TODO: replace with real server-side check (e.g., verify session cookie)
  return false;
}

/**
 * Client-side hook placeholder. When Firestore auth is available, swap the
 * internals to use the Firestore client SDK (onAuthStateChanged) and return
 * the real user object and auth helpers.
 */
import { useEffect, useState } from 'react';

export function useAuth() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Placeholder: attempt to fetch a session from /api/auth/session if you
    // have a server-side session endpoint. For now, leave unauthenticated.
    let mounted = true;

    async function init() {
      try {
        // Example: const res = await fetch('/api/auth/session');
        // const json = await res.json(); if (mounted) setUser(json.user || null);
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
    // Placeholder: redirect to provider or open popup. Implement with
    // Firestore client SDK or custom endpoint.
    window.location.href = '/login';
  };

  const signOut = async () => {
    // Placeholder: call sign-out endpoint and clear local state.
    setUser(null);
    window.location.href = '/login';
  };

  return { user, loading, isAuthenticated: !!user, signIn, signOut } as const;
}
