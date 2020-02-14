import { ObjetoProfessor } from './ObjetoProfessor';
import { Pessoa } from '../../entities/Pessoa';

export class Professor extends Pessoa {

  private _titulacao: string;

  constructor(professor: ObjetoProfessor) {
    super(professor);

    this._titulacao = professor.titulacao;
  }

  get titulacao(): string {
    return this._titulacao;
  }

  set titulacao(titulacao: string) {
    this._titulacao = titulacao;
  }
}