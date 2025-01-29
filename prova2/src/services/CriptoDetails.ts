export class CryptoDetails {
  name: string;
  image: string;
  symbol: string;
  description: string;
  links: string[];
  country_origin: string;
  genesis_date: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;

  constructor(data: any) {
    this.name = data.name || "Nome não disponível";
    this.image = data.image?.large || ""; // Usando imagem em tamanho grande se disponível
    this.symbol = data.symbol || "Símbolo não disponível";
    this.description = data.description?.en || "Descrição não disponível";
    this.links = data.links?.homepage || []; // Caso não haja links, atribui um array vazio
    this.country_origin = data.country_origin || "País de origem não disponível";
    this.genesis_date = data.genesis_date || "Data de origem não disponível";
    this.current_price = data.market_data?.current_price?.brl || 0; // Usando 0 caso o preço não esteja disponível
    this.market_cap = data.market_data?.market_cap?.brl || 0; // Usando 0 caso a market cap não esteja disponível
    this.market_cap_rank = data.market_cap_rank || 0; // Usando 0 caso o rank não esteja disponível
    this.fully_diluted_valuation = data.market_data?.fully_diluted_valuation?.brl || 0; // Usando 0 caso a fully diluted valuation não esteja disponível
  }
};

export async function getCriptoDetails(id: string): Promise<CryptoDetails | undefined> {
  const query = new URLSearchParams({ prices: '1' }).toString();

  const resp = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}?${query}`,
    { method: 'GET' }
  );

  if (!resp.ok) {
    console.error('Erro ao consultar a API:', resp.statusText);
    return;
  }

  const data = await resp.json();

  const cryptoInfo = new CryptoDetails(data);

  return cryptoInfo;
}
