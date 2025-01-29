import styled from "styled-components";

const bgColor = '#1C1E26';
const secondaryColor = '#fff';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Title = styled.h1`
    margin: 1rem auto;
    text-align: center;
`;

export const LoginButton = styled.button`
  padding: 0.8rem;
  font-size: 1rem;
  font-weight: bold;
  color: ${secondaryColor};
  background-color: ${bgColor};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  border: 2px solid ${secondaryColor};
  display: flex;
  align-items: center;
  gap: 5px;
  
`;

export const IconImage = styled.img`
  width: 1.5rem;
`;