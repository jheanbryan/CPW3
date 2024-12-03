import Modal from "react-responsive-modal";
import { Contact } from "../../models/Contact";

type Props = {
    contact: Contact;
    open: boolean; 
};

const ConfirmationDialog = ({ contact, open }: Props) => {
    return (
        <Modal open={open} onClose={() => {}} center>
            <h1>Confirmação</h1>

            <p>Deseja realmente apagar o contato {contact.name}?</p>

            <div>
                <button>Sim</button>
                <button>Não</button>
            </div>
        </Modal>
    );
};

export default ConfirmationDialog; 
