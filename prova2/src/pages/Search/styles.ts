import styled from "styled-components";

const primaryColor = "#1C1E26";
const secondaryColor = "#2a2d37";
const textColor = "#fff";
const borderColor = "#fff";
const paddingSize = "0.8rem 1.2rem";
const fontSize = "1rem";
const borderRadius = "4px";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 1rem;
`;

export const Title = styled.h1`
  margin: 1rem auto;
  text-align: center;
  font-size: 1.8rem;
  color: ${textColor};
`;

export const LoginButton = styled.button`
  padding: ${paddingSize};
  font-size: ${fontSize};
  font-weight: bold;
  color: ${textColor};
  background-color: ${primaryColor};
  border: 2px solid ${borderColor};
  border-radius: ${borderRadius};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background-color 0.3s, transform 0.2s;
  
  &:hover {
    background-color: ${secondaryColor};
    transform: scale(1.05);
  }
`;

export const IconImage = styled.img`
  width: 1.5rem;
  height: auto;
`;
