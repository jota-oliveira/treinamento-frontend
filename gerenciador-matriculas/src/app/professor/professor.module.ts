import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProfessorRoutingModule } from './professor-routing.module';
import { ProfessorComponent } from './professor.component';
import { FormProfessorComponent } from './form-professor/form-professor.component';
import { PoButtonModule, PoFieldModule, PoDividerModule, PoLoadingModule, PoContainerModule, PoTableModule } from '@portinari/portinari-ui';
import { CriarProfessorComponent } from './criar-professor/criar-professor.component';
import { EditarProfessorComponent } from './editar-professor/editar-professor.component';
import { GridProfessorComponent } from './grid-professor/grid-professor.component';


@NgModule({
  declarations: [ProfessorComponent, FormProfessorComponent, CriarProfessorComponent, EditarProfessorComponent, GridProfessorComponent],
  imports: [
    CommonModule,
    PoButtonModule,
    PoFieldModule,
    ReactiveFormsModule,
    PoDividerModule,
    PoLoadingModule,
    PoContainerModule,
    PoTableModule,
    ProfessorRoutingModule
  ]
})
export class ProfessorModule { }
