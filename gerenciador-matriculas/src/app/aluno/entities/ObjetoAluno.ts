import { ObjetoPessoa } from 'entities/ObjetoPessoa';
import { Turma } from 'turma/entities/Turma';

export interface ObjetoAluno extends ObjetoPessoa {
  matricula: number;
  formaIngresso: string;
  turma: Turma[];
}
