import { Link } from "react-router-dom";

import styles from "./styles.module.css";
import thumb from "../../assets/img/thumb.jpg";
import logout from "../../assets/img/logout.png";
import back from "../../assets/img/back.png";

type Props = {
  title: string;
  backPage?: string;
};

const Header = ({ title, backPage }: Props) => {
  return (
    <header className={styles.header}>
      {backPage && (
        <Link className={styles.backButton} to={backPage}>
          <img src={back} alt="Voltar" />
        </Link>
      )}
      <h1 className={styles.appTitle}>{title}</h1>

      <img src={thumb} className={styles.thumb} alt="Thumbnail do usuário" />
      <img src={logout} className={styles.logout} alt="Sair" />
    </header>
  );
};

export default Header;
