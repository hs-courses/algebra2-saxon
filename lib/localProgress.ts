const STORAGE_KEY = "algebra2-saxon-local-progress";
const EVENT_NAME = "algebra2-local-progress-updated";

/**
 * Client-only progress store for the GH Pages static demo, which has no server/DB.
 * Persists per-browser via localStorage; a custom event lets other mounted components
 * (e.g. the sidebar) react to changes made from a lesson page without a full reload.
 */
export function getLocalCompletedLessons(): number[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function markLessonCompleteLocally(lessonNumber: number): void {
  try {
    const current = getLocalCompletedLessons();
    if (current.includes(lessonNumber)) return;
    const next = [...current, lessonNumber].sort((a, b) => a - b);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    window.dispatchEvent(new Event(EVENT_NAME));
  } catch {
    // localStorage unavailable (private browsing, disabled storage) — grading still worked client-side.
  }
}

export function resetLocalProgress(): void {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new Event(EVENT_NAME));
  } catch {
    // ignore
  }
}

export function onLocalProgressChange(callback: () => void): () => void {
  window.addEventListener(EVENT_NAME, callback);
  return () => window.removeEventListener(EVENT_NAME, callback);
}
