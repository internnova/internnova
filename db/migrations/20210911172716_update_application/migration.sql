/*
  Warnings:

  - You are about to drop the column `internId` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `message` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the `_ApplicationToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `aboutIntern` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Application` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_ApplicationToUser" DROP CONSTRAINT "_ApplicationToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_ApplicationToUser" DROP CONSTRAINT "_ApplicationToUser_B_fkey";

-- AlterTable
ALTER TABLE "Application" DROP COLUMN "internId",
DROP COLUMN "message",
ADD COLUMN     "aboutIntern" TEXT NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL,
ALTER COLUMN "internPhoneNumber" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "_ApplicationToUser";

-- AddForeignKey
ALTER TABLE "Application" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
