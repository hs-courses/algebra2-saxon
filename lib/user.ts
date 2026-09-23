import { prisma } from "@/lib/db";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: string): boolean {
  return EMAIL_RE.test(email.trim());
}

/**
 * Progress is keyed by email — no password, just an identifier so the same
 * person can pick up their progress on a different device by re-entering it.
 */
export async function getOrCreateUserByEmail(rawEmail: string) {
  const email = rawEmail.trim().toLowerCase();
  if (!isValidEmail(email)) {
    throw new Error("Invalid email");
  }
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) return existing;
  return prisma.user.create({ data: { email, name: email.split("@")[0] } });
}
