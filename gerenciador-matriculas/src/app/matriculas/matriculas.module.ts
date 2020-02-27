import { NgModule } from '@angular/core';
import { MatriculasRoutingModule } from './matriculas-routing.module';
import { MatriculasComponent } from './matriculas.component';
import { SharedModule } from '../shared/shared.module';
import { PoButtonModule, PoTableModule, PoToolbarModule } from '@portinari/portinari-ui';

@NgModule({
  declarations: [MatriculasComponent],
  imports: [
    SharedModule,
    MatriculasRoutingModule,
    PoButtonModule,
    PoTableModule,
    PoToolbarModule
  ]
})
export class MatriculasModule { }
