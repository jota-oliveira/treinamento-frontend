import { Injectable } from '@angular/core';
import { TurmaDTO } from 'turma/entities/turma-dto.interface';
import { HttpClientService } from 'services/http-client.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Turma } from 'turma/entities/turma';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TurmaService extends HttpClientService<TurmaDTO> {

  constructor(private httpService: HttpClient) {
    super(httpService, 'api/turmas');
  }

  public getList(filter?: object): Observable<Turma[]> {
    return super.getList(filter).pipe(
      map(turmas => turmas.map(turma => new Turma(turma)))
    );
  }

  public getItem(id: number): Observable<Turma> {
    return super.getItem(id).pipe(
      map(turma => new Turma(turma))
    );
  }
}
