import { Aluno } from './aluno';
import { Turma } from '../../turma/entities/turma';
import { AlunoDTO } from './aluno-dto.interface';

describe('Modelo de Alunos', () => {
  const alunoDTO: AlunoDTO = {
    id: 1,
    matricula: 1,
    formaIngresso: '',
    turma: [],
    nome: 'Aluno',
    email: 'aluno@email.com',
    cpf: '11111111111'
  };

  let aluno: Aluno;

  beforeEach(() => {
    aluno = new Aluno(alunoDTO);
  });

  it('turma deve ser mutável apenas pelos métodos adicionaTurma e removeTurma de Aluno', () => {
    const turma = new Turma({
      id: 1,
      descricao: null,
      anoLetivo: null,
      periodoLetivo: null,
      numeroVagas: null,
      alunos: [],
      disciplinas: []
    });

    aluno.turma.push(turma);
    expect(aluno.turma.length).toEqual(0);

    aluno.adicionaTurma(turma);
    expect(aluno.turma.length).toEqual(1);

    aluno.removeTurma(turma);
    expect(aluno.turma.length).toEqual(0);
  });

  it('função toObjectDTO deve transformar o modelo no DTO novamente', () => {
    expect(aluno.toObjectDTO()).toEqual(alunoDTO);
  });

  it('aluno deve aceitar apenas CPFs válidos', () => {
    expect(() => aluno.cpf = '1234567892')
      .toThrowError('Erro na validação do CPF: Quantidade de dígitos fornecida diferente de 11');

    expect(() => aluno.cpf = '12345678923')
      .toThrowError('CPF inválido');

    expect(() => aluno.cpf = '123hdasu122')
      .toThrowError('Por favor, informe apenas os dígitos do CPF');
  });

});
