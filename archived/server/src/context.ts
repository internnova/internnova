import { PrismaClient } from "prismaClient";

const prisma = new PrismaClient();

export interface Context {
  prisma: PrismaClient;
}

export const context: Context = {
  prisma: prisma,
};
