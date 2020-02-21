import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AlunoRoutingModule } from './aluno-routing.module';
import { AlunoComponent } from './aluno.component';
import { CriarAlunoComponent } from './criar-aluno/criar-aluno.component';
import { FormAlunoComponent } from './form-aluno/form-aluno.component';

import {
  PoFieldModule,
  PoButtonModule,
  PoNotificationModule,
  PoLoadingModule,
  PoDividerModule,
  PoContainerModule
} from '@portinari/portinari-ui';
import { EditarAlunoComponent } from './editar-aluno/editar-aluno.component';

@NgModule({
  declarations: [AlunoComponent, CriarAlunoComponent, FormAlunoComponent, EditarAlunoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PoFieldModule,
    PoButtonModule,
    PoNotificationModule,
    PoLoadingModule,
    PoDividerModule,
    PoContainerModule,
    AlunoRoutingModule
  ]
})
export class AlunoModule { }
