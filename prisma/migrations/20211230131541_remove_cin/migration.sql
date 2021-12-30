/*
  Warnings:

  - You are about to drop the column `CIN` on the `Company` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Company_CIN_key";

-- AlterTable
ALTER TABLE "Company" DROP COLUMN "CIN";
