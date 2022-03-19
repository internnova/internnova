/*
  Warnings:

  - You are about to drop the column `href` on the `Job` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[companyName,slug]` on the table `Job` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Job_companyName_href_key";

-- AlterTable
ALTER TABLE "Job" DROP COLUMN "href",
ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Job_companyName_slug_key" ON "Job"("companyName", "slug");
