import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './shared/login/login.component';
import { DialogLoginComponent } from './dialogs/dialogLogin.component';
import { SeminarOverviewComponent } from './seminars/seminarOverview.component';

import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
      AppComponent,
      LoginComponent,
      SeminarOverviewComponent,
      DialogLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  entryComponents: [DialogLoginComponent],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
