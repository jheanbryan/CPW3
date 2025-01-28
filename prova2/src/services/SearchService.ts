class CryptoInfo {
  coin: string;
  logo: string;
  ticker: string;
  minimum_transaction: number;
  minimum_transaction_coin: string;
  minimum_fee: number;
  minimum_fee_coin: string;
  fee_percent: string;
  network_fee_estimation: string;
  status: string;
  prices: Record<string, string>;
  prices_updated: string;

  constructor(data: any) {
    this.coin = data.coin;
    this.logo = data.logo;
    this.ticker = data.ticker;
    this.minimum_transaction = data.minimum_transaction;
    this.minimum_transaction_coin = data.minimum_transaction_coin;
    this.minimum_fee = data.minimum_fee;
    this.minimum_fee_coin = data.minimum_fee_coin;
    this.fee_percent = data.fee_percent;
    this.network_fee_estimation = data.network_fee_estimation;
    this.status = data.status;
    this.prices = data.prices;
    this.prices_updated = data.prices_updated;
  }
}

export async function searchCrypto(crypto: string):  Promise<CryptoInfo | undefined>{
  const query = new URLSearchParams({ prices: '1' }).toString();

  const ticker = crypto;
  const resp = await fetch(
    `https://api.cryptapi.io/${ticker}/info/?${query}`,
    { method: 'GET' }
  );

  if (!resp.ok) {
    console.error('Erro ao consultar a API:', resp.statusText);
    return;
  }

  const data = await resp.json();

  const cryptoInfo = new CryptoInfo(data);

  return cryptoInfo;
}

//searchCrypto().catch((error) => console.error('Erro ao executar o script:', error));