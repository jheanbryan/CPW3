import styled from "styled-components";

const primaryColor = "#344159";
const secondaryColor = "#5d626e";
const textColor = "#fff";
const hoverColor = "#4a5160";

export const Title = styled.h1`
  color: ${textColor};
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 20px;
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
  padding: 20px;
`;

export const Table = styled.table`
  width: 100%;
  max-width: 1000px;
  border-collapse: collapse;
  background-color: ${secondaryColor};
  color: ${textColor};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

export const Thead = styled.thead`
  background-color: ${primaryColor};
`;

export const Th = styled.th`
  padding: 15px;
  text-align: left;
  font-size: 1rem;
  font-weight: bold;
  border-bottom: 2px solid ${textColor};
`;

export const Tbody = styled.tbody`
  & tr:hover {
    background-color: ${hoverColor};
    transition: 0.3s;
  }
`;

export const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid ${textColor};
  text-align: left;
  font-size: 0.95rem;  
`;

export const Img = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 8px;
`;

export const CryptoName = styled.span`
  font-weight: bold;
`;

export const DivLine = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;