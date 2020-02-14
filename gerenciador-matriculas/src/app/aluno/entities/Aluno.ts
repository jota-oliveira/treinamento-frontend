import { ObjetoAluno } from './ObjetoAluno';
import { Pessoa } from 'entities/Pessoa';

export class Aluno extends Pessoa {

  private _matricula: number;
  private _formaIngresso: string;

  constructor(pessoa: ObjetoAluno) {
    super(pessoa);
  }

  get matricula(): number {
    return this._matricula;
  }

  set matricula(matricula: number) {
    this._matricula = matricula;
  }

  get formaIngresso(): string {
    return this._formaIngresso;
  }

  set formaIngresso(formaIngresso: string) {
    this._formaIngresso = formaIngresso;
  }

}
