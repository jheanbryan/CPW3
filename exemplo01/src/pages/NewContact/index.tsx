import { useContext, useState } from "react";
import { useMask } from '@react-input/mask';
import EmailValidator from 'email-validator';

import styles from "./styles.module.css";
import Header from "../../components/Header";
import { Contact } from "../../models/Contact";
import { UserContext } from "../../context/UserContext";
import { ContactService } from "../../services/ContactServices";
import { Severity } from "../../enums/Saverity";
import Message from "../../components/Message";

const NewContact = () => {
  const [name, setName] = useState ('');
  const [phone, setPhone] = useState ('');
  const [email, setEmail] = useState ('');
  const [address, setAddress] = useState ('');
  const [birthday, setBirthday] = useState('');
  const [responseSeverity, setResponseSeverity] = useState(Severity.SUCESS);
  const [ResponseMessage, setResponseMessage] = useState(false);

  const ownerEmail = useContext(UserContext).email;
  const service = new ContactService();
  

  const saveContact = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setReponseMessage(false);

    const existingContact = await service.findByOwnerEmailAndContactEmail(
      ownerEmail,
      email
    );

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
  };

  const phoneRef = useMask({
    mask: '(__) ____-____',
    replacement: { _: /\d/ },
  });

  const areInputsInvalid = () => {
    if (name.length === 0)
      return true;

    if (!EmailValidator.validate(email))
      return true;

    if(phone.match(/^$\(d{2}\)\s\d{5}-\d{4}$/))
      return true;
    
    return false;
  };

  return (
    <div>
      <Header title="Novo Contato"  backPage="/home"/>

      <form onSubmit={saveContact} className={styles.contactForm}>
        <label htmlFor="name">Nome: </label>
        <input
          type="text" 
          name="name" 
          placeholder="Digite seu nome" 
          value={name} 
          onInvalid={(e => {
            e.currentTarget.setCustomValidity('Preencha este campo!');
          })}
          onChange={(e =>{
            setName(e.target.value)
            e.currentTarget.setCustomValidity('')
        })}/>


        <label htmlFor="phone">Telefone: </label>
        <input
          ref={phoneRef}
          type="tel" 
          name="phone" 
          placeholder="(__) ____-____" 
          value={phone} 
          onChange={(e =>{
            setPhone(e.target.value)
        })}/>

        <label htmlFor="email">Email: </label>
        <input
          type="email" 
          name="email" 
          placeholder="Digite seu Email" 
          value={email} 
          onChange={(e =>{
            setEmail(e.target.value)
        })}/>

        <label htmlFor="address">Endereço: </label>
        <input
          type="text" 
          name="address" 
          placeholder="Digite seu Endereço" 
          value={address} 
          onChange={(e =>{
            setAddress(e.target.value)
        })}/>

        <label htmlFor="birthday">Data de Nascimento: </label>
        <input
          type="date" 
          name="birthday" 
          value={birthday} 
          onChange={(e =>{
            setBirthday(e.target.value)
        })}/>

          <input type="submit" value="Salvar" disabled={areInputsInvalid()} />
      </form>

      {ResponseMessage && (
        <Message 
          severity={responseSeverity}
          message={(() => {
            if(responseSeverity === Severity.SUCESS)
              return 'Contato salvo com sucesso!';
            else if(responseSeverity === Severity.WARNING)
              return 'Já existe um cotato com esse e-mail!';

            return 'Ocorreu um erro ao tentar salvar o contato';
            
          })()}
        />
      )}
    </div>
  );
};

export default NewContact;
