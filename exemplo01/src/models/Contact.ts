import { 
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
 } from "firebase/firestore";

export class Contact {
  name: string = "";
  phone: string = "";
  email: string = "";
  address?: string;
  birthday?: Date;
  ownerEmail: string = "";


  constructor(obj: Partial<Contact>) {
    // this.name = name;
    // this.phone = phone;
    // this.email = email;
    Object.assign(this, obj);
  }
}

export const contactConverter: FirestoreDataConverter<Contact, DocumentData> = {
  toFirestore: (contact: Contact): DocumentData => {
    const cleanContact = Object.entries(contact)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(([_, value]) => value !== undefined)
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
    return cleanContact;
  },

  fromFirestore: (
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ) => {
    const data = snapshot.data(options);
    return new Contact(data);
  },
};
