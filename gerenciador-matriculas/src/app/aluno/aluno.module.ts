import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AlunoRoutingModule } from './aluno-routing.module';
import { AlunoComponent } from './aluno.component';
import { CriarAlunoComponent } from './criar-aluno/criar-aluno.component';
import { FormAlunoComponent } from './form-aluno/form-aluno.component';
import { EditarAlunoComponent } from './editar-aluno/editar-aluno.component';
import { GridAlunoComponent } from './grid-aluno/grid-aluno.component';
import { SharedModule } from 'shared/shared.module';

import {
  PoLoadingModule,
  PoFieldModule,
  PoButtonModule,
  PoContainerModule,
  PoTableModule,
  PoDividerModule
} from '@portinari/portinari-ui';


@NgModule({
  declarations: [
    AlunoComponent,
    CriarAlunoComponent,
    FormAlunoComponent,
    EditarAlunoComponent,
    GridAlunoComponent
  ],
  imports: [
    PoLoadingModule,
    PoFieldModule,
    PoButtonModule,
    PoContainerModule,
    PoTableModule,
    PoDividerModule,
    AlunoRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    CriarAlunoComponent
  ]
})
export class AlunoModule { }
