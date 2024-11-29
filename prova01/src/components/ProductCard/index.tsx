import { Link } from "react-router-dom";
import { useState } from "react";

import styles from "./styles.module.css";
import { Product } from "../../models/Products";  // Certifique-se de que a model do produto está sendo importada corretamente
import noimage from "../../assets/img/noimage.png";
import pencil from "../../assets/img/pencil.png";
import trash from "../../assets/img/trash.png";

type Props = {
  product: Product;  // Alterado de 'contact' para 'product'
  openModal: () => void;
};

const ProductCard = ({ product, openModal }: Props) => {
  return (
    <div className={styles.productCard}> {}
      <div className={styles.thumb}>
        <img src={noimage} alt={product.descricao} /> {}
      </div>

      <div className={styles.info}>
        <div className={styles.metadata}>
          <span className={styles.key}>Código:</span>
          <span className={styles.value}>{product.codigo}</span> {}
        </div>

        <div className={styles.metadata}>
          <span className={styles.key}>Descrição:</span>
          <span className={styles.value}>{product.descricao}</span> {}
        </div>

        <div className={styles.metadata}>
          <span className={styles.key}>Preço:</span>
          <span className={styles.value}>{product.preco}</span> {}
        </div>

        {product.estoque && (
          <div className={styles.metadata}>
            <span className={styles.key}>Estoque:</span>
            <span className={styles.value}>{product.estoque}</span> {}
          </div>
        )}
      </div>

      <div className={styles.actions}>
        <Link
          className={`${styles.actionButton} ${styles.editButton}`}
          to="/newproduct"
          state={{ product }}
        >
          <img src={pencil} alt="Editar produto" />
        </Link>

        <button
          className={`${styles.actionButton} ${styles.deleteButton}`}
          onClick={() => openModal()}
        >
          <img src={trash} alt="Remover produto" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
