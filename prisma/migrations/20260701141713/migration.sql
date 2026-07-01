-- CreateEnum
CREATE TYPE "StatusCurso" AS ENUM ('ANDAMENTO', 'ANALISE', 'CONCLUIDO', 'FECHADO');

-- CreateEnum
CREATE TYPE "StatusInscricao" AS ENUM ('PENDENTE', 'DEFERIDO', 'INDEFERIDO', 'CANCELADO');

-- CreateEnum
CREATE TYPE "DiasSemana" AS ENUM ('SEGUNDA', 'TERCA', 'QUARTA', 'QUINTA', 'SEXTA', 'SABADO', 'DOMINGO');

-- CreateEnum
CREATE TYPE "Sexo" AS ENUM ('MASCULINO', 'FEMININO');

-- CreateEnum
CREATE TYPE "Raca" AS ENUM ('AMARELA', 'BRANCA', 'PARDA', 'PRETA', 'INDIGENA', 'NAO_DECLARADO');

-- CreateEnum
CREATE TYPE "Acao" AS ENUM ('CREATE', 'UPDATE', 'DELETE');

-- CreateEnum
CREATE TYPE "Cargos" AS ENUM ('ALUNO', 'PROFESSOR', 'ADMIN', 'DEPPI');

-- CreateEnum
CREATE TYPE "CategoriaDocumento" AS ENUM ('RG', 'CPF', 'COMPROVANTE_RESIDENCIA', 'COMPROVANTE_RENDA', 'HISTORICO_ESCOLAR', 'OUTRO');

