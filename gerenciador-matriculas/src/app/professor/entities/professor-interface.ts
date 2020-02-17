import { ObjetoPessoa } from '../../entities/ObjetoPessoa';
import { Disciplina } from '../../disciplina/entities/disciplina';

export interface ObjetoProfessor extends ObjetoPessoa {
  titulacao: string;
  disciplina: Disciplina[];
}
