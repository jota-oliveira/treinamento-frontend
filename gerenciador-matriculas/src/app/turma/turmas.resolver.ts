import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { TurmaService } from 'turma/services/turma.service';
import { Observable, of } from 'rxjs';
import { Turma } from 'turma/entities/turma';

export class TurmasResolver implements Resolve<Observable<Turma[]>> {

  constructor(private turmaService: TurmaService) { }

  resolve(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<Observable<Turma[]>> {
    return of(this.turmaService.getList());
  }

}
