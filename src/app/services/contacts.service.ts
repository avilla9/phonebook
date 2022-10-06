import { Injectable } from '@angular/core';

export interface contactInterface {
  name: string;
  number: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }

  getContacts(): contactInterface[] {
    if (!localStorage.getItem('contacts')) {
      return [];
    }
    let contact = JSON.parse(localStorage.getItem('contacts')!);
    contact.sort((
      a: { name: string; },
      b: { name: any; }
    ) => a.name.localeCompare(b.name));
    return contact;
  }

  addContactInfo(data: any) {
    let contactData = this.getContacts();
    contactData.push(data);
    localStorage.setItem('contacts', JSON.stringify(contactData));
  }
}
