/*
  Warnings:

  - You are about to drop the column `arrive` on the `Coach` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Coach` table. All the data in the column will be lost.
  - You are about to drop the column `start` on the `Coach` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `Coach` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Coach" DROP COLUMN "arrive",
DROP COLUMN "price",
DROP COLUMN "start",
DROP COLUMN "time",
ADD COLUMN     "capacity" INTEGER;

-- CreateTable
CREATE TABLE "Driver" (
    "coachId" INTEGER,
    "id" SERIAL NOT NULL,
    "name" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Route" (
    "coachId" INTEGER,
    "id" SERIAL NOT NULL,
    "starting" TEXT,
    "destination" TEXT,
    "departure" TIMESTAMP(3) NOT NULL,
    "price" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Seat" (
    "coachId" INTEGER,
    "id" SERIAL NOT NULL,
    "row" TEXT,
    "number" INTEGER,
    "status" BOOLEAN,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Driver" ADD FOREIGN KEY ("coachId") REFERENCES "Coach"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Route" ADD FOREIGN KEY ("coachId") REFERENCES "Coach"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Seat" ADD FOREIGN KEY ("coachId") REFERENCES "Coach"("id") ON DELETE SET NULL ON UPDATE CASCADE;
