-- AlterTable
ALTER TABLE "Job" ALTER COLUMN "location" SET DEFAULT E'Remote';

-- AlterTable
ALTER TABLE "JobApplication" ADD COLUMN     "shownNotification" BOOLEAN NOT NULL DEFAULT false;
