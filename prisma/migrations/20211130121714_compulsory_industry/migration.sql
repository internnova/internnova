/*
  Warnings:

  - Made the column `industry` on table `Job` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterEnum
ALTER TYPE "Tag" ADD VALUE 'Education';

-- AlterTable
ALTER TABLE "Job" ALTER COLUMN "industry" SET NOT NULL;
