import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AlunoService } from 'aluno/services/aluno.service';
import { Observable, of } from 'rxjs';
import { Aluno } from 'aluno/entities/aluno';

export class AlunosResolver implements Resolve<Observable<Aluno[]>> {

  constructor(private alunoService: AlunoService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Observable<Aluno[]>> {
    return of(this.alunoService.getAlunos());
  }

}
