/*
  Warnings:

  - A unique constraint covering the columns `[fk_usuario]` on the table `titulo_eleitor` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fk_usuario` to the `titulo_eleitor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "titulo_eleitor" ADD COLUMN     "fk_usuario" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "titulo_eleitor_fk_usuario_key" ON "titulo_eleitor"("fk_usuario");

-- AddForeignKey
ALTER TABLE "titulo_eleitor" ADD CONSTRAINT "titulo_eleitor_fk_usuario_fkey" FOREIGN KEY ("fk_usuario") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
