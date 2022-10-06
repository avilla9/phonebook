import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { contactInterface, ContactsService } from 'src/app/services/contacts.service';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  public editMode: boolean = false;
  public userData: any = [];
  public username: any;
  public userForm: FormGroup;
  public formErrors: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public editContact: ContactFormComponent,
    public dialogRef: MatDialogRef<ContactFormComponent>,
    public contactsService: ContactsService,
  ) {
    this.userData = editContact.userData;
    this.username = editContact.username;
    this.userForm = editContact.userForm;
    this.formErrors = editContact.formErrors;
  }

  ngOnInit(): void {
  }

  edit() {
    this.editMode = !this.editMode;
  }

  delete() {
    this.contactsService.deleteContact(this.data.index);
    this.dialogRef.close();
  }

  update() {
    if (!this.userForm.valid) {
      return;
    }
    let contact = this.userForm.value;
    this.data.name = contact.name;
    this.data.number = contact.number;
    this.data.email = contact.email;
    this.contactsService.updateContact(this.data.index, contact);
    this.editMode = false;
  }

}
