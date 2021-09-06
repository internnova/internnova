-- CreateTable
CREATE TABLE "internships" (
    "id" SERIAL NOT NULL,
    "position" TEXT NOT NULL,
    "contract" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "postedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "role" TEXT NOT NULL,
    "tools" TEXT[],
    "featured" BOOLEAN DEFAULT false,

    PRIMARY KEY ("id")
);
