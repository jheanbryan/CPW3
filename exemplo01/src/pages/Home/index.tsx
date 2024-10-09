import { useState } from "react";

import styles from "./styles.module.css";
import Header from "../../components/Header";
import { Contact } from "../../models/Contact";
import ContactCard from "../../components/ContactCard";

const Home = () => {
  const [name, setName] = useState ('');
  const [phone, setPhone] = useState ('');
  const [email, setEmail] = useState ('');
  const [address, setAddress] = useState ('');
  const [birthday, setBirthday] = useState('');
  const [contacts, setContacts] = useState<Contact[]>([]);

  const saveContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const contact = new Contact(name, phone, email);
    contact.address = address || undefined;
    contact.birthday = birthday ? new Date(birthday) : undefined; 
    setContacts([contact, ...contacts])
  };
  
  return (
    <div>
      <Header title="Início" />

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
          type="tel" 
          name="phone" 
          placeholder="Digite seu Telefone" 
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

          <input type="submit" value="Salvar"/>
      </form>

      {contacts.length > 0 && (
        <div className={styles.contacts}>
          {contacts.map((c, index) => (
            <ContactCard key={index} contact={c} />
          ))}
        </div>
      )}

    </div>
  );
};

export default Home;
