import { ObjetoPessoa } from 'entities/ObjetoPessoa';
import { Turma } from 'turma/entities/turma';

export interface ObjetoAluno extends ObjetoPessoa {
  matricula: number;
  formaIngresso: string;
  turma: Turma[];
}
