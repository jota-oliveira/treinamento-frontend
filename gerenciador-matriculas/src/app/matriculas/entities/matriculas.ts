import { Matricula } from './matricula';

export class Matriculas {
  private _matriculas: Matricula[];

  constructor(matriculas: Matricula[]) {
    this._matriculas = matriculas;
  }

  listarMatriculas(): Matricula[] {
    return [...this._matriculas];
  }

}
