/*
  Warnings:

  - You are about to drop the column `logo` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `avatar` on the `Intern` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Intern` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Company_name_key";

-- AlterTable
ALTER TABLE "Company" DROP COLUMN "logo",
DROP COLUMN "name";

-- AlterTable
ALTER TABLE "Intern" DROP COLUMN "avatar",
DROP COLUMN "name";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "avatar" DROP NOT NULL;
