import  { useEffect, useState } from "react";
import { MainContainer, CryptoCard, CryptoDescription, CryptoImage, CryptoName, PriceContainer, DetailItem, P } from "./styles";
import Header from "../../components/Header/index";
import { useNavigate, useLocation } from "react-router-dom";

interface CryptoDetails {
  name: string;
  image: string;
  symbol: string;
  description: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
}

const MoreInfo = () => {
  const [cryptoDetails, setCryptoDetails] = useState<CryptoDetails | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const storedDetails = localStorage.getItem('cryptoDetails');
    if (storedDetails) {
      setCryptoDetails(JSON.parse(storedDetails)); 

    } else if (location.state && location.state.cryptoDetails) {
      setCryptoDetails(location.state.cryptoDetails); 

    } else {
      navigate("/");
    }
  }, [location.state, navigate]);

  if (!cryptoDetails) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <MainContainer>
        <CryptoCard>

          <CryptoImage src={cryptoDetails.image} alt={cryptoDetails.name} />


          <CryptoDescription>
            <CryptoName>{cryptoDetails.name} ({cryptoDetails.symbol})</CryptoName>

            <PriceContainer>
              <P>
                Preço Atual: {cryptoDetails.current_price.toLocaleString("pt-BR", { 
                  style: "currency", 
                  currency: "BRL", 
                  minimumFractionDigits: 2,  
                  maximumFractionDigits: 5 
                })}
              </P>
              <P>Valor de Mercado: {cryptoDetails.market_cap.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</P>
              <P>Rank: #{cryptoDetails.market_cap_rank}</P>
              <P>Avaliação Total Dilúida: {cryptoDetails.fully_diluted_valuation.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</P>
            </PriceContainer>

            <DetailItem>
              <h3>Descrição:</h3>
              <P>{cryptoDetails.description}</P>
            </DetailItem>

          </CryptoDescription>
        </CryptoCard>
      </MainContainer>
    </>
  );
};

export default MoreInfo;
