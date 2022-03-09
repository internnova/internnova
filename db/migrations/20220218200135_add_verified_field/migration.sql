/*
  Warnings:

  - You are about to drop the column `logo` on the `User` table. All the data in the column will be lost.
  - Added the required column `name` to the `Intern` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Intern" ADD COLUMN     "avatar" TEXT,
ADD COLUMN     "name" TEXT NOT NULL;

