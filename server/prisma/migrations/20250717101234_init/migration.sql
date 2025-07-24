-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('pending', 'in_progress', 'completed', 'cancelled');

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "available" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isFeatured" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "CustomCakeOrder" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "shape" TEXT NOT NULL,
    "flavor" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "theme" TEXT,
    "messageOnCake" TEXT,
    "imageUpload" TEXT,
    "deliveryDate" TIMESTAMP(3) NOT NULL,
    "address" TEXT NOT NULL,
    "status" "OrderStatus" NOT NULL DEFAULT 'pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CustomCakeOrder_pkey" PRIMARY KEY ("id")
);
