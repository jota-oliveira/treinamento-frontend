import { PessoaDTO } from '../../entities/pessoa-dto.interface';
import { Disciplina } from '../../disciplina/entities/disciplina';

export interface ProfessorDTO extends PessoaDTO {
  titulacao: string;
  disciplina: Disciplina[];
}
