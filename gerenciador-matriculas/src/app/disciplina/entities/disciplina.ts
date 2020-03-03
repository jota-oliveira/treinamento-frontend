import { DisciplinaDTO } from './disciplina-dto.interface';
import { Professor } from 'professor/entities/professor';
import { Turma } from 'turma/entities/turma';

export class Disciplina {

  private _id: number;
  private _descricao: string;
  private _sigla: string;
  private _cargaHoraria: number;
  private _professor: Professor;
  private _turma: Turma[];

  constructor(disciplina: DisciplinaDTO) {
    this._id = disciplina.id;
    this._descricao = disciplina.descricao;
    this._sigla = disciplina.sigla;
    this._cargaHoraria = disciplina.cargaHoraria;
    this._professor = disciplina.professor;
    this._turma = disciplina.turma;
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

  get sigla(): string {
    return this._sigla;
  }

  set sigla(sigla: string) {
    this._sigla = sigla;
  }

  get cargaHoraria(): number {
    return this._cargaHoraria;
  }

  set cargaHoraria(cargaHoraria: number) {
    this._cargaHoraria = cargaHoraria;
  }

  get professor(): Professor {
    return this._professor;
  }

  set professor(professor: Professor) {
    this._professor = professor;
  }

  get turma(): Turma[] {
    return this._turma;
  }

}
