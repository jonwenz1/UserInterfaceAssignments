import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailReaderBasicComponent } from './email-reader-basic/email-reader-basic.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmailReaderFormComponent } from './email-reader-form/email-reader-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailReaderBasicComponent,
    EmailReaderFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export class EmailReaderBasicModule { }
