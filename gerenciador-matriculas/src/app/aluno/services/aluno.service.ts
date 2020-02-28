import { Injectable } from '@angular/core';
import { Aluno } from 'aluno/entities/aluno';
import { Observable, of, ErrorObserver } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { AlunoServiceResponses } from './aluno.service.responses.interface';
import { HttpClient } from '@angular/common/http';
import { ObjetoAluno } from 'aluno/entities/aluno-interface';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private url = 'api/alunos';

  constructor(private http: HttpClient) { }

  public getAlunos(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.url)
      .pipe(
        retry(2),
        map(alunos => this.converterAlunosParaModel(alunos)),
        catchError((err: any) => this.handleError(err, 'getAlunos'))
      );
  }

  private converterAlunosParaModel(alunos: ObjetoAluno[]): Aluno[] {
    return alunos.map(aluno => new Aluno(aluno));
  }

  public getAluno(id: number): Observable<Aluno> {
    const url = `${this.url}/${id}`;

    return this.http.get<Aluno>(url)
      .pipe(
        retry(2),
        map(aluno => new Aluno(aluno)),
        catchError((err: any) => this.handleError(err, 'getAluno'))
      );
  }

  private handleError(err: any, recurso: string): Observable<any> {
    console.error(`Atenção, recurso ${recurso} apresentou o erro: ${err.status} ${err.statusText}`);
    throw new Error('Não foi possível fazer a requisição, tente novamente mais tarde');
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
