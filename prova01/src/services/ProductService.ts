import { collection, getDocs, query, where } from "firebase/firestore";
import { store } from "../config/firebase"; // Configuração do Firebase
import { FirebaseContainer } from "../models/FirebaseContainer";
import { Product } from "../models/Products"; // Modelo de produto

export class ProductService {
  async findAll(filters: { codigo?: string; descricao?: string; preco?: string; estoque?: string }) {
    const ref = collection(store, FirebaseContainer.PRODUCTS_COLLECTION_NAME);
    let q = query(ref);

    if (filters.codigo) {
      q = query(q, where("codigo", "==", filters.codigo));
    }
    if (filters.descricao) {
      q = query(q, where("descricao", "==", filters.descricao));
    }
    if (filters.preco) {
      q = query(q, where("preco", "==", filters.preco));
    }
    if (filters.estoque) {
      q = query(q, where("estoque", "==", filters.estoque));
    }

    const snapshot = await getDocs(q);
    const produtos: Product[] = [];
    snapshot.forEach((doc) => {
      produtos.push(doc.data() as Product);
    });

    return produtos;
  }
}
