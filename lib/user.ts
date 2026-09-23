import { prisma } from "@/lib/db";

const LOCAL_USER_NAME = "Student";

/**
 * Single implicit local user for v1 (no auth yet). Created once, reused.
 */
export async function getOrCreateLocalUser() {
  const existing = await prisma.user.findFirst({ where: { name: LOCAL_USER_NAME } });
  if (existing) return existing;
  return prisma.user.create({ data: { name: LOCAL_USER_NAME } });
}
