import { ObjetoDTOAluno } from './aluno-dto-interface';
import { Pessoa } from 'entities/Pessoa';
import { Turma } from 'turma/entities/turma';
import { Modelo } from 'entities/modelo.interface';

export class Aluno extends Pessoa implements Modelo {

  private _matricula: number;
  private _formaIngresso: string;
  private _turma: Turma[];

  constructor(aluno: ObjetoDTOAluno) {
    super(aluno);

    this._matricula = aluno.matricula;
    this._formaIngresso = aluno.formaIngresso;
    this._turma = aluno.turma ? aluno.turma : [];
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

  get turma(): Turma[] {
    return [...this._turma];
  }

  public toObjectDTO(): ObjetoDTOAluno {
    const objetoPessoa = super.toObjectDTO();

    return {
      ...objetoPessoa,
      matricula: this.matricula,
      formaIngresso: this.formaIngresso,
      turma: this.turma
    };
  }

}
