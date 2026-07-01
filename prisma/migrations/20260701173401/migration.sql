/*
  Warnings:

  - You are about to drop the column `telefones_institicionais` on the `professor` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "professor" DROP COLUMN "telefones_institicionais",
ADD COLUMN     "email_classroom" TEXT,
ADD COLUMN     "email_notificacoes" TEXT,
ADD COLUMN     "telefones_institucionais" TEXT[] DEFAULT ARRAY[]::TEXT[];
