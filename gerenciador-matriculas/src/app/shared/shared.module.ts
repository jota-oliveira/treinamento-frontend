import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { PoModule } from '@portinari/portinari-ui';


@NgModule({
  declarations: [SharedComponent],
  imports: [
    CommonModule,
    PoModule,
    // SharedRoutingModule
  ],
  exports: [
    PoModule,
    CommonModule
  ]
})
export class SharedModule { }
