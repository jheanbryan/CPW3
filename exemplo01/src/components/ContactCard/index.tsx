import { Link } from "react-router-dom";
import { useState } from "react";

import styles from "./styles.module.css";
import { Contact } from "../../models/Contact";
import noimage from "../../assets/img/noimage.png";
import pencil from "../../assets/img/pencil.png";
import trash from "../../assets/img/trash.png";

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
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
