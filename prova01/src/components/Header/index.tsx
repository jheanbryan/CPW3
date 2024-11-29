import { useContext } from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";
import logout from "../../assets/img/logout.png";
import back from "../../assets/img/back.png";
import newContact from "../../assets/img/new.png";
import { ProductContext } from "../../context/ProductContext";

type Props = {
  title: string;
  backPage?: string;
};

const Header = ({ title, backPage }: Props) => {
  // Aqui você usa as propriedades de ProductContext
  const { codigo, descricao, preco, estoque } = useContext(ProductContext);

  return (
    <header className={styles.header}>
      {backPage && (
        <Link className={styles.backButton} to={backPage}>
          <img src={back} alt="Voltar" />
        </Link>
      )}
      <h1 className={styles.appTitle}>{title}</h1>

      <Link to="/newcontact" className={styles.btnNewContact}>
        <span>Novo produto</span>
        <img src={newContact} alt="Novo produto" />
      </Link>

      {/* Exemplo de exibição de informações do produto */}
      <div className={styles.productInfo}>
        <p>Produto: {descricao}</p>
        <p>Código: {codigo}</p>
        <p>Preço: {preco}</p>
        <p>Estoque: {estoque}</p>
      </div>

      <Link to="/logout">
        <img src={logout} className={styles.logout} alt="Sair" />
      </Link>
    </header>
  );
};

export default Header;
