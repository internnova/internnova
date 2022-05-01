/*
  Warnings:

  - You are about to drop the `Bookmark` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[slug]` on the table `JobApplication` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `position` to the `JobApplication` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `JobApplication` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Bookmark" DROP CONSTRAINT "Bookmark_internId_fkey";

-- DropForeignKey
ALTER TABLE "Bookmark" DROP CONSTRAINT "Bookmark_jobId_fkey";

-- AlterTable
ALTER TABLE "JobApplication" ADD COLUMN     "position" TEXT NOT NULL,
ADD COLUMN     "slug" TEXT NOT NULL;

-- DropTable
DROP TABLE "Bookmark";

-- CreateIndex
CREATE UNIQUE INDEX "JobApplication_slug_key" ON "JobApplication"("slug");
