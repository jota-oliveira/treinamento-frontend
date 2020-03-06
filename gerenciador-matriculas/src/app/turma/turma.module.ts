import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TurmaRoutingModule } from './turma-routing.module';
import { TurmaComponent } from './turma.component';
import {
  PoButtonModule,
  PoTableModule,
  PoStepperModule,
  PoFieldModule,
  PoWidgetModule,
  PoInfoModule,
  PoModalModule,
  PoLoadingModule,
} from '@portinari/portinari-ui';
import { GridTurmaComponent } from './grid-turma/grid-turma.component';
import { CriarTurmaComponent } from './criar-turma/criar-turma.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchOnTypeDirective } from './search-on-type.directive';
import { FormTurmaComponent } from './form-turma/form-turma.component';
import { DisciplinaModule } from 'disciplina/disciplina.module';
import { AlunoModule } from 'aluno/aluno.module';


@NgModule({
  declarations: [
    TurmaComponent,
    GridTurmaComponent,
    CriarTurmaComponent,
    SearchOnTypeDirective,
    FormTurmaComponent
  ],
  imports: [
    CommonModule,
    PoButtonModule,
    PoModalModule,
    PoLoadingModule,
    PoTableModule,
    PoStepperModule,
    PoFieldModule,
    ReactiveFormsModule,
    PoWidgetModule,
    PoInfoModule,
    TurmaRoutingModule,
    DisciplinaModule,
    AlunoModule
  ]
})
export class TurmaModule { }
