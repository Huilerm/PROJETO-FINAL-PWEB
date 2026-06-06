/*
  Warnings:

  - You are about to drop the `instituiocao` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "curso" DROP CONSTRAINT "curso_fk_instituicao_fkey";

-- DropTable
DROP TABLE "instituiocao";

-- CreateTable
CREATE TABLE "instituicao" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "campus" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,

    CONSTRAINT "instituicao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "instituicao_cnpj_key" ON "instituicao"("cnpj");

-- AddForeignKey
ALTER TABLE "curso" ADD CONSTRAINT "curso_fk_instituicao_fkey" FOREIGN KEY ("fk_instituicao") REFERENCES "instituicao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
