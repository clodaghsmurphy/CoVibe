-- CreateEnum
CREATE TYPE "Level" AS ENUM ('Info', 'Warn', 'Error');

-- CreateTable
CREATE TABLE "Log" (
    "id" SERIAL NOT NULL,
    "level" "Level" NOT NULL,
    "message" TEXT NOT NULL,
    "meta" JSONB NOT NULL,

    CONSTRAINT "Log_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
