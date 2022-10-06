import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { contactInterface, ContactsService } from 'src/app/services/contacts.service';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  public contacts!: contactInterface[];
  public colors = ['#df2222', '#e77517', '#aa8700', '#4ae222', '#36ddf0', '#ff76d2', '#4a3f9a', '#d691e8'];
  public lastColor: any = this.getRandomColor();
  public avatarColors: string[] = [];
  public dialogOptions = {
    DialogPosition: 'bottom',
    maxWidth: '100vw',
    maxHeight: '100vh',
    height: '85%',
    width: '100%',
    panelClass: ['animate__animated', 'animate__slideInUp', 'animate__faster', 'fullScreenDialog']
  };

  constructor(
    public dialog: MatDialog,
    private contactsService: ContactsService,
  ) { }

  ngOnInit(): void {
    this.contacts = this.contactsService.getContacts();
    this.setAvatarColors();
  }

  getRandomColor(): string {
    let random = Math.floor(Math.random() * this.colors.length);
    if (this.lastColor == this.colors[random]) {
      return this.getRandomColor();
    }
    this.lastColor = this.colors[random]
    return this.colors[random];
    //return { 'background-color': this.colors[random] };
  }

  setAvatarColors() {
    this.avatarColors = [];
    this.contacts?.forEach(contact => {
      this.avatarColors.push(this.getRandomColor())
    });
  }

  add() {
    const dialogRef = this.dialog.open(ContactFormComponent, this.dialogOptions);
    dialogRef.afterClosed().subscribe((contact: contactInterface) => {
      this.contacts = this.contactsService.getContacts();
      this.avatarColors.push(this.getRandomColor());
    });
  }
}
