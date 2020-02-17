import { Aluno } from 'aluno/entities/aluno';
import { Turma } from 'turma/entities/turma';

export class Matricula {
  private _aluno: Aluno;
  private _turma: Turma;

  constructor(aluno: Aluno, turma: Turma) {
    if (!aluno || !turma) {
      throw new Error('Uma matrícula precisa de um aluno e uma turma');
    }

    this._aluno = aluno;
    this._turma = turma;
  }

  get aluno(): Aluno {
    return this._aluno;
  }

  set aluno(aluno: Aluno) {
    this._aluno = aluno;
  }

  get turma(): Turma {
    return this._turma;
  }

  set turma(turma: Turma) {
    this._turma = turma;
  }

}
