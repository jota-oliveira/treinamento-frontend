import { NgModule } from '@angular/core';
import { MatriculasRoutingModule } from './matriculas-routing.module';
import { MatriculasComponent } from './matriculas.component';
import { SharedModule } from '../shared/shared.module';
import { PoTableModule } from '@portinari/portinari-ui';

@NgModule({
  declarations: [MatriculasComponent],
  imports: [
    MatriculasRoutingModule,
    PoTableModule,
    SharedModule,
  ]
})
export class MatriculasModule { }
