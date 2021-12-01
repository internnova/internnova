/*
  Warnings:

  - You are about to alter the column `name` on the `Company` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `website` on the `Company` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `email` on the `Intern` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `position` on the `Job` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `duration` on the `Job` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `location` on the `Job` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `salary` on the `Job` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.

*/
-- AlterTable
ALTER TABLE `Company` MODIFY `name` VARCHAR(100) NOT NULL,
    MODIFY `description` VARCHAR(1000) NOT NULL,
    MODIFY `logo` VARCHAR(2000) NULL,
    MODIFY `website` VARCHAR(50) NULL,
    MODIFY `CIN` VARCHAR(200) NULL;

-- AlterTable
ALTER TABLE `Intern` MODIFY `bio` VARCHAR(1000) NOT NULL,
    MODIFY `email` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `Job` MODIFY `position` VARCHAR(50) NOT NULL,
    MODIFY `description` VARCHAR(1000) NOT NULL,
    MODIFY `skillsRequired` VARCHAR(10000) NOT NULL,
    MODIFY `duration` VARCHAR(100) NOT NULL,
    MODIFY `location` VARCHAR(100) NOT NULL DEFAULT 'Remote',
    MODIFY `salary` VARCHAR(100) NULL;

-- AlterTable
ALTER TABLE `JobApplication` MODIFY `description` VARCHAR(200) NOT NULL;
