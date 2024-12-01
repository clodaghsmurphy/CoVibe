/*
  Warnings:

  - You are about to drop the column `notes` on the `Grocery` table. All the data in the column will be lost.
  - You are about to drop the column `source` on the `PriceRecord` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Grocery" DROP COLUMN "notes";

-- AlterTable
ALTER TABLE "PriceRecord" DROP COLUMN "source",
ADD COLUMN     "store" TEXT,
ALTER COLUMN "date" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "_HouseholdMembers" ADD CONSTRAINT "_HouseholdMembers_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_HouseholdMembers_AB_unique";
