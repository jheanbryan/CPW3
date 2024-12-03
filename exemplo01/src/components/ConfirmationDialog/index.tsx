import Modal from "react-responsive-modal";
import { Contact } from "../../models/Contact";
import styles from "./styles.module.css";

type Props = {
    contact: Contact;
    open: boolean;
    onClose: () => void;  // Função passada como prop
};

const ConfirmationDialog = ({ contact, open, onClose }: Props) => {
    return (
        <Modal open={open} onClose={onClose} center>
            <h1 className={`${styles.text} ${styles.title}`}>Confirmação</h1>

            <p className={`${styles.text} ${styles.question}`}>Deseja realmente apagar o contato {contact.name}?</p>

            <div className={styles.buttonPanel}>
                <button 
                    className={`${styles.button} ${styles.confirmationButton}`} 
                    onClick={onClose}
                >
                    Sim
                </button>
                <button 
                    className={`${styles.button} ${styles.cancelButton}`} 
                    onClick={onClose}
                >
                    Não
                </button>
            </div>
        </Modal>
    );
};

export default ConfirmationDialog;
