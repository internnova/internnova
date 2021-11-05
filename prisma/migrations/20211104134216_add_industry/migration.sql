/*
  Warnings:

  - You are about to drop the column `industry` on the `Company` table. All the data in the column will be lost.
  - The `interests` column on the `Intern` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `tags` on the `Job` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Tag" AS ENUM ('Marketing', 'Graphic_Design', 'Programming', 'Communication', 'Charity');

-- AlterTable
ALTER TABLE "Company" DROP COLUMN "industry";

-- AlterTable
ALTER TABLE "Intern" DROP COLUMN "interests",
ADD COLUMN     "interests" "Tag"[];

-- AlterTable
ALTER TABLE "Job" DROP COLUMN "tags",
ADD COLUMN     "industry" "Tag";

-- DropEnum
DROP TYPE "Tags";
