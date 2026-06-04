-- CreateEnum
CREATE TYPE "StatusCurso" AS ENUM ('ANDAMENTO', 'ANALISE', 'CONCLUIDO', 'FECHADO');

-- CreateEnum
CREATE TYPE "StatusInscricao" AS ENUM ('PENDENTE', 'DEFERIDO', 'INDEFERIDO');

-- CreateEnum
CREATE TYPE "Cargos" AS ENUM ('ALUNO', 'PROFESSOR', 'DEPPI', 'ADMIN');

-- CreateEnum
CREATE TYPE "DiasSemana" AS ENUM ('SEGUNDA', 'TERCA', 'QUARTA', 'QUINTA', 'SEXTA', 'SABADO', 'DOMINGO');

-- CreateTable
CREATE TABLE "Usuario" (
    "idUsuario" SERIAL NOT NULL,
    "usuario_nome" TEXT NOT NULL,
    "usuario_email" TEXT NOT NULL,
    "usuario_senha" TEXT NOT NULL,
    "usuario_cpf" TEXT NOT NULL,
    "cargos" "Cargos"[] DEFAULT ARRAY['ALUNO']::"Cargos"[],

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("idUsuario")
);

-- CreateTable
CREATE TABLE "Aluno" (
    "idAluno" SERIAL NOT NULL,
    "aluno_matricula" TEXT NOT NULL,
    "fkUsuario" INTEGER NOT NULL,

    CONSTRAINT "Aluno_pkey" PRIMARY KEY ("idAluno")
);

-- CreateTable
CREATE TABLE "Professor" (
    "idProfessor" SERIAL NOT NULL,
    "professor_siap" TEXT NOT NULL,
    "fkUsuario" INTEGER NOT NULL,

    CONSTRAINT "Professor_pkey" PRIMARY KEY ("idProfessor")
);

-- CreateTable
CREATE TABLE "Curso" (
    "idCurso" SERIAL NOT NULL,
    "curso_nome" TEXT NOT NULL,
    "curso_carga_horaria" INTEGER NOT NULL,
    "curso_vagas" INTEGER NOT NULL,
    "curso_status" "StatusCurso" NOT NULL DEFAULT 'ANALISE',
    "curso_data_inicio" DATE NOT NULL,
    "curso_data_fim" DATE NOT NULL,
    "curso_horario_inicio" TIME NOT NULL,
    "curso_horario_fim" TIME NOT NULL,
    "curso_dias_semana" "DiasSemana"[],
    "fkInstituicao" INTEGER NOT NULL,

    CONSTRAINT "Curso_pkey" PRIMARY KEY ("idCurso")
);

-- CreateTable
CREATE TABLE "Instituicao" (
    "idInstituicao" SERIAL NOT NULL,
    "instituicao_nome" TEXT NOT NULL,
    "instituicao_cidade" TEXT NOT NULL,
    "instituicao_campus" TEXT NOT NULL,
    "instituicao_cnpj" TEXT NOT NULL,

    CONSTRAINT "Instituicao_pkey" PRIMARY KEY ("idInstituicao")
);

-- CreateTable
CREATE TABLE "Inscricao" (
    "idInscricao" SERIAL NOT NULL,
    "inscricao_data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "curso_status" "StatusInscricao" NOT NULL DEFAULT 'PENDENTE',
    "fkAluno" INTEGER NOT NULL,
    "fkCurso" INTEGER NOT NULL,

    CONSTRAINT "Inscricao_pkey" PRIMARY KEY ("idInscricao")
);

-- CreateTable
CREATE TABLE "_CursoToProfessor" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CursoToProfessor_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_usuario_email_key" ON "Usuario"("usuario_email");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_usuario_cpf_key" ON "Usuario"("usuario_cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_fkUsuario_key" ON "Aluno"("fkUsuario");

-- CreateIndex
CREATE UNIQUE INDEX "Professor_fkUsuario_key" ON "Professor"("fkUsuario");

-- CreateIndex
CREATE INDEX "_CursoToProfessor_B_index" ON "_CursoToProfessor"("B");

-- AddForeignKey
ALTER TABLE "Aluno" ADD CONSTRAINT "Aluno_fkUsuario_fkey" FOREIGN KEY ("fkUsuario") REFERENCES "Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Professor" ADD CONSTRAINT "Professor_fkUsuario_fkey" FOREIGN KEY ("fkUsuario") REFERENCES "Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Curso" ADD CONSTRAINT "Curso_fkInstituicao_fkey" FOREIGN KEY ("fkInstituicao") REFERENCES "Instituicao"("idInstituicao") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inscricao" ADD CONSTRAINT "Inscricao_fkAluno_fkey" FOREIGN KEY ("fkAluno") REFERENCES "Aluno"("idAluno") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inscricao" ADD CONSTRAINT "Inscricao_fkCurso_fkey" FOREIGN KEY ("fkCurso") REFERENCES "Curso"("idCurso") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CursoToProfessor" ADD CONSTRAINT "_CursoToProfessor_A_fkey" FOREIGN KEY ("A") REFERENCES "Curso"("idCurso") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CursoToProfessor" ADD CONSTRAINT "_CursoToProfessor_B_fkey" FOREIGN KEY ("B") REFERENCES "Professor"("idProfessor") ON DELETE CASCADE ON UPDATE CASCADE;
