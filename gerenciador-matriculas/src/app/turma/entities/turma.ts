import { TurmaDTO } from './turma-dto.interface';
import { Aluno } from '../../aluno/entities/aluno';
import { Disciplina } from 'disciplina/entities/disciplina';
import { Modelo } from 'entities/modelo.interface';

export class Turma implements Modelo {
  private _id: number;
  private _descricao: string;
  private _anoLetivo: number;
  private _periodoLetivo: number;
  private _numeroVagas: number;
  private _alunos: Aluno[];
  private _disciplinas: Disciplina[];

  constructor(turma: TurmaDTO) {
    this._id = turma.id;
    this._descricao = turma.descricao;
    this._anoLetivo = turma.anoLetivo;
    this._periodoLetivo = turma.periodoLetivo;
    this._numeroVagas = turma.numeroVagas;
    this._alunos = turma.alunos;
    this._disciplinas = turma.disciplinas;
  }

  get id(): number {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
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

  public toObjectDTO(): TurmaDTO {
    return {
      id: this.id,
      descricao: this.descricao,
      anoLetivo: this.anoLetivo,
      periodoLetivo: this.periodoLetivo,
      numeroVagas: this.numeroVagas,
      alunos: this.alunos,
      disciplinas: this.disciplinas
    };
  }

}

