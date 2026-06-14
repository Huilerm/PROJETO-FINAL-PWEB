/*
  Warnings:

  - You are about to drop the column `siap` on the `professor` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `usuario` table. All the data in the column will be lost.
  - You are about to drop the `alocacoes_professores` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `auditorias` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `identidades` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `inscricoes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `rendas_familiares` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[fk_usuario_responsavel]` on the table `historico` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[siape]` on the table `professor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email_siape]` on the table `professor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email_institucional]` on the table `usuario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fk_usuario_responsavel` to the `historico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cargo_institucional` to the `professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `classe_cargo` to the `professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `codigo_vaga` to the `professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data_posse_cargo` to the `professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data_posse_instituicao` to the `professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emPGD` to the `professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email_siape` to the `professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `escolaridade` to the `professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `execicio_siape` to the `professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `grupo_cargo` to the `professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `grupo_sanguineo` to the `professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inicio_exercicio_cargo` to the `professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inicio_servico_instituicao` to the `professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inicio_servico_publico` to the `professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jornada_trabalho` to the `professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lotacao_siape` to the `professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `operador_raiox` to the `professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `padrao` to the `professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pis_pasep` to the `professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `qtd_dependentes` to the `professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `regime_trabalho` to the `professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `setor_suap` to the `professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `siape` to the `professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `situacao` to the `professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tempo_servico_cargo` to the `professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tempo_servico_instituicao` to the `professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titulacao` to the `professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email_institucional` to the `usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email_secundario` to the `usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fk_endereco` to the `usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome_mae` to the `usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome_pai` to the `usuario` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "alocacoes_professores" DROP CONSTRAINT "alocacoes_professores_fk_curso_fkey";

-- DropForeignKey
ALTER TABLE "alocacoes_professores" DROP CONSTRAINT "alocacoes_professores_fk_professor_fkey";

-- DropForeignKey
ALTER TABLE "historico" DROP CONSTRAINT "historico_fk_inscricao_fkey";

-- DropForeignKey
ALTER TABLE "inscricoes" DROP CONSTRAINT "inscricoes_fk_aluno_fkey";

-- DropForeignKey
ALTER TABLE "inscricoes" DROP CONSTRAINT "inscricoes_fk_curso_fkey";

-- DropForeignKey
ALTER TABLE "rendas_familiares" DROP CONSTRAINT "rendas_familiares_fk_inscricao_fkey";

-- DropForeignKey
ALTER TABLE "usuario" DROP CONSTRAINT "usuario_fk_identidade_fkey";

-- DropIndex
DROP INDEX "professor_siap_key";

-- DropIndex
DROP INDEX "usuario_email_key";

-- AlterTable
ALTER TABLE "historico" ADD COLUMN     "fk_usuario_responsavel" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "professor" DROP COLUMN "siap",
ADD COLUMN     "NCE" TEXT,
ADD COLUMN     "cargo_institucional" TEXT NOT NULL,
ADD COLUMN     "classe_cargo" TEXT NOT NULL,
ADD COLUMN     "codigo_vaga" INTEGER NOT NULL,
ADD COLUMN     "data_posse_cargo" DATE NOT NULL,
ADD COLUMN     "data_posse_instituicao" DATE NOT NULL,
ADD COLUMN     "emPGD" BOOLEAN NOT NULL,
ADD COLUMN     "email_siape" TEXT NOT NULL,
ADD COLUMN     "escolaridade" TEXT NOT NULL,
ADD COLUMN     "execicio_siape" TEXT NOT NULL,
ADD COLUMN     "grupo_cargo" TEXT NOT NULL,
ADD COLUMN     "grupo_sanguineo" TEXT NOT NULL,
ADD COLUMN     "inicio_exercicio_cargo" DATE NOT NULL,
ADD COLUMN     "inicio_servico_instituicao" DATE NOT NULL,
ADD COLUMN     "inicio_servico_publico" DATE NOT NULL,
ADD COLUMN     "jornada_trabalho" TEXT NOT NULL,
ADD COLUMN     "lotacao_siape" TEXT NOT NULL,
ADD COLUMN     "operador_raiox" BOOLEAN NOT NULL,
ADD COLUMN     "padrao" TEXT NOT NULL,
ADD COLUMN     "pis_pasep" TEXT NOT NULL,
ADD COLUMN     "qtd_dependentes" INTEGER NOT NULL,
ADD COLUMN     "regime_trabalho" TEXT NOT NULL,
ADD COLUMN     "setor_suap" TEXT NOT NULL,
ADD COLUMN     "siape" TEXT NOT NULL,
ADD COLUMN     "situacao" TEXT NOT NULL,
ADD COLUMN     "telefones_institicionais" TEXT[],
ADD COLUMN     "telefones_pessoais" TEXT[],
ADD COLUMN     "tempo_servico_cargo" DATE NOT NULL,
ADD COLUMN     "tempo_servico_instituicao" TEXT NOT NULL,
ADD COLUMN     "titulacao" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "usuario" DROP COLUMN "email",
ADD COLUMN     "email_institucional" TEXT NOT NULL,
ADD COLUMN     "email_secundario" TEXT NOT NULL,
ADD COLUMN     "fk_endereco" INTEGER NOT NULL,
ADD COLUMN     "nome_mae" TEXT NOT NULL,
ADD COLUMN     "nome_pai" TEXT NOT NULL;

-- DropTable
DROP TABLE "alocacoes_professores";

-- DropTable
DROP TABLE "auditorias";

-- DropTable
DROP TABLE "identidades";

-- DropTable
DROP TABLE "inscricoes";

-- DropTable
DROP TABLE "rendas_familiares";

-- CreateTable
CREATE TABLE "endereco" (
    "id" SERIAL NOT NULL,
    "rua" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "cep" INTEGER NOT NULL,

    CONSTRAINT "endereco_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dados_bancarios" (
    "id" TEXT NOT NULL,
    "banco" TEXT NOT NULL,
    "agencia" INTEGER NOT NULL,
    "cc" INTEGER NOT NULL,

    CONSTRAINT "dados_bancarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "alocacao_professor " (
    "id" TEXT NOT NULL,
    "fk_professor" TEXT NOT NULL,
    "fk_curso" TEXT NOT NULL,
    "carga_horaria" INTEGER NOT NULL,
    "data_alocacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "alocacao_professor _pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inscricao" (
    "id" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "curso_status" "StatusInscricao" NOT NULL DEFAULT 'PENDENTE',
    "fk_aluno" TEXT NOT NULL,
    "fk_curso" TEXT NOT NULL,

    CONSTRAINT "inscricao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "identidade" (
    "id" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "orgao_emissor" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "data_expedicao" DATE NOT NULL,

    CONSTRAINT "identidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "titulo_eleitor" (
    "id" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "zona_eleitoral" TEXT NOT NULL,
    "secao_eleitoral" TEXT NOT NULL,
    "UF" TEXT NOT NULL,

    CONSTRAINT "titulo_eleitor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "renda_familiar" (
    "id" TEXT NOT NULL,
    "renda_familiar" DOUBLE PRECISION NOT NULL,
    "numero_pessoas" INTEGER NOT NULL,
    "fk_inscricao" TEXT NOT NULL,

    CONSTRAINT "renda_familiar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auditoria" (
    "id" TEXT NOT NULL,
    "tabela_modificada" TEXT NOT NULL,
    "acao_realizada" "Acao" NOT NULL,
    "id_modificado" INTEGER NOT NULL,
    "dados_antigos" JSONB,
    "dados_inseridos" JSONB,
    "fk_usuario" TEXT,
    "data_modificacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "auditoria_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "alocacao_professor _fk_professor_fk_curso_key" ON "alocacao_professor "("fk_professor", "fk_curso");

-- CreateIndex
CREATE UNIQUE INDEX "identidade_rg_key" ON "identidade"("rg");

-- CreateIndex
CREATE UNIQUE INDEX "identidade_cpf_key" ON "identidade"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "renda_familiar_fk_inscricao_key" ON "renda_familiar"("fk_inscricao");

-- CreateIndex
CREATE INDEX "auditoria_tabela_modificada_id_modificado_idx" ON "auditoria"("tabela_modificada", "id_modificado");

-- CreateIndex
CREATE UNIQUE INDEX "historico_fk_usuario_responsavel_key" ON "historico"("fk_usuario_responsavel");

-- CreateIndex
CREATE UNIQUE INDEX "professor_siape_key" ON "professor"("siape");

-- CreateIndex
CREATE UNIQUE INDEX "professor_email_siape_key" ON "professor"("email_siape");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_institucional_key" ON "usuario"("email_institucional");

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_fk_endereco_fkey" FOREIGN KEY ("fk_endereco") REFERENCES "endereco"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_fk_identidade_fkey" FOREIGN KEY ("fk_identidade") REFERENCES "identidade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alocacao_professor " ADD CONSTRAINT "alocacao_professor _fk_professor_fkey" FOREIGN KEY ("fk_professor") REFERENCES "professor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alocacao_professor " ADD CONSTRAINT "alocacao_professor _fk_curso_fkey" FOREIGN KEY ("fk_curso") REFERENCES "curso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inscricao" ADD CONSTRAINT "inscricao_fk_aluno_fkey" FOREIGN KEY ("fk_aluno") REFERENCES "aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inscricao" ADD CONSTRAINT "inscricao_fk_curso_fkey" FOREIGN KEY ("fk_curso") REFERENCES "curso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "renda_familiar" ADD CONSTRAINT "renda_familiar_fk_inscricao_fkey" FOREIGN KEY ("fk_inscricao") REFERENCES "inscricao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historico" ADD CONSTRAINT "historico_fk_inscricao_fkey" FOREIGN KEY ("fk_inscricao") REFERENCES "inscricao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historico" ADD CONSTRAINT "historico_fk_usuario_responsavel_fkey" FOREIGN KEY ("fk_usuario_responsavel") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
