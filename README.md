# Requisitos Funcionais (RF)

## Comuns a todos os usuários:

	RF-001: O sistema deve permitir a criação de contas (foco no auto-cadastro para alunos).

	RF-002: O sistema deve permitir o login de usuários.

	RF-003: O sistema deve permitir que o usuário visualize e edite os dados do seu próprio perfil.

## Aluno:

	RF-004: O aluno deve poder visualizar a lista de cursos de extensão disponíveis.

	RF-005: O aluno deve poder realizar a inscrição em um curso aberto.

	RF-006: O aluno deve poder visualizar o histórico de suas inscrições e o status de cada uma (pendente, aprovada, concluída).

## Professor:

	RF-007: O professor deve poder cadastrar propostas de novos cursos (que passarão por aprovação do DEPPI).

	RF-008: O professor deve poder acompanhar as métricas do seu curso (total de inscritos, vagas restantes).

	RF-009: O professor deve poder visualizar a lista de alunos inscritos em suas turmas.

## DEPPI (Gestão Operacional):

	RF-010: O membro do DEPPI deve poder aprovar, reprovar ou editar os cursos propostos pelos professores.

	RF-011: O DEPPI deve poder gerenciar (listar, ativar, inativar) os professores cadastrados no sistema.

	RF-012: O DEPPI deve poder gerenciar as inscrições (ex: cancelar inscrições irregulares ou aprovar em caso de processos seletivos).

	RF-013: O DEPPI deve poder atribuir ou revogar permissões específicas de usuários (ex: promover um aluno a professor).

## Admin (Gestão Global):

	RF-014: O administrador deve ter controle total (CRUD - Criar, Ler, Atualizar, Deletar) sobre as Instituições/Campi (ex: IFCE - Campus Cedro, IFCE - Campus Crato).

	RF-015: O administrador deve gerenciar usuários globais (Alunos, Professores, membros do DEPPI).

	RF-016: O administrador deve ter acesso a um Dashboard com dados gerais consolidados (total de alunos, cursos ativos, instituições cadastradas).

	RF-017: O administrador deve poder gerar relatórios exportáveis sobre os dados do sistema.

# Requisitos Não Funcionais (RNF)

	RNF-001 (Tecnologia/Backend): A API deve ser desenvolvida em um ambiente assíncrono, utilizando tecnologias como Node.js e Express.

	RNF-002 (Banco de Dados): O sistema deve utilizar um banco de dados relacional forte, como PostgreSQL, para garantir a integridade transacional (ex: evitar que um aluno ocupe uma vaga que não existe mais).

	RNF-003 (Segurança): A autenticação da API deve utilizar tokens JWT (JSON Web Tokens), e as senhas no banco de dados devem ser armazenadas com hash (ex: Bcrypt).

	RNF-004 (Documentação): Os endpoints da API devem ser documentados (ex: utilizando o padrão Swagger/OpenAPI).

# Modelagem do Banco de Dados (Entidade-Relacionamento)

## Tabela Instituicao (Representa os campi do IFCE)

	id (PK)

	nome (Ex: IFCE - Campus Cedro)

	cnpj (??)

	ativo (Boolean)

## Tabela Usuario (Tabela centralizada para todos os papéis)

	id (PK)

	nome

	email (Unique)

	senha_hash

	cpf (Unique)

	instituicao_id (FK - Opcional, depende se o admin é global ou por campus)

## Tabela Papel (Para controle de acesso)

	id (PK)

	nome (ALUNO, PROFESSOR, DEPPI, ADMIN)

## Tabela Usuario_Papel (Relacionamento N:M)

	Nota: Um usuário pode ser Aluno e Professor ao mesmo tempo.

	usuario_id (FK)

	papel_id (FK)

	(usuario_id, papel_id formam a Chave Primária Composta)

## Tabela Curso

	id (PK)

	titulo

	descricao

	carga_horaria

	quantidade_vagas

	status (Enum: RASCUNHO, EM_ANALISE, APROVADO, REPROVADO, CONCLUIDO)

	professor_id (FK -> Usuario, quem criou/ministra o curso)

	instituicao_id (FK -> Onde o curso está sendo ofertado)

## Tabela Inscricao (Relacionamento entre Aluno e Curso)

	id (PK)

	aluno_id (FK -> Usuario)

	curso_id (FK -> Curso)

	data_inscricao (Timestamp)

	status (Enum: PENDENTE, CONFIRMADA, CANCELADA)

	(aluno_id, curso_id devem ter uma restrição UNIQUE para evitar inscrições duplicadas no mesmo curso)