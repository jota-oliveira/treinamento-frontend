import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProfessorRoutingModule } from './professor-routing.module';
import { ProfessorComponent } from './professor.component';
import { FormProfessorComponent } from './form-professor/form-professor.component';
import { PoButtonModule, PoFieldModule } from '@portinari/portinari-ui';


@NgModule({
  declarations: [ProfessorComponent, FormProfessorComponent],
  imports: [
    CommonModule,
    PoButtonModule,
    PoFieldModule,
    ReactiveFormsModule,
    ProfessorRoutingModule
  ]
})
export class ProfessorModule { }
