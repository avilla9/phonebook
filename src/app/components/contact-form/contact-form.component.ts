import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  userData: any = [];
  userForm: FormGroup;
  username: any;

  formErrors = {
    'name': '',
    'number': '',
    'email': ''
  };

  constructor(
    public dialogRef: MatDialogRef<ContactFormComponent>,
    private _contactService: ContactsService,
    private formBuilder: FormBuilder,
  ) {
    this.userForm = this.formBuilder.group(this.formGroup());
  }

  ngOnInit() { }

  formGroup() {
    return {
      name: ['', [Validators.required, Validators.minLength(3)]],
      number: ['', [Validators.required, Validators.minLength(10), Validators.pattern('(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})')]],
      email: ['', [Validators.email]],
    }
  }

  onSubmit() {
    if (!this.userForm.valid) {
      return;
    }
    this.userData.push(this.userForm.value);
    this._contactService.addContactInfo(this.userData[0])
  }
}
