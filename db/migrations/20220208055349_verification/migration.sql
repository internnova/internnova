/*
  Warnings:

  - The values [FULL_TIME] on the enum `JobType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "JobType_new" AS ENUM ('PART_TIME', 'SUMMER_INTERNSHIP');
ALTER TABLE "Job" ALTER COLUMN "jobType" TYPE "JobType_new" USING ("jobType"::text::"JobType_new");
ALTER TYPE "JobType" RENAME TO "JobType_old";
ALTER TYPE "JobType_new" RENAME TO "JobType";
DROP TYPE "JobType_old";
COMMIT;

-- AlterEnum
ALTER TYPE "TokenType" ADD VALUE 'CONFIRM_EMAIL';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "verfied" BOOLEAN NOT NULL DEFAULT false;
