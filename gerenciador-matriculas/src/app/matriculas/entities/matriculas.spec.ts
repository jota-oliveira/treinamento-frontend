import { Matriculas } from './matriculas';
import { Matricula } from './matricula';
import { Turma } from 'turma/entities/turma';
import { Aluno } from 'aluno/entities/aluno';

describe('MatriculasEntity', () => {
  let matriculas: Matriculas;

  beforeEach(() =>
    matriculas = new Matriculas([])
  );

  it('entity de matriculas deve ser iniciado', () => {
    expect(matriculas).toBeTruthy();
  });

  it('retorno do método listarMatriculas não deve ser mutável fora dos métodos pré-definidos', () => {
    matriculas
      .listarMatriculas()
      .push(gerarNovaMatricula());

    expect(matriculas.listarMatriculas().length).toEqual(0);
  });
});

function gerarNovaMatricula() {
  const aluno = new Aluno({
    nome: 'Fulano',
    cpf: 123,
    matricula: 123,
    email: 'fulano@provedor.com',
    formaIngresso: 'Enem',
    turma: []
  });

  const turma = new Turma({
    alunos: [],
    anoLetivo: 2020,
    descricao: 'Turma de Sistemas de informação',
    disciplinas: [],
    numeroVagas: 23,
    periodoLetivo: 2
  });

  return new Matricula(aluno, turma);
}
