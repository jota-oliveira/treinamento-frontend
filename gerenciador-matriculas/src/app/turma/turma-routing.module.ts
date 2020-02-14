import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TurmaComponent } from './turma.component';

const routes: Routes = [{ path: '', component: TurmaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurmaRoutingModule { }
