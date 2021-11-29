/*
  Warnings:

  - Made the column `email` on table `Company` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `Intern` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Company" ALTER COLUMN "email" SET NOT NULL;

-- AlterTable
ALTER TABLE "Intern" ALTER COLUMN "email" SET NOT NULL;
