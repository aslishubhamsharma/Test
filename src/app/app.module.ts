import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  DxCheckBoxModule,
  DxSelectBoxModule,
  DxNumberBoxModule,
  DxFormModule,
  DxPopoverModule,
} from 'devextreme-angular';
import { DxButtonModule } from 'devextreme-angular';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxCheckBoxModule,
    DxSelectBoxModule,
    DxNumberBoxModule,
    DxFormModule,
    DxButtonModule,
    DxPopoverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
