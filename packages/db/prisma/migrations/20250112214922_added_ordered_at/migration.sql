-- CreateEnum
CREATE TYPE "ShoppingListStatus" AS ENUM ('PENDING', 'COMPLETED');

-- AlterTable
ALTER TABLE "ShoppingList" ADD COLUMN     "orderedAt" TIMESTAMP(3),
ADD COLUMN     "status" "ShoppingListStatus" NOT NULL DEFAULT 'PENDING';
