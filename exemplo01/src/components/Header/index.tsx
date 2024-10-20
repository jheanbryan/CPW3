import { Link } from "react-router-dom";
import { useContext } from "react";

import styles from "./styles.module.css";
import back from "../../assets/img/back.png";
import logout from "../../assets/img/logout.png";
import { UserContext } from "../../context/UserContext";
import noimage from '../../assets/img/noimage.png'

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

      <div className={styles.containerUser}>
        <Link to='/newcontact' className={styles.btnNewContact}>
          <span>Novo Contato</span>
        </Link>

        <img src={photoURL || noimage} className={styles.thumb} alt={name} />
        
        <Link to='/logout'>
          <img src={logout} className={styles.logout} alt="Sair" />
        </Link>
      </div>
      
    </header>
  );
};

export default Header;
