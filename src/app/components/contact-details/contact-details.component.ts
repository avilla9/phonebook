import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactsService } from 'src/app/services/contacts.service';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  public editMode: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public editContact: ContactFormComponent,
    public dialogRef: MatDialogRef<ContactFormComponent>,
    private contactsService: ContactsService,
  ) { }

  ngOnInit(): void {
    console.log(this.data)
  }

  edit() {

  }

  delete() {
    this.contactsService.deleteContact(this.data.index);
    this.dialogRef.close();
  }

  update() {

  }

  cancelUpdate() {

  }

}
