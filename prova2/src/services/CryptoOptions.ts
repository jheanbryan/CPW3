export class Crypto {
    id: string;
    name: string;
    symbol: string
  
    constructor(data: any) {
      this.id = data.id;
      this.name = data.name;
      this.symbol = data.symbol;
    }
}
  
export async function getCryptoOptions():  Promise<Crypto[]>{
    const resp = await fetch(
      `https://api.coingecko.com/api/v3/coins/list`,
      { method: 'GET' }
    );
  
    if (!resp.ok) {
      console.error('Erro ao consultar a API:', resp.statusText);
      return [];
    }
  
    const data = await resp.json();

    return data;
}
  