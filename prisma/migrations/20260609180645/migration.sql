-- CreateTable
CREATE TABLE "historico" (
    "id" SERIAL NOT NULL,
    "alteracao" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "status_anterior" "StatusInscricao" NOT NULL,
    "status_atual" "StatusInscricao" NOT NULL,
    "data_modificacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fk_aluno" TEXT NOT NULL,
    "fk_inscricao" TEXT NOT NULL,

    CONSTRAINT "historico_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "historico_fk_aluno_key" ON "historico"("fk_aluno");

-- CreateIndex
CREATE UNIQUE INDEX "historico_fk_inscricao_key" ON "historico"("fk_inscricao");

-- AddForeignKey
ALTER TABLE "historico" ADD CONSTRAINT "historico_fk_aluno_fkey" FOREIGN KEY ("fk_aluno") REFERENCES "aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historico" ADD CONSTRAINT "historico_fk_inscricao_fkey" FOREIGN KEY ("fk_inscricao") REFERENCES "inscricoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
