import { TestBed } from '@angular/core/testing';
import { MatriculasService } from './matriculas.service';
import { isObservable } from 'rxjs';
import { Matriculas } from 'matriculas/entities/matriculas';

describe('MatriculasService', () => {
  const service: MatriculasService = new MatriculasService();

  beforeEach(() => TestBed.configureTestingModule({}));

  it('service de matrículas deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('retorno do método getMatriculas deve ser um observable de Matriculas', () => {
    expect(isObservable<Matriculas>(service.getMatriculas())).toBeTruthy();
  });

});
