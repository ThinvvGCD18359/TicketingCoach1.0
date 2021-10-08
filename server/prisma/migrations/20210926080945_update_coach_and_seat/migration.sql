/*
  Warnings:

  - You are about to drop the column `capacity` on the `Coach` table. All the data in the column will be lost.
  - You are about to drop the column `row` on the `Seat` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Coach" DROP COLUMN "capacity";

-- AlterTable
ALTER TABLE "Seat" DROP COLUMN "row",
ALTER COLUMN "number" SET DATA TYPE TEXT;
