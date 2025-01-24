import styled from "styled-components";

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
  color: #fff;
  background-color: #1C1E26;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  border: 2px solid #fff;
  display: flex;
  align-items: center;
  gap: 5px;
  
`;

export const IconImage = styled.img`
  width: 1.5rem;
`;