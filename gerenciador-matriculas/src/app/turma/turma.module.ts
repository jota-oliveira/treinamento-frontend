import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TurmaRoutingModule } from './turma-routing.module';
import { TurmaComponent } from './turma.component';
import { PoButtonModule, PoTableModule } from '@portinari/portinari-ui';
import { GridTurmaComponent } from './grid-turma/grid-turma.component';
import { CriarTurmaComponent } from './criar-turma/criar-turma.component';


@NgModule({
  declarations: [TurmaComponent, GridTurmaComponent, CriarTurmaComponent],
  imports: [
    CommonModule,
    PoButtonModule,
    PoTableModule,
    TurmaRoutingModule
  ]
})
export class TurmaModule { }
