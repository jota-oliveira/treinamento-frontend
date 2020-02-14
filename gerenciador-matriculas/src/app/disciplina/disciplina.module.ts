import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisciplinaRoutingModule } from './disciplina-routing.module';
import { DisciplinaComponent } from './disciplina.component';


@NgModule({
  declarations: [DisciplinaComponent],
  imports: [
    CommonModule,
    DisciplinaRoutingModule
  ]
})
export class DisciplinaModule { }
