-- CreateEnum
CREATE TYPE "Role" AS ENUM ('INTERN', 'COMPANY', 'SUPERUSER');

-- CreateEnum
CREATE TYPE "TokenType" AS ENUM ('RESET_PASSWORD');

-- CreateEnum
CREATE TYPE "JobType" AS ENUM ('PART_TIME', 'FULL_TIME');

-- CreateEnum
CREATE TYPE "Tag" AS ENUM ('Marketing', 'Graphic_Design', 'Education', 'Programming', 'Communication', 'Charity');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('APPLIED', 'REJECTED', 'HIRED');

-- CreateTable
CREATE TABLE "Company"
(
  "id"          SERIAL       NOT NULL,
  "userId"      INTEGER      NOT NULL,
  "name"        TEXT         NOT NULL,
  "description" TEXT         NOT NULL,
  "logo"        TEXT,
  "website"     TEXT,
  "createdAt"   TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt"   TIMESTAMP(3) NOT NULL,

  CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Intern"
(
  "id"        SERIAL       NOT NULL,
  "name"      TEXT         NOT NULL,
  "userId"    INTEGER      NOT NULL,
  "bio"       TEXT         NOT NULL,
  "logo"      TEXT,
  "interests" TEXT[],
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  "oneliner"  TEXT         NOT NULL,

  CONSTRAINT "Intern_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User"
(
  "id"             SERIAL       NOT NULL,
  "createdAt"      TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt"      TIMESTAMP(3) NOT NULL,
  "name"           TEXT,
  "email"          TEXT         NOT NULL,
  "hashedPassword" TEXT,
  "role"           "Role"       NOT NULL DEFAULT E'INTERN',

  CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session"
(
  "id"                 SERIAL       NOT NULL,
  "createdAt"          TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt"          TIMESTAMP(3) NOT NULL,
  "expiresAt"          TIMESTAMP(3),
  "handle"             TEXT         NOT NULL,
  "hashedSessionToken" TEXT,
  "antiCSRFToken"      TEXT,
  "publicData"         TEXT,
  "privateData"        TEXT,
  "userId"             INTEGER,

  CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Token"
(
  "id"          SERIAL       NOT NULL,
  "createdAt"   TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt"   TIMESTAMP(3) NOT NULL,
  "hashedToken" TEXT         NOT NULL,
  "type"        "TokenType"  NOT NULL,
  "expiresAt"   TIMESTAMP(3) NOT NULL,
  "sentTo"      TEXT         NOT NULL,
  "userId"      INTEGER      NOT NULL,

  CONSTRAINT "Token_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobApplication"
(
  "id"                SERIAL       NOT NULL,
  "description"       TEXT         NOT NULL,
  "status"            "Status"     NOT NULL,
  "internId"          INTEGER      NOT NULL,
  "jobId"             INTEGER      NOT NULL,
  "createdAt"         TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "shownNotification" BOOLEAN      NOT NULL DEFAULT false,
  "updatedAt"         TIMESTAMP(3) NOT NULL,

  CONSTRAINT "JobApplication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Job"
(
  "id"             SERIAL       NOT NULL,
  "position"       TEXT         NOT NULL,
  "description"    TEXT         NOT NULL,
  "jobType"        "JobType"    NOT NULL,
  "skillsRequired" TEXT[],
  "numOfOpenings"  INTEGER      NOT NULL DEFAULT 1,
  "duration"       TEXT         NOT NULL,
  "postedAt"       TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "location"       TEXT         NOT NULL DEFAULT E'Remote',
  "salary"         TEXT,
  "industry"       "Tag"        NOT NULL,
  "closed"         BOOLEAN      NOT NULL DEFAULT false,
  "companyId"      INTEGER      NOT NULL,
  "companyName"    TEXT         NOT NULL,
  "updatedAt"      TIMESTAMP(3) NOT NULL,

  CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Company_userId_key" ON "Company" ("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Company_name_key" ON "Company" ("name");

-- CreateIndex
CREATE UNIQUE INDEX "Intern_userId_key" ON "Intern" ("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User" ("email");

-- CreateIndex
CREATE UNIQUE INDEX "Session_handle_key" ON "Session" ("handle");

-- CreateIndex
CREATE UNIQUE INDEX "Token_hashedToken_type_key" ON "Token" ("hashedToken", "type");

-- AddForeignKey
ALTER TABLE "Company"
  ADD CONSTRAINT "Company_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Intern"
  ADD CONSTRAINT "Intern_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session"
  ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Token"
  ADD CONSTRAINT "Token_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobApplication"
  ADD CONSTRAINT "JobApplication_internId_fkey" FOREIGN KEY ("internId") REFERENCES "Intern" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobApplication"
  ADD CONSTRAINT "JobApplication_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job"
  ADD CONSTRAINT "Job_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;
