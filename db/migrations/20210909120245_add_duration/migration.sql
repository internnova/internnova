/*
  Warnings:

  - Added the required column `duration` to the `internships` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "internships" ADD COLUMN     "duration" TEXT NOT NULL;
