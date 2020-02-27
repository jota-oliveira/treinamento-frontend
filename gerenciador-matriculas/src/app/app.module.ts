import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';

import { HttpClientModule } from '@angular/common/http';
import { MockDataService } from './utils/mock/mock-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { PoToolbarModule, PoMenuModule, PoPageModule } from '@portinari/portinari-ui';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      MockDataService, { dataEncapsulation: false }
    ),
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PoToolbarModule,
    PoMenuModule,
    PoPageModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
