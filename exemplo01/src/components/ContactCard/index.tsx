import { Link } from "react-router-dom";
import { useState } from "react";

import styles from "./styles.module.css";
import { Contact } from "../../models/Contact";
import noimage from "../../assets/img/noimage.png";
<<<<<<< HEAD
import pencil from "../../assets/img/pencil.png";
import trash from "../../assets/img/trash.png";
=======
import edit from '../../assets/img/edit.png';
import trash from '../../assets/img/trash.png';
import { Link } from "react-router-dom";

>>>>>>> dadb1d9ad66a6a6725e857391beec081d669279d

type Props = {
  contact: Contact;
  openModal: () => void;
};

const ContactCard = ({ contact, openModal }: Props) => {
  return (
    <div className={styles.contactCard}>
      <div className={styles.thumb}>
        <img src={noimage} alt={contact.name} />
      </div>

      <div className={styles.info}>
        <div className={styles.metadata}>
          <span className={styles.key}>Nome:</span>
          <span className={styles.value}>{contact.name}</span>
        </div>

        <div className={styles.metadata}>
          <span className={styles.key}>Telefone:</span>
          <span className={styles.value}>{contact.phone}</span>
        </div>

        <div className={styles.metadata}>
          <span className={styles.key}>E-mail:</span>
          <span className={styles.value}>{contact.email}</span>
        </div>

        {contact.address && (
          <div className={styles.metadata}>
            <span className={styles.key}>Endereço:</span>
            <span className={styles.value}>{contact.address}</span>
          </div>
        )}

        {contact.birthday && (
          <div className={styles.metadata}>
            <span className={styles.key}>Data de nascimento:</span>
            <span className={styles.value}>
              {contact.birthday.toLocaleDateString()}
            </span>
          </div>
        )}
      </div>

      <div className={styles.actions}>
<<<<<<< HEAD
        <Link
          className={`${styles.actionButton} ${styles.editButton}`}
          to="/newcontact"
          state={{ contact }}
        >
          <img src={pencil} alt="Editar dados do contato" />
        </Link>

        <button
          className={`${styles.actionButton} ${styles.deleteButton}`}
          onClick={() => openModal()}
        >
          <img src={trash} alt="Remover contato" />
=======
        <Link to='/newcontact' className={`${styles.actionButton} ${styles.editButton}`}>
          <img src={edit} alt="Editar dados" />
        </Link>

        <button className={`${styles.actionButton} ${styles.deleteButton}`}>
          <img src={trash} alt='Remover dados' />
>>>>>>> dadb1d9ad66a6a6725e857391beec081d669279d
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
