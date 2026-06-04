/*
  Warnings:

  - The primary key for the `_CargoToPermissoes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `_CargoToUsuario` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `alocacoes_professores` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `aluno` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `auditorias` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `cargo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `curso` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `identidades` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `inscricoes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `instituiocao` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `permissoes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `professor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `rendas_familiares` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `usuario` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "_CargoToPermissoes" DROP CONSTRAINT "_CargoToPermissoes_A_fkey";

-- DropForeignKey
ALTER TABLE "_CargoToPermissoes" DROP CONSTRAINT "_CargoToPermissoes_B_fkey";

-- DropForeignKey
ALTER TABLE "_CargoToUsuario" DROP CONSTRAINT "_CargoToUsuario_A_fkey";

-- DropForeignKey
ALTER TABLE "_CargoToUsuario" DROP CONSTRAINT "_CargoToUsuario_B_fkey";

-- DropForeignKey
ALTER TABLE "alocacoes_professores" DROP CONSTRAINT "alocacoes_professores_fk_curso_fkey";

-- DropForeignKey
ALTER TABLE "alocacoes_professores" DROP CONSTRAINT "alocacoes_professores_fk_professor_fkey";

-- DropForeignKey
ALTER TABLE "aluno" DROP CONSTRAINT "aluno_fk_usuario_fkey";

-- DropForeignKey
ALTER TABLE "curso" DROP CONSTRAINT "curso_fk_instituicao_fkey";

-- DropForeignKey
ALTER TABLE "inscricoes" DROP CONSTRAINT "inscricoes_fk_aluno_fkey";

-- DropForeignKey
ALTER TABLE "inscricoes" DROP CONSTRAINT "inscricoes_fk_curso_fkey";

-- DropForeignKey
ALTER TABLE "professor" DROP CONSTRAINT "professor_fk_usuario_fkey";

-- DropForeignKey
ALTER TABLE "rendas_familiares" DROP CONSTRAINT "rendas_familiares_fk_inscricao_fkey";

-- DropForeignKey
ALTER TABLE "usuario" DROP CONSTRAINT "usuario_fk_identidade_fkey";

-- AlterTable
ALTER TABLE "_CargoToPermissoes" DROP CONSTRAINT "_CargoToPermissoes_AB_pkey",
ALTER COLUMN "A" SET DATA TYPE TEXT,
ALTER COLUMN "B" SET DATA TYPE TEXT,
ADD CONSTRAINT "_CargoToPermissoes_AB_pkey" PRIMARY KEY ("A", "B");

-- AlterTable
ALTER TABLE "_CargoToUsuario" DROP CONSTRAINT "_CargoToUsuario_AB_pkey",
ALTER COLUMN "A" SET DATA TYPE TEXT,
ALTER COLUMN "B" SET DATA TYPE TEXT,
ADD CONSTRAINT "_CargoToUsuario_AB_pkey" PRIMARY KEY ("A", "B");

-- AlterTable
ALTER TABLE "alocacoes_professores" DROP CONSTRAINT "alocacoes_professores_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "fk_professor" SET DATA TYPE TEXT,
ALTER COLUMN "fk_curso" SET DATA TYPE TEXT,
ADD CONSTRAINT "alocacoes_professores_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "alocacoes_professores_id_seq";

-- AlterTable
ALTER TABLE "aluno" DROP CONSTRAINT "aluno_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "fk_usuario" SET DATA TYPE TEXT,
ADD CONSTRAINT "aluno_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "aluno_id_seq";

-- AlterTable
ALTER TABLE "auditorias" DROP CONSTRAINT "auditorias_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "fk_usuario" SET DATA TYPE TEXT,
ADD CONSTRAINT "auditorias_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "auditorias_id_seq";

-- AlterTable
ALTER TABLE "cargo" DROP CONSTRAINT "cargo_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "cargo_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "cargo_id_seq";

-- AlterTable
ALTER TABLE "curso" DROP CONSTRAINT "curso_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "fk_instituicao" SET DATA TYPE TEXT,
ADD CONSTRAINT "curso_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "curso_id_seq";

-- AlterTable
ALTER TABLE "identidades" DROP CONSTRAINT "identidades_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "identidades_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "identidades_id_seq";

-- AlterTable
ALTER TABLE "inscricoes" DROP CONSTRAINT "inscricoes_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "fk_aluno" SET DATA TYPE TEXT,
ALTER COLUMN "fk_curso" SET DATA TYPE TEXT,
ADD CONSTRAINT "inscricoes_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "inscricoes_id_seq";

-- AlterTable
ALTER TABLE "instituiocao" DROP CONSTRAINT "instituiocao_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "instituiocao_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "instituiocao_id_seq";

-- AlterTable
ALTER TABLE "permissoes" DROP CONSTRAINT "permissoes_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "permissoes_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "permissoes_id_seq";

-- AlterTable
ALTER TABLE "professor" DROP CONSTRAINT "professor_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "fk_usuario" SET DATA TYPE TEXT,
ADD CONSTRAINT "professor_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "professor_id_seq";

-- AlterTable
ALTER TABLE "rendas_familiares" DROP CONSTRAINT "rendas_familiares_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "fk_inscricao" SET DATA TYPE TEXT,
ADD CONSTRAINT "rendas_familiares_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "rendas_familiares_id_seq";

-- AlterTable
ALTER TABLE "usuario" DROP CONSTRAINT "usuario_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "fk_identidade" SET DATA TYPE TEXT,
ADD CONSTRAINT "usuario_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "usuario_id_seq";

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
