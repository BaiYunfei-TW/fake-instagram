import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {PhotoModule} from './photo/photo.module';
import { UserInfoComponent } from './user-info/user-info.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserInfoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, PhotoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
