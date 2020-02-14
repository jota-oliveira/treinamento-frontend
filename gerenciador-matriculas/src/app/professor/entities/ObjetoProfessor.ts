import { ObjetoPessoa } from '../../entities/ObjetoPessoa';

export interface ObjetoProfessor extends ObjetoPessoa {
  titulacao: string;
}