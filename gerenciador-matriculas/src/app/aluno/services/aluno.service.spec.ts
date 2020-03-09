import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AlunoService } from './aluno.service';

describe('AlunoService', () => {

  let service: AlunoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });

    service = TestBed.get(AlunoService);
  });


  it('Deve iniciar o serviço', () => {
    expect(service).toBeTruthy();
  });

  it('Deve buscar uma lista de Alunos', () => {
    // expect(service.getList()).toBeEqual();
  });
});
