import { useContext } from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";
import logout from "../../assets/img/logout.png";
import back from "../../assets/img/back.png";
import newContact from "../../assets/img/new.png";
import { UserContext } from "../../context/UserContext";

type Props = {
  title: string;
  backPage?: string;
};

const Header = ({ title, backPage }: Props) => {
  const { photoURL, name } = useContext(UserContext);

  return (
    <header className={styles.header}>
      {backPage && (
        <Link className={styles.backButton} to={backPage}>
          <img src={back} alt="Voltar" />
        </Link>
      )}
      <h1 className={styles.appTitle}>{title}</h1>

      <Link to="/newcontact" className={styles.btnNewContact}>
        <span>Novo contato</span>
        <img src={newContact} alt="Novo contato" />
      </Link>

      <img src={photoURL} className={styles.thumb} alt={name} />

      <Link to="/logout">
        <img src={logout} className={styles.logout} alt="Sair" />
      </Link>
    </header>
  );
};

export default Header;
