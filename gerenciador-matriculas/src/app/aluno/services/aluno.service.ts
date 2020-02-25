import { Injectable } from '@angular/core';
import { Aluno } from 'aluno/entities/aluno';
import { Observable, throwError, of } from 'rxjs';
import { mergeMap, retry, catchError } from 'rxjs/operators';
import { AlunoServiceResponses } from './aluno.service.responses.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private url = 'api/alunos';

  constructor(
    private http: HttpClient
  ) { }

  getAlunos(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error); // log to console instead
      return of(result as T);
    };
  }

  // public getAlunos(): Observable<Aluno[]> {
  //   return new Observable((observer) => {
  //     setTimeout(() =>
  //       observer.next(
  //         alunos
  //       ), 1500);
  //   });
  // }

  public getAluno(id: string): Observable<Aluno> {
    return new Observable((observer) => {
      setTimeout(() =>
        observer.next(
          new Aluno({
            id: 1,
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
    id: 1,
    nome: 'Aluno 1',
    cpf: '11111111111',
    matricula: 123,
    email: 'aluno1@provedor.com',
    formaIngresso: 'Enem',
    turma: []
  }),
  new Aluno({
    id: 2,
    nome: 'Aluno 2',
    cpf: '11111111111',
    matricula: 123,
    email: 'aluno2@provedor.com',
    formaIngresso: 'Enem',
    turma: []
  }),
  new Aluno({
    id: 3,
    nome: 'Aluno 3',
    cpf: '11111111111',
    matricula: 123,
    email: 'aluno3@provedor.com',
    formaIngresso: 'Enem',
    turma: []
  }),
];
