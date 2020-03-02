import { ObjetoDTOPessoa } from '../../entities/ObjetoPessoa';
import { Disciplina } from '../../disciplina/entities/disciplina';

export interface ObjetoProfessor extends ObjetoDTOPessoa {
  titulacao: string;
  disciplina: Disciplina[];
}
