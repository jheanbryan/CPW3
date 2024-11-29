import { useContext, useEffect, useState } from "react";
import styles from "./styles.module.css";
import Header from "../../components/Header";
import { Product } from "../../models/Products"; 
import { ProductService } from "../../services/ProductService";
import { ProductContext } from "../../context/ProductContext";
import ProductCard  from "../../components/ProductCard";
import { Circles } from "react-loader-spinner";

const Home = () => {
  const [produtos, setProdutos] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  // Dados do contexto  
  const { codigo, descricao, preco, estoque } = useContext(ProductContext);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const service = new ProductService();
      
      // Filtrando ou buscando produtos com base nas informações do contexto
      const results = await service.findAll({
        codigo,
        descricao,
        preco,
        estoque,
      });
      
      setProdutos(results);
      setLoading(false);
    })();
  }, [codigo, descricao, preco, estoque]); // Dependência das variáveis do contexto

  return (
    <>
      <Header title="Início" />

      <div className={styles.container}>
        <Circles
          height="80"
          width="80"
          color="#fff"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={loading}
        />

        {!loading && produtos.length > 0 && (
          <>
            <h1>Seus produtos</h1>

            {produtos.map((p) => (
              <ProductCard key={p.codigo} product={p} />
            ))}
          </>
        )}

        {!loading && produtos.length === 0 && <p>Nenhum produto encontrado</p>}
      </div>
    </>
  );
};

export default Home;
