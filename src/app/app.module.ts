import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DatalistComponent } from './datalist.component';

@NgModule({
  declarations: [
    DatalistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [DatalistComponent]
})
export class AppModule { }
