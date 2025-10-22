export interface AnalyticsEvent {
  event_name: string;
  user_id?: string;
  tier_id?: number;
  metadata?: Record<string, string | number | boolean | null | undefined>;
  created_at?: string;
}

/**
 * Lightweight analytics tracker (no external provider).
 *
 * This implementation intentionally avoids any Supabase/third-party client
 * so frontend code can call `trackEvent(...)` without requiring a configured
 * provider. It will:
 *  - log events to the browser console
 *  - fire-and-forget POST to `/api/analytics` if that endpoint exists
 *
 * When your backend analytics (Supabase/Firestore/etc.) is ready, replace
 * this implementation with the real client.
 */
export async function trackEvent(event: AnalyticsEvent) {
  try {
    const payload = {
      ...event,
      created_at: new Date().toISOString(),
    };

    // Console log for local debugging
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-console
      console.info('[analytics] trackEvent', payload);

      // Fire-and-forget POST to a local API route (optional server-side collector)
      try {
        void fetch('/api/analytics', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } catch (_err) {
        // swallow errors (analytics should not block UX)
      }
    }

    return true;
  } catch (_err) {
    console.error('trackEvent failed', _err);
    return null;
  }
}