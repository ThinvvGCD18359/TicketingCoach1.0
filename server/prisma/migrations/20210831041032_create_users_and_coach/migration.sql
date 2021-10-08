/*
  Warnings:

  - You are about to drop the column `route` on the `Coach` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[phonenumber]` on the table `Coach` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[plates]` on the table `Coach` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `time` to the `Coach` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Coach" DROP COLUMN "route",
ADD COLUMN     "arrive" TEXT,
ADD COLUMN     "phonenumber" TEXT,
ADD COLUMN     "plates" TEXT,
ADD COLUMN     "price" INTEGER,
ADD COLUMN     "start" TEXT,
ADD COLUMN     "time" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Coach.phonenumber_unique" ON "Coach"("phonenumber");

-- CreateIndex
CREATE UNIQUE INDEX "Coach.plates_unique" ON "Coach"("plates");
