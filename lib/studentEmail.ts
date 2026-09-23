export const STUDENT_EMAIL_COOKIE = "student_email";

/** Client-side cookie read/write — no next/headers import, safe in client components. */
export function getStoredEmail(): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${STUDENT_EMAIL_COOKIE}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

export function setStoredEmail(email: string): void {
  const oneYear = 60 * 60 * 24 * 365;
  document.cookie = `${STUDENT_EMAIL_COOKIE}=${encodeURIComponent(email)}; path=/; max-age=${oneYear}; SameSite=Lax`;
}
