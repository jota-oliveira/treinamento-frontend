import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfessorComponent } from './professor.component';
import { ProfessoresResolver } from './professores.resolver';
import { ProfessorResolver } from './professor.resolver';

const routes: Routes = [{
  path: '',
  component: ProfessorComponent,
  resolve: {
    professores: ProfessoresResolver,
    professor: ProfessorResolver
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [
    ProfessoresResolver,
    ProfessorResolver
  ],
  exports: [RouterModule]
})
export class ProfessorRoutingModule { }
