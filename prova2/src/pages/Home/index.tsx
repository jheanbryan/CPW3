import React, { useEffect, useState } from "react";

import {
  Img,
  MainContainer,
  Table,
  Td,
  Th,
  Thead,
  DivLine,
  Tr,
  Title,
} from "./styles";
import Header from "../../components/Header/index";
import { searchCrypto, CryptoInfo } from "../../services/HomeService";
import CryptoChart from "../../components/CryptoChart";

const Home = () => {
  const [cryptos, setCryptos] = useState<CryptoInfo[]>([]);
  let count: number = 0;

  useEffect(() => {
    const searchCryptosForHome = async () => {
      const data = await searchCrypto();
      setCryptos(data);
    };

    searchCryptosForHome();
  }, []);

  return (
    <>
      <Header />
      <Title>
        Criptos mais Populares
      </Title>
      <MainContainer>
        <Table>
          <Thead>
            <tr>
              <Th>#</Th>
              <Th>Cripto</Th>
              <Th>Preço (R$)</Th>
              <Th>Gráfico (7 dias)</Th>
            </tr>
          </Thead>

          <tbody>
            {cryptos.map((crypto) => (
              <Tr key={crypto.id}>
                <Td>{(count += 1)}</Td>

                <Td>
                  <DivLine>
                    <Img
                      src={crypto.logo}
                      alt={crypto.name}
                      width={32}
                      height={32}
                    />

                    <span>{crypto.name}</span>
                  </DivLine>
                </Td>

                <Td>
                  R${" "}
                  {crypto.price.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })}
                </Td>
                <Td>
                  <CryptoChart sparkline={crypto.sparkline} />
                </Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </MainContainer>
    </>
  );
};

export default Home;
