import { Professor } from 'professor/entities/Professor';
import { Turma } from 'turma/entities/Turma';

export interface ObjetoDisciplina {
  descricao: string;
  sigla: string;
  cargaHoraria: number;
  professor: Professor;
  turma: Turma[];
}
