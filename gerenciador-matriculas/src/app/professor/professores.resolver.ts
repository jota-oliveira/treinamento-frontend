import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { ProfessorService } from 'professor/services/professor.service';
import { Observable, of } from 'rxjs';
import { Professor } from 'professor/entities/professor';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresResolver implements Resolve<Observable<Professor[]>> {

  constructor(private professorService: ProfessorService) { }

  resolve(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<Observable<Professor[]>> {
    return of(this.professorService.getList());
  }

}
