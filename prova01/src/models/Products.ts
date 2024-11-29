import {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
  Timestamp,
} from "firebase/firestore";

export class Product { 
  codigo: string = "";
  descricao: string = "";
  preco: number = 0;
  estoque?: number;
  ownerEmail: string = "";

  constructor(obj: Partial<Product>) {
    Object.assign(this, obj);
  }
}

export const productConverter: FirestoreDataConverter<Product, DocumentData> = {  // Alterado para Product
  toFirestore: (product: Product): DocumentData => { 
    const cleanProduct = Object.entries(product)  
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(([_, value]) => value !== undefined)
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
    return cleanProduct;
  },

  fromFirestore: (
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ) => {
    const data = snapshot.data(options);
    return new Product(data); 
  },
};
