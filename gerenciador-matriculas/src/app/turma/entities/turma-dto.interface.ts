import { Aluno } from '../../aluno/entities/aluno';
import { Disciplina } from 'disciplina/entities/disciplina';

export interface TurmaDTO {
  id: number;
  descricao: string;
  anoLetivo: number;
  periodoLetivo: number;
  numeroVagas: number;
  alunos: Aluno[];
  disciplinas: Disciplina[];
}
