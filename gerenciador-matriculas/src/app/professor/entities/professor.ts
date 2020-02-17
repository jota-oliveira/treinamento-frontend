import { ObjetoProfessor } from './professor-interface';
import { Pessoa } from '../../entities/Pessoa';
import { Disciplina } from '../../disciplina/entities/disciplina';

export class Professor extends Pessoa {

  private _titulacao: string;
  private _disciplina: Disciplina[];

  constructor(professor: ObjetoProfessor) {
    super(professor);

    this._titulacao = professor.titulacao;
    this._disciplina = professor.disciplina;
  }

  get titulacao(): string {
    return this._titulacao;
  }

  set titulacao(titulacao: string) {
    this._titulacao = titulacao;
  }

  get disciplina(): Disciplina[] {
    return [...this._disciplina];
  }

}
