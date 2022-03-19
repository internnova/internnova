/*
  Warnings:

  - You are about to drop the column `companyName` on the `Job` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[companyId]` on the table `Job` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Job_id_companyId_industry_description_companyName_position__idx";

-- AlterTable
ALTER TABLE "Job" DROP COLUMN "companyName";

-- CreateIndex
CREATE UNIQUE INDEX "Job_companyId_key" ON "Job"("companyId");

-- CreateIndex
CREATE INDEX "Job_id_companyId_industry_description_position_postedAt_clo_idx" ON "Job"("id", "companyId", "industry", "description", "position", "postedAt", "closed");
