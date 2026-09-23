import { cookies } from "next/headers";
import { getOrCreateUserByEmail, isValidEmail } from "@/lib/user";
import { STUDENT_EMAIL_COOKIE } from "@/lib/studentEmail";

/** Server-only: resolves the current student from the email cookie, if set and valid. */
export async function getSessionUser() {
  const store = await cookies();
  const email = store.get(STUDENT_EMAIL_COOKIE)?.value;
  if (!email || !isValidEmail(email)) return null;
  try {
    return await getOrCreateUserByEmail(email);
  } catch {
    return null;
  }
}
