/*
  Warnings:

  - You are about to drop the column `metadata` on the `JobApplication` table. All the data in the column will be lost.
  - Added the required column `status` to the `JobApplication` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('APPLIED', 'REJECTED', 'HIRED');

-- AlterTable
ALTER TABLE "JobApplication" DROP COLUMN "metadata",
ADD COLUMN     "status" "Status" NOT NULL;
