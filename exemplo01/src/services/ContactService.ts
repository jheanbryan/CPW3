import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import axios from "axios";

import { Contact, contactConverter } from "../models/Contact";
import { store } from "../config/firebase";
import { FirebaseContainer } from "../models/FirebaseContainer";
import { Image } from "../types/Image";

export class ContactService {
  async save(contact: Contact) {
    const id = Contact.getId(contact.ownerEmail, contact.email);
    const ref = doc(
      store,
      FirebaseContainer.CONTACTS_COLLECTION_NAME,
      id
    ).withConverter(contactConverter);

    await setDoc(ref, contact);
  }

  async findByOwnerEmailAndContactEmail(
    ownerEmail: string,
    contactEmail: string
  ) {
    const id = Contact.getId(ownerEmail, contactEmail);
    const ref = doc(
      store,
      FirebaseContainer.CONTACTS_COLLECTION_NAME,
      id
    ).withConverter(contactConverter);

    const snapshot = await getDoc(ref);
    return snapshot.data();
  }

  async findAllByOwner(ownerEmail: string) {
    const ref = collection(store, FirebaseContainer.CONTACTS_COLLECTION_NAME);
    const q = query(
      ref,
      where("ownerEmail", "==", ownerEmail),
      orderBy("name")
    ).withConverter(contactConverter);

    const snapshot = await getDocs(q);

    const contacts: Contact[] = [];
    snapshot.forEach((doc) => contacts.push(new Contact(doc.data())));

    return contacts;
  }

  async delete(contact: Contact) {
    const id = Contact.getId(contact.ownerEmail, contact.email);
    const ref = doc(
      store,
      FirebaseContainer.CONTACTS_COLLECTION_NAME,
      id
    ).withConverter(contactConverter);

    await deleteDoc(ref);
  }

  async uploadThumbnail(
    thumbFile: File,
    contactId: string
  ): Promise<Image | undefined> {
    const formData = new FormData();
    formData.append("image", thumbFile);

    const response = await axios.post(
      `${import.meta.env.VITE_APP_IMAGE_UPLOAD_ENDPOINT}?key=${
        import.meta.env.VITE_APP_IMAGE_API_KEY
      }&name=${contactId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    // 200 -> OK
    if (response.status === 200) {
      const { data } = response.data;
      const { image } = data;
      const img: Image = {
        url: image.url,
        mimetype: image.mime,
      };

      return img;
    }

    console.log(response.data);
    return undefined;
  }
}
