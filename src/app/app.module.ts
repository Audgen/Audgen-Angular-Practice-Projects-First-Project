import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabularStructureThreeby3Component } from './tabular-structure-threeby3/tabular-structure-threeby3.component';

@NgModule({
  declarations: [
    AppComponent,
    TabularStructureThreeby3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
