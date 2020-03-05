import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TurmaComponent } from './turma.component';
import { TurmasResolver } from './turmas.resolver';
import { CriarTurmaComponent } from './criar-turma/criar-turma.component';

const routes: Routes = [
  {
    path: '',
    component: TurmaComponent,
    resolve: {
      turmas: TurmasResolver
    },
  },
  {
    path: 'nova-turma',
    component: CriarTurmaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [
    TurmasResolver
  ],
  exports: [RouterModule]
})
export class TurmaRoutingModule { }
