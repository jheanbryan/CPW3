import { doc, getDoc, setDoc } from "firebase/firestore";
import { Contact, contactConverter } from "../models/Contact";
import { store } from "../config/firebase";
import { FirebaseContainer } from "../models/FirebaseContainer";

export class ContactService{
    async save(contact: Contact) {


        await setDoc(ref, contact);
    };


    async findByOwnerEmailAndContactEmail(
        ownerEmail: string, 
        contactEmail: string
    ){
        const id = this._generateId(contact.ownerEmail, contact.email);
        const ref = doc(
            store, 
            FirebaseContainer.CONTACTS_COLLECTION_NAME, 
            id
        ).withConverter(contactConverter);

        const snapShot = await getDoc(ref);

    }
    private _generateId(ownerEmail: string, contactEmail: string) {
        return `${ownerEmail}|${contactEmail}`
    }
};