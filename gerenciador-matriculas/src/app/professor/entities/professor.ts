import { ProfessorDTO } from './professor-dto.interface';
import { Pessoa } from '../../entities/Pessoa';
import { Disciplina } from '../../disciplina/entities/disciplina';
import { Modelo } from 'entities/modelo.interface';

export class Professor extends Pessoa implements Modelo {

  private _titulacao: string;
  private _disciplina: Disciplina[];

  constructor(professor: ProfessorDTO) {
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

  public toObjectDTO(): ProfessorDTO {
    const objetoPessoa = super.toObjectDTO();

    return {
      ...objetoPessoa,
      titulacao: this.titulacao,
      disciplina: this.disciplina
    };
  }

}
