import { Aluno } from '../../aluno/entities/Aluno';
import { Disciplina } from 'disciplina/entities/Disciplina';

export interface ObjetoTurma {
  descricao: string;
  anoLetivo: number;
  periodoLetivo: number;
  numeroVagas: number;
  alunos: Aluno[];
  disciplinas: Disciplina[];
}
