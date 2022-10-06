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

  addContactInfo(data: contactInterface) {
    let contactData = this.getContacts();
    contactData.push(data);
    localStorage.setItem('contacts', JSON.stringify(contactData));
  }

  deleteContact(index: number) {
    let contacts = this.getContacts();
    contacts.splice(index, 1);
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  updateContact(index: number, data: contactInterface) {
    let contacts = this.getContacts();
    contacts[index] = data;
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }
}