-- CreateTable
CREATE TABLE "usuario" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "nome_social" TEXT,
    "data_nasc" TIMESTAMP(3) NOT NULL,
    "naturalidade" TEXT NOT NULL,
    "email_institucional" TEXT NOT NULL,
    "email_secundario" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "nome_mae" TEXT NOT NULL,
    "nome_pai" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,
    "sexo" "Sexo" NOT NULL,
    "raca" "Raca" NOT NULL,
    "fk_identidade" TEXT NOT NULL,
    "fk_endereco" INTEGER NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "aluno" (
    "id" TEXT NOT NULL,
    "matricula" TEXT NOT NULL,
    "fk_usuario" TEXT NOT NULL,

    CONSTRAINT "aluno_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "professor" (
    "id" TEXT NOT NULL,
    "siape" TEXT NOT NULL,
    "email_siape" TEXT,
    "telefones_institucionais" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "telefones_pessoais" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "emPGD" BOOLEAN,
    "email_notificacoes" TEXT,
    "email_classroom" TEXT,
    "titulacao" TEXT,
    "escolaridade" TEXT,
    "grupo_sanguineo" TEXT,
    "setor_suap" TEXT,
    "lotacao_siape" TEXT,
    "execicio_siape" TEXT,
    "situacao" TEXT,
    "regime_trabalho" TEXT,
    "jornada_trabalho" TEXT,
    "operador_raiox" BOOLEAN,
    "inicio_servico_publico" DATE,
    "data_posse_instituicao" DATE,
    "inicio_servico_instituicao" DATE,
    "tempo_servico_instituicao" TEXT,
    "data_posse_cargo" DATE,
    "inicio_exercicio_cargo" DATE,
    "tempo_servico_cargo" DATE,
    "cargo_institucional" TEXT,
    "classe_cargo" TEXT,
    "padrao" TEXT,
    "grupo_cargo" TEXT,
    "codigo_vaga" INTEGER,
    "NCE" TEXT,
    "qtd_dependentes" INTEGER,
    "pis_pasep" TEXT,
    "fk_usuario" TEXT NOT NULL,

    CONSTRAINT "professor_pkey" PRIMARY KEY ("id")
);

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
CREATE TABLE "curso" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "carga_horaria" INTEGER NOT NULL,
    "vagas" INTEGER NOT NULL,
    "status" "StatusCurso" NOT NULL DEFAULT 'ANALISE',
    "data_inicio" DATE NOT NULL,
    "data_fim" DATE NOT NULL,
    "horario_inicio" TIME NOT NULL,
    "horario_fim" TIME NOT NULL,
    "dias_semana" "DiasSemana"[],
    "fk_instituicao" TEXT NOT NULL,
    "capaID" TEXT,

    CONSTRAINT "curso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Capa" (
    "id" TEXT NOT NULL,
    "nome_arquivo" TEXT NOT NULL,
    "nome_original" TEXT NOT NULL,
    "mime_type" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "path" TEXT NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Capa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "alocacao_professor" (
    "id" TEXT NOT NULL,
    "fk_professor" TEXT NOT NULL,
    "fk_curso" TEXT NOT NULL,
    "carga_horaria" INTEGER NOT NULL,
    "data_alocacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "alocacao_professor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "instituicao" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "campus" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,

    CONSTRAINT "instituicao_pkey" PRIMARY KEY ("id")
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
    "numero" TEXT NOT NULL,
    "zona_eleitoral" TEXT NOT NULL,
    "secao_eleitoral" TEXT NOT NULL,
    "UF" TEXT NOT NULL,
    "fk_usuario" TEXT NOT NULL,

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

-- CreateTable
CREATE TABLE "cargo" (
    "id" INTEGER NOT NULL,
    "cargo" "Cargos" NOT NULL,
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
CREATE TABLE "historico" (
    "id" SERIAL NOT NULL,
    "alteracao" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "status_anterior" "StatusInscricao" NOT NULL,
    "status_atual" "StatusInscricao" NOT NULL,
    "data_modificacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fk_aluno" TEXT NOT NULL,
    "fk_inscricao" TEXT NOT NULL,
    "fk_usuario_responsavel" TEXT NOT NULL,

    CONSTRAINT "historico_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "_CargoToUsuario" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_CargoToUsuario_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_CargoToPermissoes" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CargoToPermissoes_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_institucional_key" ON "usuario"("email_institucional");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_fk_identidade_key" ON "usuario"("fk_identidade");

-- CreateIndex
CREATE UNIQUE INDEX "aluno_matricula_key" ON "aluno"("matricula");

-- CreateIndex
CREATE UNIQUE INDEX "aluno_fk_usuario_key" ON "aluno"("fk_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "professor_siape_key" ON "professor"("siape");

-- CreateIndex
CREATE UNIQUE INDEX "professor_email_siape_key" ON "professor"("email_siape");

-- CreateIndex
CREATE UNIQUE INDEX "professor_fk_usuario_key" ON "professor"("fk_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "curso_capaID_key" ON "curso"("capaID");

-- CreateIndex
CREATE UNIQUE INDEX "alocacao_professor_fk_professor_fk_curso_key" ON "alocacao_professor"("fk_professor", "fk_curso");

-- CreateIndex
CREATE UNIQUE INDEX "instituicao_cnpj_key" ON "instituicao"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "identidade_rg_key" ON "identidade"("rg");

-- CreateIndex
CREATE UNIQUE INDEX "identidade_cpf_key" ON "identidade"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "titulo_eleitor_fk_usuario_key" ON "titulo_eleitor"("fk_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "renda_familiar_fk_inscricao_key" ON "renda_familiar"("fk_inscricao");

-- CreateIndex
CREATE INDEX "auditoria_tabela_modificada_id_modificado_idx" ON "auditoria"("tabela_modificada", "id_modificado");

-- CreateIndex
CREATE INDEX "_CargoToUsuario_B_index" ON "_CargoToUsuario"("B");

-- CreateIndex
CREATE INDEX "_CargoToPermissoes_B_index" ON "_CargoToPermissoes"("B");

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_fk_endereco_fkey" FOREIGN KEY ("fk_endereco") REFERENCES "endereco"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_fk_identidade_fkey" FOREIGN KEY ("fk_identidade") REFERENCES "identidade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aluno" ADD CONSTRAINT "aluno_fk_usuario_fkey" FOREIGN KEY ("fk_usuario") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "professor" ADD CONSTRAINT "professor_fk_usuario_fkey" FOREIGN KEY ("fk_usuario") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "curso" ADD CONSTRAINT "curso_fk_instituicao_fkey" FOREIGN KEY ("fk_instituicao") REFERENCES "instituicao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "curso" ADD CONSTRAINT "curso_capaID_fkey" FOREIGN KEY ("capaID") REFERENCES "Capa"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alocacao_professor" ADD CONSTRAINT "alocacao_professor_fk_professor_fkey" FOREIGN KEY ("fk_professor") REFERENCES "professor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alocacao_professor" ADD CONSTRAINT "alocacao_professor_fk_curso_fkey" FOREIGN KEY ("fk_curso") REFERENCES "curso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inscricao" ADD CONSTRAINT "inscricao_fk_aluno_fkey" FOREIGN KEY ("fk_aluno") REFERENCES "aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inscricao" ADD CONSTRAINT "inscricao_fk_curso_fkey" FOREIGN KEY ("fk_curso") REFERENCES "curso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "titulo_eleitor" ADD CONSTRAINT "titulo_eleitor_fk_usuario_fkey" FOREIGN KEY ("fk_usuario") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "renda_familiar" ADD CONSTRAINT "renda_familiar_fk_inscricao_fkey" FOREIGN KEY ("fk_inscricao") REFERENCES "inscricao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historico" ADD CONSTRAINT "historico_fk_aluno_fkey" FOREIGN KEY ("fk_aluno") REFERENCES "aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historico" ADD CONSTRAINT "historico_fk_inscricao_fkey" FOREIGN KEY ("fk_inscricao") REFERENCES "inscricao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historico" ADD CONSTRAINT "historico_fk_usuario_responsavel_fkey" FOREIGN KEY ("fk_usuario_responsavel") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documento" ADD CONSTRAINT "documento_fk_inscricao_fkey" FOREIGN KEY ("fk_inscricao") REFERENCES "inscricao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CargoToUsuario" ADD CONSTRAINT "_CargoToUsuario_A_fkey" FOREIGN KEY ("A") REFERENCES "cargo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CargoToUsuario" ADD CONSTRAINT "_CargoToUsuario_B_fkey" FOREIGN KEY ("B") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CargoToPermissoes" ADD CONSTRAINT "_CargoToPermissoes_A_fkey" FOREIGN KEY ("A") REFERENCES "cargo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CargoToPermissoes" ADD CONSTRAINT "_CargoToPermissoes_B_fkey" FOREIGN KEY ("B") REFERENCES "permissoes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
