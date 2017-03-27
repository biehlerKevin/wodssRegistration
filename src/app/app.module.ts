import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './shared/login/login.component';
import { SeminarComponent } from './seminars/seminar.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
      AppComponent,
      LoginComponent,
      SeminarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
