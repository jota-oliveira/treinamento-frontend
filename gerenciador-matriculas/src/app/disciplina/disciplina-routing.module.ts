import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisciplinaComponent } from './disciplina.component';
import { DisciplinaResolver } from './disciplina.resolver';
import { DisciplinasResolver } from './disciplinas.resolver';

const routes: Routes = [{
  path: '',
  component: DisciplinaComponent,
  resolve: {
    disciplina: DisciplinaResolver,
    disciplinas: DisciplinasResolver
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [
    DisciplinaResolver,
    DisciplinasResolver
  ],
  exports: [RouterModule]
})
export class DisciplinaRoutingModule { }
