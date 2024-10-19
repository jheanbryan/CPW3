import { Link } from "react-router-dom";
import { useContext } from "react";

import styles from "./styles.module.css";
import thumb from "../../assets/img/thumb.jpg";
import logout from "../../assets/img/logout.png";
import back from "../../assets/img/back.png";
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

      <Link to='newcontact'>
        <span>Novo Contato</span>
      </Link>

      <img src={photoURL} className={styles.thumb} alt={name} />

      <Link to='logout'>
        <img src={name} className={styles.logout} alt="Sair" />
      </Link>
    </header>
  );
};

export default Header;
