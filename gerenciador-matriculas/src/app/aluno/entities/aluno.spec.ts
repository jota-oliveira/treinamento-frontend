import { Aluno } from './aluno';
import { Turma } from '../../turma/entities/turma';

describe('Modelo de Alunos', () => {
  let aluno: Aluno;

  beforeEach(() => {
    const params = {
      matricula: 123,
      formaIngresso: '',
      turma: [],
      nome: 'Aluno X',
      email: 'aluno.x@provedor.com',
      cpf: 123456789
    };

    aluno = new Aluno(params);
  });

  it('a propriedade turma deve ser mutável apenas pelos métodos adicionaTurma e removeTurma da classe', () => {
    const novaTurma = new Turma({
      descricao: null,
      anoLetivo: null,
      periodoLetivo: null,
      numeroVagas: null,
      alunos: [],
      disciplinas: []
    });

    aluno.turma.push(novaTurma);
    expect(aluno.turma.length).toEqual(0);
  });

});
