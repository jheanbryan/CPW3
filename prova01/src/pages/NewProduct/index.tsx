import React, { useContext, useState } from "react";
import { useMask } from "@react-input/mask";
//import precoValidator from "preco-validator";
import { useLocation } from "react-router-dom";
import moment from "moment";

import styles from "./styles.module.css";
import Header from "../../components/Header";
import { Products } from "../../models/Products";  // Alterado para Product
import { ProductContext } from "../../context/ProductContext";
import { ProdutService } from "../../services/ProductService";  // Certifique-se de renomear o serviço também, se necessário
import { Severity } from "../../enums/Severity";
import Message from "../../components/Message";

type Location = {
  state: {
    product: Product;  // Alterado para Product
  };
};

const NewProduto = () => {
  const location: Location = useLocation();
  const produto = location?.state?.product;

  // Estados do componente
  const [codigo, setCodigo] = useState(produto?.codigo || "");
  const [descricao, setDescricao] = useState(produto?.descricao || "");
  const [preco, setPreco] = useState(produto?.preco || "");
  const [estoque, setEstoque] = useState(produto?.estoque || "");
  const [responseSeverity, setResponseSeverity] = useState(Severity.SUCCESS);
  const [showResponseMessage, shouldShowResponseMessage] = useState(false);

  const ownerPreco = useContext(ProductContext).preco;

  const service = new ProductService();

  const saveToDB = async () => {
    const newProduct = new Product({ codigo, descricao, preco, ownerPreco });  // Alterado para Product
    newProduct.estoque = estoque || undefined;

    try {
      await service.save(newProduct);
      setResponseSeverity(Severity.SUCCESS);
    } catch (err) {
      console.log(err);
      setResponseSeverity(Severity.ERROR);
    }

    // Se não for edição, limpa o formulário
    if (!produto) {
      setCodigo("");
      setDescricao("");
      setPreco("");
      setEstoque("");
    }
  };

  const saveProduto = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    shouldShowResponseMessage(false);

    // Caso não seja edição:
    if (!produto) {
      const existingProduto = await service.findByOwnerPrecoAndProdutoCodigo(
        ownerPreco,
        codigo
      );

      if (existingProduto) {
        setResponseSeverity(Severity.WARNING);
        shouldShowResponseMessage(true);
        return;
      }
    }

    await saveToDB();
    shouldShowResponseMessage(true);
  };
/*
  const areInputsInvalid = () => {
    if (codigo.length === 0) {
      return true;
    }

    if (!precoValidator.validate(preco)) {
      return true;
    }

    return false;
  };
*/
  return (
    <div>
      <Header
        title={produto ? "Editar produto" : "Novo produto"}
        backPage="/home"
      />

      <form className={styles.productForm} onSubmit={saveProduto}>
        <label htmlFor="codigo">Código*:</label>
        <input
          type="text"
          id="codigo"
          value={codigo}
          required
          onInvalid={(e) => {
            e.currentTarget.setCustomValidity("O código deve ser preenchido");
          }}
          onChange={(e) => {
            setCodigo(e.target.value);
            e.currentTarget.setCustomValidity("");
          }}
        />

        <label htmlFor="descricao">Descrição*:</label>
        <input
          type="text"
          id="descricao"
          value={descricao}
          required
          onChange={(e) => setDescricao(e.target.value)}
        />

        <label htmlFor="preco">Preço unitário*:</label>
        <input
          type="number"
          id="preco"
          value={preco}
          required
          onChange={(e) => setPreco(e.target.value)}
          disabled={produto !== undefined}
        />

        <label htmlFor="estoque">Quantidade em estoque:</label>
        <input
          type="number"
          id="estoque"
          value={estoque}
          onChange={(e) => setEstoque(e.target.value)}
        />

        <input type="submit" value="Salvar"/* disabled={areInputsInvalid()} *//>
      </form>

      {showResponseMessage && (
        <Message
          severity={responseSeverity}
          message={(() => {
            if (responseSeverity === Severity.SUCCESS) {
              return "Produto salvo com sucesso!";
            } else if (responseSeverity === Severity.WARNING) {
              return "Já existe um produto com este código.";
            }

            return "Ocorreu um erro ao tentar salvar o produto.";
          })()}
        />
      )}
    </div>
  );
};

export default NewProduto;
