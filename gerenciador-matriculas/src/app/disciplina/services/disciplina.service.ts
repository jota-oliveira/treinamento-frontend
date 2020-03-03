import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpClientService } from 'services/http-client.service';
import { DisciplinaDTO } from 'disciplina/entities/disciplina-dto.interface';
import { Disciplina } from 'disciplina/entities/disciplina';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService extends HttpClientService<DisciplinaDTO> {

  constructor(private httpService: HttpClient) {
    super(httpService, 'api/disciplinas');
  }

  public getList(filter?: object): Observable<Disciplina[]> {
    return super.getList(filter).pipe(
      map(disciplinas => disciplinas
        .map(disciplina => new Disciplina(disciplina))
      )
    );
  }

  public getItem(id: number): Observable<Disciplina> {
    return super.getItem(id).pipe(
      map(disciplina => new Disciplina(disciplina))
    );
  }

}
