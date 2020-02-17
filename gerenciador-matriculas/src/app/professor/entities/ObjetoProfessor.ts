import { ObjetoPessoa } from '../../entities/ObjetoPessoa';
import { Disciplina } from '../../disciplina/entities/Disciplina';

export interface ObjetoProfessor extends ObjetoPessoa {
  titulacao: string;
  disciplina: Disciplina[];
}
