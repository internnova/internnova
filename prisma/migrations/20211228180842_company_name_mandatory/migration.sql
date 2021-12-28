/*
  Warnings:

  - Made the column `companyName` on table `Job` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Job` MODIFY `companyName` VARCHAR(191) NOT NULL;
