import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ResizeDividerModule } from './resize-divider/resize-divider.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ResizeDividerModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
