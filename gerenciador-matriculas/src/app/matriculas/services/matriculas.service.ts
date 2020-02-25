import { Injectable } from '@angular/core';
import { MatriculasServiceInterface } from './matriculas.service.interface';
import { Observable } from 'rxjs';
import { Matriculas } from '../entities/matriculas';
import { Matricula } from '../entities/matricula';
import { Aluno } from '../../aluno/entities/aluno';
import { Turma } from '../../turma/entities/turma';

@Injectable({
  providedIn: 'root'
})
export class MatriculasService implements MatriculasServiceInterface {

  constructor() { }

  getMatriculas(): Observable<Matriculas> {
    /* Simulação de espera do servidor... */

    const aluno = new Aluno({
      id: 1,
      nome: 'Fulano',
      cpf: '11111111111',
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

    return new Observable((observer) => {
      setTimeout(() =>
        observer.next(
          new Matriculas(
            [new Matricula(aluno, turma)]
          )
        ), 1500);
    });
  }

}
