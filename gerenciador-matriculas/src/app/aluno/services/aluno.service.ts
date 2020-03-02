import { Injectable } from '@angular/core';
import { Aluno } from 'aluno/entities/aluno';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';
import { ServiceHttpResponses } from '../../services/service.http.responses.interface';
import { HttpClient } from '@angular/common/http';
import { ObjetoAluno } from 'aluno/entities/aluno-interface';
import { HttpClientService } from 'services/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class AlunoService extends HttpClientService<Aluno> {

  constructor(private httpService: HttpClient) {
    super(httpService, 'api/alunos');
  }

  public getList(filter?: object): Observable<Aluno[]> {
    return super.getList(filter).pipe(
      map(alunos => this.converterAlunosParaModel(alunos))
    );
  }

  private converterAlunosParaModel(alunos: ObjetoAluno[]): Aluno[] {
    return alunos.map(aluno => new Aluno(aluno));
  }

  public getItem(id: number): Observable<Aluno> {
    return super.getItem(id).pipe(
      map(aluno => new Aluno(aluno))
    );
  }

}
