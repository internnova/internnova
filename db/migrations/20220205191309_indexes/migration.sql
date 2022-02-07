-- CreateIndex
CREATE INDEX "Company_id_idx" ON "Company"("id");

-- CreateIndex
CREATE INDEX "Intern_id_idx" ON "Intern"("id");

-- CreateIndex
CREATE INDEX "Job_id_companyId_industry_description_companyName_position__idx" ON "Job"("id", "companyId", "industry", "description", "companyName", "position", "postedAt", "closed");

-- CreateIndex
CREATE INDEX "JobApplication_id_internId_jobId_idx" ON "JobApplication"("id", "internId", "jobId");

-- CreateIndex
CREATE INDEX "Session_id_hashedSessionToken_antiCSRFToken_idx" ON "Session"("id", "hashedSessionToken", "antiCSRFToken");

-- CreateIndex
CREATE INDEX "Token_id_userId_idx" ON "Token"("id", "userId");

-- CreateIndex
CREATE INDEX "User_id_email_role_idx" ON "User"("id", "email", "role");
