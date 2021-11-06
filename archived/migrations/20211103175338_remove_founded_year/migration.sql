/*
  Warnings:

  - You are about to drop the column `foundedYear` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "User_username_key";

-- AlterTable
ALTER TABLE "Company" DROP COLUMN "foundedYear";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "username";
