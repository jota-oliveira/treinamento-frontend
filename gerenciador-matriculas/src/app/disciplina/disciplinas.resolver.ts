import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { DisciplinaService } from 'disciplina/services/disciplina.service';
import { Observable, of } from 'rxjs';
import { Disciplina } from 'disciplina/entities/disciplina';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisciplinasResolver implements Resolve<Observable<Disciplina[]>> {

  constructor(private disciplinaService: DisciplinaService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Observable<Disciplina[]>> {
    return of(this.disciplinaService.getList());
  }

}
