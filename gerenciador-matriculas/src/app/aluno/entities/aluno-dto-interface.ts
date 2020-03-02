import { ObjetoDTOPessoa } from 'entities/ObjetoPessoa';
import { Turma } from 'turma/entities/turma';

export interface ObjetoDTOAluno extends ObjetoDTOPessoa {
  matricula: number;
  formaIngresso: string;
  turma: Turma[];
}
