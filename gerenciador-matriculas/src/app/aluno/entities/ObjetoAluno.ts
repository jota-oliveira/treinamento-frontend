import { ObjetoPessoa } from 'entities/ObjetoPessoa';

export interface ObjetoAluno extends ObjetoPessoa {
  matricula: number;
  formaIngresso: string;
}
