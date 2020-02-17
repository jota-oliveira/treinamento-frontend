import { Professor } from 'professor/entities/professor';
import { Turma } from 'turma/entities/turma';

export interface ObjetoDisciplina {
  descricao: string;
  sigla: string;
  cargaHoraria: number;
  professor: Professor;
  turma: Turma[];
}
