import { Matricula } from './matricula';

export class Matriculas {
  private _matriculas: Matricula[];

  constructor(matriculas: Matricula[]) {
    this._matriculas = matriculas;
  }

  get matriculas(): Matricula[] {
    return [...this._matriculas];
  }

}
