-- AlterEnum
ALTER TYPE "StatusInscricao" ADD VALUE 'CANCELADO';

-- DropIndex
DROP INDEX "historico_fk_aluno_key";

-- DropIndex
DROP INDEX "historico_fk_inscricao_key";

-- DropIndex
DROP INDEX "historico_fk_usuario_responsavel_key";
