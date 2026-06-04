/*
  Warnings:

  - You are about to drop the `Aluno` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Curso` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Inscricao` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Instituicao` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Professor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Usuario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CursoToProfessor` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Sexo" AS ENUM ('MASCULINO', 'FEMININO');

-- CreateEnum
CREATE TYPE "Raca" AS ENUM ('AMARELA', 'BRANCA', 'PARDA', 'PRETA', 'INDIGENA', 'NAO_DECLARADO');

-- CreateEnum
CREATE TYPE "Acao" AS ENUM ('CREATE', 'UPDATE', 'DELETE');

-- DropForeignKey
ALTER TABLE "Aluno" DROP CONSTRAINT "Aluno_fkUsuario_fkey";

-- DropForeignKey
ALTER TABLE "Curso" DROP CONSTRAINT "Curso_fkInstituicao_fkey";

-- DropForeignKey
ALTER TABLE "Inscricao" DROP CONSTRAINT "Inscricao_fkAluno_fkey";

-- DropForeignKey
ALTER TABLE "Inscricao" DROP CONSTRAINT "Inscricao_fkCurso_fkey";

-- DropForeignKey
ALTER TABLE "Professor" DROP CONSTRAINT "Professor_fkUsuario_fkey";

-- DropForeignKey
ALTER TABLE "_CursoToProfessor" DROP CONSTRAINT "_CursoToProfessor_A_fkey";

-- DropForeignKey
ALTER TABLE "_CursoToProfessor" DROP CONSTRAINT "_CursoToProfessor_B_fkey";

-- DropTable
DROP TABLE "Aluno";

-- DropTable
DROP TABLE "Curso";

-- DropTable
DROP TABLE "Inscricao";

-- DropTable
DROP TABLE "Instituicao";

-- DropTable
DROP TABLE "Professor";

-- DropTable
DROP TABLE "Usuario";

-- DropTable
DROP TABLE "_CursoToProfessor";

-- DropEnum
DROP TYPE "Cargos";

-- CreateTable
CREATE TABLE "usuario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "nome_social" TEXT,
    "data_nasc" TIMESTAMP(3) NOT NULL,
    "naturalidade" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,
    "sexo" "Sexo" NOT NULL,
    "raca" "Raca" NOT NULL,
    "fk_identidade" INTEGER NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "aluno" (
    "id" SERIAL NOT NULL,
    "matricula" TEXT NOT NULL,
    "fk_usuario" INTEGER NOT NULL,

    CONSTRAINT "aluno_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "professor" (
    "id" SERIAL NOT NULL,
    "siap" TEXT NOT NULL,
    "fk_usuario" INTEGER NOT NULL,

    CONSTRAINT "professor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "curso" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "carga_horaria" INTEGER NOT NULL,
    "vagas" INTEGER NOT NULL,
    "status" "StatusCurso" NOT NULL DEFAULT 'ANALISE',
    "data_inicio" DATE NOT NULL,
    "data_fim" DATE NOT NULL,
    "horario_inicio" TIME NOT NULL,
    "horario_fim" TIME NOT NULL,
    "dias_semana" "DiasSemana"[],
    "fk_instituicao" INTEGER NOT NULL,

    CONSTRAINT "curso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "alocacoes_professores" (
    "id" SERIAL NOT NULL,
    "fk_professor" INTEGER NOT NULL,
    "fk_curso" INTEGER NOT NULL,
    "carga_horaria" INTEGER NOT NULL,
    "data_alocacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "alocacoes_professores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "instituiocao" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "campus" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,

    CONSTRAINT "instituiocao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inscricoes" (
    "id" SERIAL NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "curso_status" "StatusInscricao" NOT NULL DEFAULT 'PENDENTE',
    "fk_aluno" INTEGER NOT NULL,
    "fk_curso" INTEGER NOT NULL,

    CONSTRAINT "inscricoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "identidades" (
    "id" SERIAL NOT NULL,
    "rg" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "orgao_emissor" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "data_emissao" DATE NOT NULL,

    CONSTRAINT "identidades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rendas_familiares" (
    "id" SERIAL NOT NULL,
    "renda_familiar" DOUBLE PRECISION NOT NULL,
    "numero_pessoas" INTEGER NOT NULL,
    "fk_inscricao" INTEGER NOT NULL,

    CONSTRAINT "rendas_familiares_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auditorias" (
    "id" SERIAL NOT NULL,
    "tabela_modificada" TEXT NOT NULL,
    "acao_realizada" "Acao" NOT NULL,
    "id_modificado" INTEGER NOT NULL,
    "dados_antigos" JSONB,
    "dados_inseridos" JSONB,
    "fk_usuario" INTEGER,
    "data_modificacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "auditorias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cargo" (
    "id" SERIAL NOT NULL,
    "cargo" TEXT NOT NULL,
    "desc" TEXT,

    CONSTRAINT "cargo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "permissoes" (
    "id" SERIAL NOT NULL,
    "permissao" TEXT NOT NULL,
    "desc" TEXT,

    CONSTRAINT "permissoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CargoToUsuario" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CargoToUsuario_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_CargoToPermissoes" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CargoToPermissoes_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_fk_identidade_key" ON "usuario"("fk_identidade");

-- CreateIndex
CREATE UNIQUE INDEX "aluno_matricula_key" ON "aluno"("matricula");

-- CreateIndex
CREATE UNIQUE INDEX "aluno_fk_usuario_key" ON "aluno"("fk_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "professor_siap_key" ON "professor"("siap");

-- CreateIndex
CREATE UNIQUE INDEX "professor_fk_usuario_key" ON "professor"("fk_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "alocacoes_professores_fk_professor_fk_curso_key" ON "alocacoes_professores"("fk_professor", "fk_curso");

-- CreateIndex
CREATE UNIQUE INDEX "instituiocao_cnpj_key" ON "instituiocao"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "identidades_rg_key" ON "identidades"("rg");

-- CreateIndex
CREATE UNIQUE INDEX "identidades_cpf_key" ON "identidades"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "rendas_familiares_fk_inscricao_key" ON "rendas_familiares"("fk_inscricao");

-- CreateIndex
CREATE INDEX "auditorias_tabela_modificada_id_modificado_idx" ON "auditorias"("tabela_modificada", "id_modificado");

-- CreateIndex
CREATE INDEX "_CargoToUsuario_B_index" ON "_CargoToUsuario"("B");

-- CreateIndex
CREATE INDEX "_CargoToPermissoes_B_index" ON "_CargoToPermissoes"("B");

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_fk_identidade_fkey" FOREIGN KEY ("fk_identidade") REFERENCES "identidades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aluno" ADD CONSTRAINT "aluno_fk_usuario_fkey" FOREIGN KEY ("fk_usuario") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "professor" ADD CONSTRAINT "professor_fk_usuario_fkey" FOREIGN KEY ("fk_usuario") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "curso" ADD CONSTRAINT "curso_fk_instituicao_fkey" FOREIGN KEY ("fk_instituicao") REFERENCES "instituiocao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alocacoes_professores" ADD CONSTRAINT "alocacoes_professores_fk_professor_fkey" FOREIGN KEY ("fk_professor") REFERENCES "professor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alocacoes_professores" ADD CONSTRAINT "alocacoes_professores_fk_curso_fkey" FOREIGN KEY ("fk_curso") REFERENCES "curso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inscricoes" ADD CONSTRAINT "inscricoes_fk_aluno_fkey" FOREIGN KEY ("fk_aluno") REFERENCES "aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inscricoes" ADD CONSTRAINT "inscricoes_fk_curso_fkey" FOREIGN KEY ("fk_curso") REFERENCES "curso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rendas_familiares" ADD CONSTRAINT "rendas_familiares_fk_inscricao_fkey" FOREIGN KEY ("fk_inscricao") REFERENCES "inscricoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CargoToUsuario" ADD CONSTRAINT "_CargoToUsuario_A_fkey" FOREIGN KEY ("A") REFERENCES "cargo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CargoToUsuario" ADD CONSTRAINT "_CargoToUsuario_B_fkey" FOREIGN KEY ("B") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CargoToPermissoes" ADD CONSTRAINT "_CargoToPermissoes_A_fkey" FOREIGN KEY ("A") REFERENCES "cargo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CargoToPermissoes" ADD CONSTRAINT "_CargoToPermissoes_B_fkey" FOREIGN KEY ("B") REFERENCES "permissoes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
