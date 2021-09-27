/*
  Warnings:

  - Added the required column `description` to the `internships` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "internships" ADD COLUMN     "description" TEXT NOT NULL;
