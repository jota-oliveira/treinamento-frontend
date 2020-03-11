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

  it('Deve buscar uma lista de alunos', () => {
    alunoService.getList().subscribe((response: Aluno[]) => {
      expect(response.length).toEqual(1);
    });

    const httpRequest = httpMock.expectOne('api/alunos/');

    expect(httpRequest.request.method).toEqual('GET');
    expect(httpRequest.request.responseType).toEqual('json');
    httpRequest.flush(mockListaDeAlunos);
  });

});
