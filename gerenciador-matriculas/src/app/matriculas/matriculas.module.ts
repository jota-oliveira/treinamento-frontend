import { NgModule } from '@angular/core';
import { MatriculasRoutingModule } from './matriculas-routing.module';
import { MatriculasComponent } from './matriculas.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MatriculasComponent],
  imports: [
    MatriculasRoutingModule,
    SharedModule,
  ]
})
export class MatriculasModule { }
