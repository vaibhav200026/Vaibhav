import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpreadsheetComponent } from './spreadsheet/spreadsheet.component';



@NgModule({
  declarations: [
    AppComponent,
    SpreadsheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
