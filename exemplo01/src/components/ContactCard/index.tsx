import styles from "./styles.module.css";
import { Contact } from "../../models/Contact";
import noimage from "../../assets/img/noimage.png";

type Props = {
  contact: Contact;
};

const ContactCard = ({ contact }: Props) => {
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
    </div>
  );
};

export default ContactCard;