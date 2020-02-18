import { NgModule } from '@angular/core';
import { MatriculasRoutingModule } from './matriculas-routing.module';
import { MatriculasComponent } from './matriculas.component';
import { SharedModule } from '../shared/shared.module';
import { PoTableModule } from '@portinari/portinari-ui';
import { PoButtonModule } from '@portinari/portinari-ui';

@NgModule({
  declarations: [MatriculasComponent],
  imports: [
    MatriculasRoutingModule,
    PoTableModule,
    PoButtonModule,
    SharedModule,
  ]
})
export class MatriculasModule { }
