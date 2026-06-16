import { StatusCurso } from '../../generated/prisma/client';
import { prisma } from '../lib/prisma';
import { UpdateCourseInput } from '../schemas/course.schema';

export interface UsuarioLogado {
  userId: string;
  cargo: 'DEPPI' | 'PROFESSOR' | 'ALUNO' | 'ADMIN';
}

export interface CriarCursoDTO {
  nome: string;
  carga_horaria: number;
  vagas: number;
  dataInicio: string;
  dataFim: string;
  horarioInicio: string;
  horarioFim: string;
  fkInstituicao: string;
}

function validarVagas(vagas: number) {
  if (vagas <= 0) throw new Error("O curso deve ter pelo menos 1 vaga.");
}

function validarCargaHoraria(ch: number) {
  if (ch <= 0) throw new Error("A carga horária deve ser maior que zero. ");
}

export class CourseService {
  async createCourse(dadosCurso: CriarCursoDTO, usuarioLogado: UsuarioLogado) {
    validarVagas(dadosCurso.vagas);
    validarCargaHoraria(dadosCurso.carga_horaria);

    const instituicaoExiste = await prisma.instituicao.findUnique({
      where: { id: dadosCurso.fkInstituicao }
    });
    
    if (!instituicaoExiste) {
      throw new Error("Instituição não encontrada.");
    }

    const status: StatusCurso = usuarioLogado.cargo === 'DEPPI' ? 'ANDAMENTO' : 'ANALISE';

    return await prisma.curso.create({
      data: {
        nome: dadosCurso.nome,
        carga_horaria: dadosCurso.carga_horaria,
        vagas: dadosCurso.vagas,
        dataInicio: new Date(dadosCurso.dataInicio),
        dataFim: new Date(dadosCurso.dataFim),
        horarioInicio: new Date(dadosCurso.horarioInicio),
        horarioFim: new Date(dadosCurso.horarioFim),
        fkInstituicao: dadosCurso.fkInstituicao,
        status,
      },
      include: { Instituicao: true }
    });
  }

  async readCourses(usuarioLogado: UsuarioLogado) {
    const filtroStatus = usuarioLogado.cargo === 'ALUNO'
      ? { status: 'ANDAMENTO' as StatusCurso }
      : {};

    const cursos = await prisma.curso.findMany({
      where: filtroStatus,
      include: {
        Instituicao: true,
        inscricao: { select: { id: true } }
      }
    });

    return cursos.map((curso) => ({
      ...curso,
      vagasOcupadas: curso.inscricao.length,
      vagasDisponiveis: curso.vagas - curso.inscricao.length,
      inscricao: undefined 
    }));
  }

  async readCourseById(id: string, usuarioLogado: UsuarioLogado) {
    const curso = await prisma.curso.findUnique({
      where: { id },
      include: {
        Instituicao: true,
        inscricao: { select: { id: true } }
      }
    });

    if (!curso) throw new Error("Curso não encontrado.");

    if (usuarioLogado.cargo === 'ALUNO' && curso.status !== 'ANDAMENTO') {
      throw new Error("Este curso não está disponível para visualização.");
    }

    return {
      ...curso,
      vagasOcupadas: curso.inscricao.length,
      vagasDisponiveis: curso.vagas - curso.inscricao.length,
      inscricao: undefined
    };
  }

  async updateCourse(
    id: string,
    dadosAtualizados: UpdateCourseInput,
    usuarioLogado: UsuarioLogado
  ) {
    const cursoExiste = await prisma.curso.findUnique({
      where: { id },
      include: { inscricao: { select: { id: true } } }
    });


    if (!cursoExiste) throw new Error("Curso não encontrado.");

    if (dadosAtualizados.vagas !== undefined) {
      validarVagas(dadosAtualizados.vagas);
      const inscricoesAtivas = cursoExiste.inscricao.length;
      if (dadosAtualizados.vagas < inscricoesAtivas) {
        throw new Error(`Não é possível reduzir as vagas para ${dadosAtualizados.vagas}. Já existem ${inscricoesAtivas} inscrições.`);
      }
    }

    if (dadosAtualizados.carga_horaria !== undefined) validarCargaHoraria(dadosAtualizados.carga_horaria);

    if (dadosAtualizados.status && usuarioLogado.cargo !== 'DEPPI') {
      throw new Error("Apenas o DEPPI pode alterar o status de um curso manualmente.");
    }

    const dadosAtuais = await prisma.curso.findUnique({ where: { id }});

    return await prisma.curso.update({
      where: { id },
      data: { 
        nome: dadosAtualizados.nome! ?? dadosAtuais?.nome,
        carga_horaria: dadosAtualizados.carga_horaria! ?? dadosAtuais?.carga_horaria,
        vagas: dadosAtualizados.vagas! ?? dadosAtuais?.vagas,
        dataInicio:dadosAtualizados.dataInicio! ?? dadosAtuais?.dataInicio,
        dataFim:dadosAtualizados.dataFim! ?? dadosAtuais?.dataFim,
        horarioInicio: dadosAtualizados.horarioInicio! ?? dadosAtuais?.horarioInicio,
        horarioFim:dadosAtualizados.horarioFim! ?? dadosAtuais?.horarioFim,
        status: dadosAtualizados.status as StatusCurso ?? dadosAtuais?.status
      },
      include: { Instituicao: true }
    });
  }

  async deleteCourse(id: string) {
    const cursoExiste = await prisma.curso.findUnique({
      where: { id },
      include: { inscricao: { select: { id: true } } }
    });

    if (!cursoExiste) throw new Error("Curso não encontrado.");

    if (cursoExiste.inscricao.length > 0) {
      throw new Error("Não é possível deletar um curso que já possui inscrições.");
    }

    return await prisma.curso.delete({ where: { id } });
  }
}