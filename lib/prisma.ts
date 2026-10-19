import "server-only";

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/app/generated/prisma/client";

const globalForPrisma = globalThis as typeof globalThis & {
  prisma?: PrismaClient;
};

function createPrismaClient() {
  const connectionString =
    process.env.DATABASE_URL_POOLED || process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error(
      "DATABASE_URL_POOLED or DATABASE_URL must be set to initialize Prisma Client.",
    );
  }

  const adapter = new PrismaPg({ connectionString });

  return new PrismaClient({ adapter });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
