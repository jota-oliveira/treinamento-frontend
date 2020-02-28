import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AlunoComponent } from './aluno.component';
import { AlunosResolver } from './alunos.resolver';
import { AlunoResolver } from './aluno.resolver';

const routes: Routes = [
  {
    path: '',
    component: AlunoComponent,
    resolve: {
      alunos: AlunosResolver,
      aluno: AlunoResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [
    AlunosResolver,
    AlunoResolver
  ],
  exports: [RouterModule]
})
export class AlunoRoutingModule { }
