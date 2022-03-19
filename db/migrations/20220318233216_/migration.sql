/*
  Warnings:

  - A unique constraint covering the columns `[companyName,href]` on the table `Job` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `href` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "href" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Job_companyName_href_key" ON "Job"("companyName", "href");
