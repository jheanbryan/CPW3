import styled from "styled-components";

const bgPrimaryColor = "#344159";
//const bgSecondaryColor = "#5d626e";
const textColor = "#fff";
//const hoverColor = "#4a5160";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  gap: 2rem;
  margin-inline: auto;
  padding: 2rem;
`;

export const CryptoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${bgPrimaryColor};
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
  color: ${textColor};
`;

export const CryptoImage = styled.img`
  max-width: 150px;
  max-height: 150px;
  width: 100%;
  height: 100%;
  object-fit: contain;
  margin-bottom: 20px;
`;

export const CryptoDescription = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  margin: 0 auto;
  line-height: 1.6;  /* Melhor espaçamento entre as linhas */
  word-wrap: break-word;  /* Quebra palavras longas se necessário */
  white-space: pre-wrap; /* Faz as quebras de linha no texto */
  overflow-wrap: break-word;  /* Garante que o texto quebre dentro do contêiner */
  text-align: justify;  /* Justifica o texto para ficar mais equilibrado */
`;

export const CryptoName = styled.h2`
  font-weight: 600;
  margin-bottom: 10px;
  flex-basis: 100%; 
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

export const P = styled.p`
  display: flex;
  width: 100%;
  justify-content: left;

  overflow-wrap: break-word;  
  text-align: left;
  white-space: normal;
  word-wrap: break-word;
  word-break: break-word; 
  line-height: 1.6;
  padding: 10px;
`;

export const DetailItem = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 2vh;
  word-wrap: normal;

`;

