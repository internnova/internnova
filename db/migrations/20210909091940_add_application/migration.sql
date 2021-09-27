-- CreateTable
CREATE TABLE "Application" (
    "id" SERIAL NOT NULL,
    "internName" TEXT NOT NULL,
    "internEmail" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "resume" TEXT NOT NULL,
    "internId" INTEGER NOT NULL,
    "internshipId" INTEGER,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Application" ADD FOREIGN KEY ("internId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD FOREIGN KEY ("internshipId") REFERENCES "internships"("id") ON DELETE SET NULL ON UPDATE CASCADE;
