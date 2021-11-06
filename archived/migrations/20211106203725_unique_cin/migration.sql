/*
  Warnings:

  - A unique constraint covering the columns `[CIN]` on the table `Company` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Intern_id_key";

-- AlterTable
CREATE SEQUENCE "intern_id_seq";
ALTER TABLE "Intern" ALTER COLUMN "id" SET DEFAULT nextval('intern_id_seq'),
ADD CONSTRAINT "Intern_pkey" PRIMARY KEY ("id");
ALTER SEQUENCE "intern_id_seq" OWNED BY "Intern"."id";

-- CreateIndex
CREATE UNIQUE INDEX "Company_CIN_key" ON "Company"("CIN");
