-- CreateEnum
CREATE TYPE "CategoriaDocumento" AS ENUM ('RG', 'CPF', 'COMPROVANTE_RESIDENCIA', 'COMPROVANTE_RENDA', 'HISTORICO_ESCOLAR', 'OUTRO');

-- CreateTable
CREATE TABLE "documento" (
    "id" TEXT NOT NULL,
    "nome_original" TEXT NOT NULL,
    "nome_arquivo" TEXT NOT NULL,
    "caminho" TEXT NOT NULL,
    "tipo_mime" TEXT NOT NULL,
    "tamanho" INTEGER NOT NULL,
    "categoria" "CategoriaDocumento" DEFAULT 'OUTRO',
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fk_inscricao" TEXT NOT NULL,

    CONSTRAINT "documento_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "documento" ADD CONSTRAINT "documento_fk_inscricao_fkey" FOREIGN KEY ("fk_inscricao") REFERENCES "inscricao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
