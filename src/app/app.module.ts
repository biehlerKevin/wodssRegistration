import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './shared/login/login.component';
import { DialogLoginComponent } from './dialogs/dialogLogin.component';
import { SeminarOverviewComponent } from './seminars/seminarOverview.component';
import { SeminarComponent } from './seminars/seminar.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { SeminarCreateComponent } from './seminars/create/seminar-create.component';
import { SeminarEditComponent } from './seminars/edit/seminar-edit.component';
import { EmailComponent } from './seminars/email/email.component';


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
      SeminarComponent,
      UsermanagementComponent,
      SeminarCreateComponent,
      SeminarEditComponent,
      EmailComponent
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
