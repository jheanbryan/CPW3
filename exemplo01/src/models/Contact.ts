import {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
  Timestamp,
} from "firebase/firestore";

export class Contact {
  name: string = "";
  phone: string = "";
  email: string = "";
  address?: string;
  birthday?: Date;
  ownerEmail: string = "";
  thumbURL?: string;
  thumbMimetype?: string;

  constructor(obj: Partial<Contact>) {
    Object.assign(this, obj);
  }

  static getId(ownerEmail: string, email: string) {
    return `${ownerEmail}|${email}`;
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
    if (data.birthday) {
      const t: Timestamp = data.birthday;
      data.birthday = t.toDate();
    }
    return new Contact(data);
  },
};
