import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AlunoService } from 'aluno/services/aluno.service';
import { Observable } from 'rxjs';
import { Aluno } from 'aluno/entities/aluno';

export class AlunoResolver implements Resolve<Aluno[]> {

  constructor(private alunoService: AlunoService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Aluno[]> {
    return this.alunoService.getAlunos();
  }

}
