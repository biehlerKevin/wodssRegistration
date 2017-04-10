import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './shared/login/login.component';
import { DialogLoginComponent } from './dialogs/dialogLogin.component';
import { SeminarOverviewComponent } from './seminars/seminarOverview.component';
import { SeminarComponent } from './seminars/seminar.component';
import { TRANSLATION_PROVIDERS } from './shared/translation/translate';
import { TranslateService } from './shared/translation/translate.service';
import { TranslatePipe } from './shared/translation/translate.pipe';
import 'hammerjs';

import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
      AppComponent,
      LoginComponent,
      SeminarOverviewComponent,
      DialogLoginComponent,
      TranslatePipe,
      SeminarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
  ],
  entryComponents: [DialogLoginComponent],
  providers: [TRANSLATION_PROVIDERS, TranslateService],
  bootstrap: [AppComponent]
})

export class AppModule { }
