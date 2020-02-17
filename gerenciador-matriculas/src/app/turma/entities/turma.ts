import { ObjetoTurma } from './turma-interface';
import { Aluno } from '../../aluno/entities/aluno';
import { Disciplina } from 'disciplina/entities/disciplina';

export class Turma {
  private _descricao: string;
  private _anoLetivo: number;
  private _periodoLetivo: number;
  private _numeroVagas: number;
  private _alunos: Aluno[];
  private _disciplinas: Disciplina[];

  constructor(turma: ObjetoTurma) {
    this._descricao = turma.descricao;
    this._anoLetivo = turma.anoLetivo;
    this._periodoLetivo = turma.periodoLetivo;
    this._numeroVagas = turma.numeroVagas;
    this._alunos = turma.alunos;
    this._disciplinas = turma.disciplinas;
  }

  get descricao(): string {
    return this._descricao;
  }

  set descricao(descricao: string) {
    this._descricao = descricao;
  }

  get anoLetivo(): number {
    return this._anoLetivo;
  }

  set anoLetivo(anoLetivo: number) {
    this._anoLetivo = anoLetivo;
  }

  get periodoLetivo(): number {
    return this._periodoLetivo;
  }

  set periodoLetivo(periodoLetivo: number) {
    this._periodoLetivo = periodoLetivo;
  }

  get numeroVagas(): number {
    return this._numeroVagas;
  }

  set numeroVagas(numeroVagas: number) {
    this._numeroVagas = numeroVagas;
  }

  get alunos(): Aluno[] {
    return [...this._alunos];
  }

  get disciplinas(): Disciplina[] {
    return [...this._disciplinas];
  }

}

