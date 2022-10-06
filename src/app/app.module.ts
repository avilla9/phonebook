import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactFormComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ContactFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
