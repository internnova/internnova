/*
  Warnings:

  - The `interests` column on the `Intern` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `tags` column on the `Job` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Tags" AS ENUM ('Marketing', 'Graphic_Design', 'Programming', 'Communication', 'Charity');

-- AlterTable
ALTER TABLE "Intern" DROP COLUMN "interests",
ADD COLUMN     "interests" "Tags"[];

-- AlterTable
ALTER TABLE "Job" DROP COLUMN "tags",
ADD COLUMN     "tags" "Tags"[];
