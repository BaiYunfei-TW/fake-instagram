import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {PhotoModule} from './photo/photo.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule, PhotoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
