import { PrismaClient } from "@prisma/client";

declare global {
  /*eslint-disable*/
  var prisma: PrismaClient | undefined;
}

// this prisma object keeps prisma from spawning new instances
export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") global.prisma = prisma;
