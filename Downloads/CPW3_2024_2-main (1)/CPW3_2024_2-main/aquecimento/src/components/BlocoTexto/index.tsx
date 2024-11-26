import styles from "./styles.module.css";
import noImage from "../../assets/img/noimage.png";

type Props = {
  titulo: string;
  paragrafo: string;
  thumb?: string;
};

const BlocoTexto = ({ paragrafo, titulo, thumb }: Props) => {
  return (
    <div className={styles.blocoTexto}>
      <img className={styles.thumb} src={thumb || noImage} alt={titulo} />
      <h1 className={styles.titulo}>{titulo}</h1>
      <p className={styles.paragrafo}>{paragrafo}</p>
    </div>
  );
};

export default BlocoTexto;
