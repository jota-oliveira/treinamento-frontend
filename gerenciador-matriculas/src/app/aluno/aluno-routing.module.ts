import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AlunoComponent } from './aluno.component';
import { AlunoResolver } from './aluno.resolver';

const routes: Routes = [
  {
    path: '',
    component: AlunoComponent,
    resolve: {
      alunos: AlunoResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [
    AlunoResolver
  ],
  exports: [RouterModule]
})
export class AlunoRoutingModule { }
