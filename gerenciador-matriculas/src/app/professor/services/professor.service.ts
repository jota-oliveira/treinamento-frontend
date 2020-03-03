import { Injectable } from '@angular/core';
import { Professor } from 'professor/entities/professor';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ProfessorDTO } from 'professor/entities/professor-dto.interface';
import { HttpClientService } from 'services/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService extends HttpClientService<ProfessorDTO> {

  constructor(private httpService: HttpClient) {
    super(httpService, 'api/professores');
  }

  public getList(filter?: object): Observable<Professor[]> {
    return super.getList(filter).pipe(
      map(professores => this.converterProfessoresParaModel(professores))
    );
  }

  private converterProfessoresParaModel(professores: ProfessorDTO[]): Professor[] {
    return professores.map(professor => new Professor(professor));
  }

  public getItem(id: number): Observable<Professor> {
    return super.getItem(id).pipe(
      map(professor => new Professor(professor))
    );
  }

}
