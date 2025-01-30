import styled from "styled-components";

// Variáveis de cor
const bgPrimaryColor = "#344159";
const bgSecondaryColor = "#5d626e";
const textColor = "#fff";
const hoverColor = "#4a5160";

export const Title = styled.h1`
  color: ${textColor};
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.5rem; 
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  gap: 15px;
  margin-inline: auto;
  padding: 1rem;
`;

export const Table = styled.table`
  width: 100%;
  max-width: 1000px;
  border-collapse: collapse;
  background-color: ${bgSecondaryColor};
  color: ${textColor};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

`;

export const Thead = styled.thead`
  background-color: ${bgPrimaryColor};
`;

export const Th = styled.th`
  padding: 1rem;
  font-size: 1rem;
  font-weight: bold;
  border-bottom: 2px solid ${textColor};

  @media (max-width: 768px) {
    font-size: 0.9rem; 
  }
`;

export const Tr = styled.tr`
  text-align: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${hoverColor};
  }
`;

export const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid ${textColor};
  text-align: left;
  font-size: 0.95rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;  // Ajusta o tamanho da fonte para telas menores
    padding: 8px;      // Ajusta o padding para telas menores
  }
`;

export const Img = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 8px;

  @media (max-width: 768px) {
    width: 24px;  
    height: 24px;
  }
`;

export const CryptoName = styled.span`
  font-weight: bold;
`;

export const DivLine = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column; // Muda a direção dos itens em telas menores
    align-items: flex-start; // Alinha os itens à esquerda em telas menores
  }
`;
