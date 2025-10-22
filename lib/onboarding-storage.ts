const STORAGE_KEY = 'catalyst_onboarding_v1';

export type OnboardingAnswers = Record<string, string>;

export function saveOnboardingAnswers(answers: OnboardingAnswers) {
  try {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
  } catch (e) {
    console.error('Failed to save onboarding answers', e);
  }
}

export function loadOnboardingAnswers(): OnboardingAnswers | null {
  try {
    if (typeof window === 'undefined') return null;
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to load onboarding answers', e);
    return null;
  }
}

export function clearOnboardingAnswers() {
  try {
    if (typeof window === 'undefined') return;
    window.localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error('Failed to clear onboarding answers', e);
  }
}
