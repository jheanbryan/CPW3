import React, { useContext, useState } from "react";
import { useMask } from "@react-input/mask";
import EmailValidator from "email-validator";

import styles from "./styles.module.css";
import Header from "../../components/Header";
import { Contact } from "../../models/Contact";
import { UserContext } from "../../context/UserContext";
import { ContactService } from "../../services/ContactServices";
import { Severity } from "../../enums/Saverity";
import Message from "../../components/Message";

const NewContact = () => {
<<<<<<< HEAD
  const [name, setName] = useState ('');
  const [phone, setPhone] = useState ('');
  const [email, setEmail] = useState ('');
  const [address, setAddress] = useState ('');
  const [birthday, setBirthday] = useState('');
  const [responseSeverity, setResponseSeverity] = useState(Severity.SUCESS);
  const [ResponseMessage, setResponseMessage] = useState(false);
=======
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
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [birthday, setBirthday] = useState("");
  const [responseSeverity, setResponseSeverity] = useState(Severity.SUCESS);
  const [showResponseMessage, shouldShowResponseMessage] = useState(false);
>>>>>>> a3cbbe443a6c22f6bef29ce96c1f054e36145b95

  const ownerEmail = useContext(UserContext).email;

  const service = new ContactService();

  const saveContact = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

<<<<<<< HEAD
    setReponseMessage(false);
=======
    shouldShowResponseMessage(false);
>>>>>>> a3cbbe443a6c22f6bef29ce96c1f054e36145b95

    const existingContact = await service.findByOwnerEmailAndContactEmail(
      ownerEmail,
      email
    );

<<<<<<< HEAD
    const contact = new Contact({ name, phone, email, ownerEmail });
    contact.address = address || undefined;
    contact.birthday = birthday ? new Date(birthday) : undefined;
    
    try{
      await service.save(contact);
      setResponseSeverity(Severity.SUCESS);

    } catch (err){
      setResponseSeverity(Severity.ERROR);
    }
    
    setResponseMessage(true);

    setName("");
    setPhone("");
    setEmail("");
    setBirthday("");
    setAddress("");
=======
    if (!existingContact) {
      const contact = new Contact({ name, phone, email, ownerEmail });
      contact.address = address || undefined;
      contact.birthday = birthday ? new Date(birthday) : undefined;

      try {
        await service.save(contact);
        setResponseSeverity(Severity.SUCESS);
      } catch (err) {
        console.log(err);
        setResponseSeverity(Severity.ERROR);
      }

      // Utilizando o spread operator
      setName("");
      setPhone("");
      setEmail("");
      setBirthday("");
      setAddress("");
    } else {
      setResponseSeverity(Severity.WARNING);
    }

    shouldShowResponseMessage(true);
>>>>>>> a3cbbe443a6c22f6bef29ce96c1f054e36145b95
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
      <Header title="Novo contato" backPage="/home" />

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
        />

        <input type="submit" value="Salvar" disabled={areInputsInvalid()} />
      </form>

<<<<<<< HEAD
      {ResponseMessage && (
        <Message 
          severity={responseSeverity}
          message={(() => {
            if(responseSeverity === Severity.SUCESS)
              return 'Contato salvo com sucesso!';
            else if(responseSeverity === Severity.WARNING)
              return 'Já existe um cotato com esse e-mail!';

            return 'Ocorreu um erro ao tentar salvar o contato';
            
=======
      {showResponseMessage && (
        <Message
          severity={responseSeverity}
          message={(() => {
            if (responseSeverity === Severity.SUCESS) {
              return "Contato salvo com sucesso!";
            } else if (responseSeverity === Severity.WARNING) {
              return "Já existe um contato com este e-mail.";
            }

            return "Ocorreu um erro ao tentar salvar o contato.";
>>>>>>> a3cbbe443a6c22f6bef29ce96c1f054e36145b95
          })()}
        />
      )}
    </div>
  );
};

export default NewContact;