import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoRoutingModule } from './aluno-routing.module';
import { AlunoComponent } from './aluno.component';
import { CriarAlunoComponent } from './criar-aluno/criar-aluno.component';


@NgModule({
  declarations: [AlunoComponent, CriarAlunoComponent],
  imports: [
    CommonModule,
    AlunoRoutingModule
  ]
})
export class AlunoModule { }
