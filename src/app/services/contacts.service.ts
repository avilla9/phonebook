import { Injectable } from '@angular/core';

export interface contactInterface {
  firstName: string;
  lastName: string;
  number: string;
  whatsapp: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private contacts: contactInterface[] = [
    { firstName: 'Armando', lastName: 'Villanueva', number: '+584242141712', whatsapp: true, },
    { firstName: 'Armando', lastName: 'Villanueva', number: '+584242141712', whatsapp: true, },
    { firstName: 'Armando', lastName: 'Villanueva', number: '+584242141712', whatsapp: false, },
    { firstName: 'Armando', lastName: 'Villanueva', number: '+584242141712', whatsapp: true, }
  ];

  constructor() { }

  getContacts(): contactInterface[] {
    return this.contacts;
  }

  addContactInfo(data: any) {
    this.contacts.push(data)
    alert(JSON.stringify(data))
  }
}
