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

  private url = 'api/aluns';

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

  private handleError(err: any, recurso: string): Observable<any> {
    console.error(`Atenção, recurso ${recurso} apresentou o erro: ${err.status} ${err.statusText}`);
    let mensagemDeErro = 'Não foi possível fazer a requisição';

    if (err.status === StatusResponse.NotFound) {
      mensagemDeErro = 'Não foi possível encontrar o recurso, por favor entre em contato com o suporte';
    }

    throw new Error(mensagemDeErro);
  }

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

enum StatusResponse {
  NotFound = 404,
  ServerError = 500
}
