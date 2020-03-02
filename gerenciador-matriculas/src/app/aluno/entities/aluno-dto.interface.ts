import { PessoaDTO } from 'entities/pessoa-dto.interface';
import { Turma } from 'turma/entities/turma';

export interface AlunoDTO extends PessoaDTO {
  matricula: number;
  formaIngresso: string;
  turma: Turma[];
}
