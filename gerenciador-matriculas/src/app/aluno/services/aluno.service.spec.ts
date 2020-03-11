import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AlunoService } from './aluno.service';
import { Aluno } from 'aluno/entities/aluno';

describe('AlunoService', () => {

  let alunoService: AlunoService;
  let httpMock: HttpTestingController;

  const mockAluno = new Aluno({
    id: 1,
    nome: 'Master Luke Skywalker',
    email: 'masterluke@galaxynet.com',
    cpf: '77777777777',
    formaIngresso: 'Vestibular',
    matricula: 12,
    turma: null
  });

  const mockListaDeAlunos = [
    mockAluno
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ AlunoService ]
    });

    alunoService = TestBed.get(AlunoService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('deve buscar uma lista de alunos do servidor', () => {
    alunoService
    .getList()
    .subscribe((response: Aluno[]) => {
      expect(response.length).toEqual(1);
    });

    const httpRequest = httpMock.expectOne('api/alunos');

    expect(httpRequest.request.method).toEqual('GET');
    expect(httpRequest.request.responseType).toEqual('json');

    httpRequest.flush(mockListaDeAlunos);
  });

  it('deve buscar apenas um aluno do servidor', () => {
    alunoService
      .getItem(1)
      .subscribe((aluno) => {
        expect(aluno.id).toEqual(1);
        expect(typeof(aluno)).toEqual('object');

        const camposAlunoDTO = [
          'id', 'nome', 'cpf', 'email', 'matricula',
          'turma', 'formaIngresso'
        ];

        expect(Object
          .keys(aluno.toObjectDTO())
          .filter(key => !camposAlunoDTO.includes(key))
        )
          .toEqual([]);
      });

    const httpRequest = httpMock.expectOne('api/alunos/1');

    expect(httpRequest.request.method).toEqual('GET');
    expect(httpRequest.request.responseType).toEqual('json');

    httpRequest.flush(mockAluno);
  });

  it('deve alterar um aluno', () => {
    alunoService
      .put(mockAluno.toObjectDTO())
      .subscribe((response) => {
        expect(response.mensagem).toBe('Sucesso na operação');
        expect(response.sucesso).toBeTruthy();
      });

    const httpRequest = httpMock.expectOne('api/alunos');

    expect(httpRequest.request.method).toEqual('PUT');
    expect(httpRequest.request.responseType).toEqual('json');
    expect(httpRequest.request.headers.get('Content-Type')).toBe('application/json');

    httpRequest.flush([]);
  });

  it('deve deletar um aluno', () => {
    alunoService
      .delete(1)
      .subscribe((response) => {
        expect(response.mensagem).toBe('Sucesso na operação');
        expect(response.sucesso).toBeTruthy();
      });

    const httpRequest = httpMock.expectOne('api/alunos/1');

    expect(httpRequest.request.method).toEqual('DELETE');
    expect(httpRequest.request.responseType).toEqual('json');
    expect(httpRequest.request.headers.get('Content-Type')).toBe('application/json');

    httpRequest.flush([]);
  });

  it('deve criar um aluno', () => {
    alunoService
      .post(mockAluno)
      .subscribe((response) => {
        expect(response.mensagem).toBe('Sucesso na operação');
        expect(response.sucesso).toBeTruthy();
      });

    const httpRequest = httpMock.expectOne('api/alunos');

    expect(httpRequest.request.method).toEqual('POST');
    expect(httpRequest.request.responseType).toEqual('json');
    expect(httpRequest.request.headers.get('Content-Type')).toBe('application/json');

    httpRequest.flush([]);
  });

  it('método prepararPostResponse deve retornar o id do objeto criado', () => {
    const postResponse = alunoService['prepararPostResponse']({
      sucesso: true,
      mensagem: 'Sucesso na operação',
      id: 1
    });

    expect(typeof(postResponse)).toBe('object');
    expect(Object.keys(postResponse).includes('detalhes')).toBeTruthy();

    const detalhes: any = postResponse.detalhes;
    expect(typeof(detalhes.id) === 'number').toBeTruthy();
  });

  it('método prepararFiltroUrl deve retornar um filtro de url', () => {
    const parametroDeUrl = alunoService['prepararFiltroUrl']({
      parametro1: 'teste',
      parametro2: 2,
      parametro3: []
    });

    expect(parametroDeUrl).toEqual('?parametro1=teste&parametro2=2&parametro3=');
  });

  it('método handleError deve tratar as falhas de requisição http', () => {
    expect(() => alunoService['handleError']({
      status: 404,
      statusText: 'Não encontrado'
    }, 'método x'))
      .toThrowError('Não foi possível fazer a requisição, tente novamente mais tarde');
  });

});
