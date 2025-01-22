import { useContext, useEffect, useState } from "react";

import styles from "./styles.module.css";
import Header from "../../components/Header";
import { Contact } from "../../models/Contact";
import { ContactService } from "../../services/ContactService";
import { UserContext } from "../../context/UserContext";
import ContactCard from "../../components/ContactCard";
import { Circles } from "react-loader-spinner";
import ConfirmationDialog from "../../components/ConfirmationDialog";

const Home = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, isLoading] = useState(false);
  const [openConfirmationDialog, shouldOpenConfirmationDialog] =
    useState(false);
  const [selectedContact, setSelectedContact] = useState<Contact | undefined>(
    undefined
  );

  const { email } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      if (!openConfirmationDialog) {
        isLoading(true);
        const service = new ContactService();
        const results = await service.findAllByOwner(email);
        setContacts(results);
        isLoading(false);
      }
    })();
  }, [openConfirmationDialog]);

  const openDialog = (contact: Contact) => {
    setSelectedContact(contact);
    shouldOpenConfirmationDialog(true);
  };

  return (
    <>
      <Header title="Início" />

      <div className={styles.container}>
        <Circles
          height="80"
          width="80"
          color="#fff"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={loading}
        />

        {!loading && contacts.length > 0 && (
          <>
            <h1>Seus contatos</h1>

            {contacts.map((c) => (
              <ContactCard
                key={c.email}
                contact={c}
                shouldOpenConfirmationDialog={openDialog}
              />
            ))}
          </>
        )}

        {!loading && contacts.length === 0 && <p>Nenhum contato cadastrado</p>}

        {selectedContact && (
          <ConfirmationDialog
            open={openConfirmationDialog}
            contact={selectedContact}
            onClose={() => shouldOpenConfirmationDialog(false)}
          />
        )}
      </div>
    </>
  );
};

export default Home;
