import { Injectable } from '@angular/core';
import { Aluno } from 'aluno/entities/aluno';
import { Observable, throwError, of } from 'rxjs';
import { mergeMap, retry } from 'rxjs/operators';
import { AlunoServiceResponses } from './aluno.service.responses.interface';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  public getAlunos(): Observable<Aluno[]> {
    return new Observable((observer) => {
      setTimeout(() =>
        observer.next(
          alunos
        ), 1500);
    });
  }

  public getAluno(id: string): Observable<Aluno> {
    return new Observable((observer) => {
      setTimeout(() =>
        observer.next(
          new Aluno({
            nome: 'Aluno 1',
            cpf: '11111111111',
            matricula: 123,
            email: 'aluno1@provedor.com',
            formaIngresso: 'Enem',
            turma: []
          })
        ), 1500);
    });
  }

  public postAluno = (aluno: Aluno): Observable<any> => {
    return new Observable((observer) => {
      const response: AlunoServiceResponses = {
        sucesso: false,
        mensagem: 'Você que lute, tentei 3 vezes u.u'
      };

      setTimeout(() =>
        observer
          .next({ sucesso: true, mensagem: 'Sucesso' })
        // observer
        //   .error(response)
      , 1500);
    }).pipe(retry(2));
  }

}

const alunos: Aluno[] = [
  new Aluno({
    nome: 'Aluno 1',
    cpf: '11111111111',
    matricula: 123,
    email: 'aluno1@provedor.com',
    formaIngresso: 'Enem',
    turma: []
  }),
  new Aluno({
    nome: 'Aluno 2',
    cpf: '11111111111',
    matricula: 123,
    email: 'aluno2@provedor.com',
    formaIngresso: 'Enem',
    turma: []
  }),
  new Aluno({
    nome: 'Aluno 3',
    cpf: '11111111111',
    matricula: 123,
    email: 'aluno3@provedor.com',
    formaIngresso: 'Enem',
    turma: []
  }),
];
