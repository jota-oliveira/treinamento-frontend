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
  PoLoadingModule
} from '@portinari/portinari-ui';

@NgModule({
  declarations: [AlunoComponent, CriarAlunoComponent, FormAlunoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PoFieldModule,
    PoButtonModule,
    PoNotificationModule,
    PoLoadingModule,
    AlunoRoutingModule
  ]
})
export class AlunoModule { }
