/*
  Warnings:

  - You are about to drop the column `imaUrl` on the `Barbershop` table. All the data in the column will be lost.
  - Added the required column `imageUrl` to the `Barbershop` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Barbershop" DROP COLUMN "imaUrl",
ADD COLUMN     "imageUrl" TEXT NOT NULL;
