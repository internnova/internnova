/*
  Warnings:

  - Added the required column `displayName` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `displayName` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "displayName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "displayName" TEXT NOT NULL;
