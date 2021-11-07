-- CreateEnum
CREATE TYPE "JobType" AS ENUM ('PART_TIME', 'FULL_TIME');

-- CreateEnum
CREATE TYPE "Tag" AS ENUM ('Marketing', 'Graphic_Design', 'Programming', 'Communication', 'Charity');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMINISTRATOR', 'EMPLOYER', 'INTERN', 'STANDARD');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "name" TEXT,
    "picture" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "logo" TEXT,
    "website" TEXT,
    "CIN" TEXT,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Intern" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "bio" TEXT NOT NULL,
    "interests" "Tag"[],

    CONSTRAINT "Intern_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobApplication" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "internId" INTEGER NOT NULL,
    "jobId" INTEGER NOT NULL,

    CONSTRAINT "JobApplication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Job" (
    "id" SERIAL NOT NULL,
    "position" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "jobType" "JobType" NOT NULL,
    "skillsRequired" TEXT[],
    "numOfOpenings" INTEGER NOT NULL DEFAULT 1,
    "expirationData" TIMESTAMP(3),
    "duration" TEXT NOT NULL,
    "postedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "location" TEXT NOT NULL DEFAULT E'Remote',
    "salary" TEXT,
    "industry" "Tag",
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Company_userId_key" ON "Company"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Company_name_key" ON "Company"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Company_CIN_key" ON "Company"("CIN");

-- CreateIndex
CREATE UNIQUE INDEX "Intern_userId_key" ON "Intern"("userId");

-- AddForeignKey
ALTER TABLE "JobApplication" ADD CONSTRAINT "JobApplication_internId_fkey" FOREIGN KEY ("internId") REFERENCES "Intern"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobApplication" ADD CONSTRAINT "JobApplication_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
