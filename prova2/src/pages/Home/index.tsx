import React, { useEffect, useState } from 'react';

import { Img, MainContainer, Table, Tbody, Td, Th, Thead, Title } from "./styles";
import Header from "../../components/Header/index";
import { searchCrypto, CryptoInfo } from '../../services/HomeService';
import { DivLine } from '../Search/styles';


const Home = () => {
  const [cryptos, setCryptos] = useState<CryptoInfo[]>([]);
  
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

          <Tbody>
            {cryptos.map((crypto) => (
              <tr key={crypto.id}>

                <Td>
                  {crypto.id}
                </Td>

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
                  <img
                    src={`https://image-charts.com/chart?cht=ls&chs=150x50&chd=t:${crypto.sparkline.join(
                      ","
                    )}&chco=0077ff`}
                    alt={`Gráfico de ${crypto.name}`}
                  />
                </Td>
              </tr>
            ))}
          </Tbody>
        </Table>
      </MainContainer>
    </>
  );
};

export default Home;
