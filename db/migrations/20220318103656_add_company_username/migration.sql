/*
  Warnings:

  - Added the required column `companyName` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Job_companyId_key";

-- DropIndex
DROP INDEX "Job_id_companyId_industry_description_position_postedAt_clo_idx";

-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "companyName" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "Job_id_companyId_companyName_industry_description_position__idx" ON "Job"("id", "companyId", "companyName", "industry", "description", "position", "postedAt", "closed");
