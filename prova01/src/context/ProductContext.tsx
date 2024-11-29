import { createContext, ReactNode, useEffect, useState } from "react";

type ProductType = {
  codigo: string;
  descricao: string;
  preco: string;
  estoque: string;
  setCodigo: (newState: string) => void;
  setDescricao: (newState: string) => void;
  setPreco: (newState: string) => void;
  setEstoque: (newState: string) => void;
};

const initialValue: ProductType = {
  codigo: localStorage.getItem("codigo") || "",
  descricao: localStorage.getItem("descricao") || "",
  preco: localStorage.getItem("preco") || "",
  estoque: localStorage.getItem("estoque") || "",
  setCodigo: () => {},
  setDescricao: () => {},
  setPreco: () => {},
  setEstoque: () => {},
};

// Alterando o nome da constante para ProductContext com "P" maiúsculo
export const ProductContext = createContext<ProductType>(initialValue);

type ProductContextProps = {
  children: ReactNode;
};

export const ProductContextProvider = ({ children }: ProductContextProps) => {
  const [codigo, setCodigo] = useState(initialValue.codigo);
  const [descricao, setDescricao] = useState(initialValue.descricao);
  const [preco, setPreco] = useState(initialValue.preco);
  const [estoque, setEstoque] = useState(initialValue.estoque);

  useEffect(() => {
    localStorage.setItem("codigo", codigo);
    localStorage.setItem("descricao", descricao);
    localStorage.setItem("preco", preco);
    localStorage.setItem("estoque", estoque);
  }, [codigo, descricao, preco, estoque]);

  return (
    <ProductContext.Provider
      value={{
        codigo,
        descricao,
        preco,
        estoque,
        setCodigo,
        setDescricao,
        setPreco,
        setEstoque,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
