import { doc, setDoc } from "firebase/firestore";
import { Contact, contactConverter } from "../models/Contact";
import { store } from "../config/firebase";
import { FirebaseContainer } from "../models/FirebaseContainer";

export class ContactService{
    async save(contact: Contact) {
        const id = `${contact.ownerEmail.trim()}|${contact.email.trim()}`
        const ref = doc(store, FirebaseContainer.CONTACTS_COLLECTION_NAME, id).withConverter(contactConverter);

        await setDoc(ref, contact);
    };
};