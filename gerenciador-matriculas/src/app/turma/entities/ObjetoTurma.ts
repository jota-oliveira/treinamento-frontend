import { Aluno } from '../../aluno/entities/Aluno';

export interface ObjetoTurma {
  descricao: string;
  anoLetivo: number;
  periodoLetivo: number;
  numeroVagas: number;
  alunos: Aluno[];
}
