import React, { useContext, useState } from "react";
import { useMask } from "@react-input/mask";
import EmailValidator from "email-validator";
import { useLocation } from "react-router-dom";
import moment from "moment";

import styles from "./styles.module.css";
import Header from "../../components/Header";
import { Contact } from "../../models/Contact";
import { UserContext } from "../../context/UserContext";
import { ContactService } from "../../services/ContactService";
import { Severity } from "../../enums/Severity";
import Message from "../../components/Message";

type Location = {
  state: {
    contact: Contact;
  };
};

const NewContact = () => {
  const location: Location = useLocation();
  const contact = location?.state?.contact;

  /**
   * State (estado do componente)
    Stateful component -> É um componente que manipula dados em seu state
    Stateless component -> É um componente que não manipula 
    dados em  seu state
   */

  /**
   * useState -> hook do React para criar uma nova propriedade
   * dentro do state do componente
   */
  const [name, setName] = useState(contact?.name ? contact.name : "");
  const [phone, setPhone] = useState(contact?.phone ? contact.phone : "");
  const [email, setEmail] = useState(contact?.email ? contact.email : "");
  const [address, setAddress] = useState(
    contact?.address ? contact.address : ""
  );
  const [birthday, setBirthday] = useState(
    contact?.birthday ? moment(contact.birthday).format("YYYY-MM-DD") : ""
  );
  const [responseSeverity, setResponseSeverity] = useState(Severity.SUCCESS);
  const [showResponseMessage, shouldShowResponseMessage] = useState(false);

  const ownerEmail = useContext(UserContext).email;

  const service = new ContactService();

  const saveToDB = async () => {
    const newContact = new Contact({ name, phone, email, ownerEmail });
    newContact.address = address || undefined;
    newContact.birthday = birthday ? new Date(birthday) : undefined;

    try {
      await service.save(newContact);
      setResponseSeverity(Severity.SUCCESS);
    } catch (err) {
      console.log(err);
      setResponseSeverity(Severity.ERROR);
    }

    // Se não for edição, limpa o formulário
    if (!contact) {
      setName("");
      setPhone("");
      setEmail("");
      setBirthday("");
      setAddress("");
    }
  };

  const saveContact = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    shouldShowResponseMessage(false);

    // Cao não seja edição:
    if (!contact) {
      const existingContact = await service.findByOwnerEmailAndContactEmail(
        ownerEmail,
        email
      );

      if (existingContact) {
        setResponseSeverity(Severity.WARNING);
        shouldShowResponseMessage(true);
        return;
      }
    }

    await saveToDB();
    shouldShowResponseMessage(true);
  };

  const phoneRef = useMask({
    mask: "(__) _____-____",
    replacement: { _: /\d/ },
  });

  const areInputsInvalid = () => {
    if (name.length === 0) {
      return true;
    }

    if (!EmailValidator.validate(email)) {
      return true;
    }

    if (phone.match(/^\(\d{2}\)\s\d{5}-\d{4}$/) === null) {
      return true;
    }

    return false;
  };

  return (
    <div>
      <Header
        title={contact ? "Editar contato" : "Novo contato"}
        backPage="/home"
      />

      <form className={styles.contactForm} onSubmit={saveContact}>
        <label htmlFor="name">Nome*:</label>
        <input
          type="text"
          name="name"
          value={name}
          required
          onInvalid={(e) => {
            e.currentTarget.setCustomValidity("O nome deve ser preenchido");
          }}
          onChange={(e) => {
            setName(e.target.value);
            e.currentTarget.setCustomValidity("");
          }}
        />

        <label htmlFor="phone">Telefone*:</label>
        <input
          ref={phoneRef}
          placeholder="(__) _____-____"
          type="tel"
          name="phone"
          value={phone}
          required
          onChange={(e) => setPhone(e.target.value)}
        />

        <label htmlFor="email">E-Mail*:</label>
        <input
          type="email"
          name="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          disabled={contact !== undefined}
        />

        <label htmlFor="address">Endereço:</label>
        <input
          type="text"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <label htmlFor="birthday">Data de nascimento:</label>
        <input
          type="date"
          name="birthday"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          max={moment().format("YYYY-MM-DD")}
        />

        <input type="submit" value="Salvar" disabled={areInputsInvalid()} />
      </form>

      {showResponseMessage && (
        <Message
          severity={responseSeverity}
          message={(() => {
            if (responseSeverity === Severity.SUCCESS) {
              return "Contato salvo com sucesso!";
            } else if (responseSeverity === Severity.WARNING) {
              return "Já existe um contato com este e-mail.";
            }

            return "Ocorreu um erro ao tentar salvar o contato.";
          })()}
        />
      )}
    </div>
  );
};

export default NewContact;
