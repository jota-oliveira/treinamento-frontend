import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { ProfessorService } from 'professor/services/professor.service';
import { Observable, of } from 'rxjs';
import { Professor } from 'professor/entities/professor';

export class ProfessorResolver implements Resolve<Observable<Professor>> {

  constructor(private professorService: ProfessorService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Observable<Professor>> {
    return of(this.professorService.getItem(1));
  }

}
