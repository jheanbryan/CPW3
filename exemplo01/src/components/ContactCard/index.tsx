import styles from "./styles.module.css";
import { Contact } from "../../models/Contact";
import noimage from "../../assets/img/noimage.png";
import edit from '../../assets/img/edit.png';
import trash from '../../assets/img/trash.png';
import { Link } from "react-router-dom";


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

      <div className={styles.actions}>
        <Link to='/newcontact' className={`${styles.actionButton} ${styles.editButton}`}>
          <img src={edit} alt="Editar dados" />
        </Link>

        <button className={`${styles.actionButton} ${styles.deleteButton}`}>
          <img src={trash} alt='Remover dados' />
        </button>
      </div>
    </div>
  );
};

export default ContactCard;