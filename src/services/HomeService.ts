export class CryptoInfo {
    id: string;
    name: string;
    logo: string;
    price: number;
    sparkline: number[];
  
    constructor(data: any) {
      this.id = data.id;
      this.name = data.name;
      this.logo = data.image;
      this.price = data.current_price;
      this.sparkline = data.sparkline_in_7d.price;
    }
}
  
export async function searchCrypto():  Promise<CryptoInfo[]>{
    const resp = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=10&page=1&sparkline=true`,
      { method: 'GET' }
    );
  
    if (!resp.ok) {
      console.error('Erro ao consultar a API:', resp.statusText);
      return [];
    }
  
    const data = await resp.json();

    return data.map((item: any) => new CryptoInfo(item));
}
  