import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisciplinaRoutingModule } from './disciplina-routing.module';
import { DisciplinaComponent } from './disciplina.component';
import { EditarDisciplinaComponent } from './editar-disciplina/editar-disciplina.component';
import { CriarDisciplinaComponent } from './criar-disciplina/criar-disciplina.component';
import { GridDisciplinaComponent } from './grid-disciplina/grid-disciplina.component';
import { FormDisciplinaComponent } from './form-disciplina/form-disciplina.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  PoButtonModule,
  PoFieldModule,
  PoDividerModule,
  PoLoadingModule,
  PoContainerModule,
  PoTableModule
} from '@portinari/portinari-ui';


@NgModule({
  declarations: [
    DisciplinaComponent,
    EditarDisciplinaComponent,
    CriarDisciplinaComponent,
    GridDisciplinaComponent,
    FormDisciplinaComponent
  ],
  imports: [
    CommonModule,
    PoButtonModule,
    PoFieldModule,
    ReactiveFormsModule,
    PoDividerModule,
    PoLoadingModule,
    PoContainerModule,
    PoTableModule,
    DisciplinaRoutingModule
  ]
})
export class DisciplinaModule { }
