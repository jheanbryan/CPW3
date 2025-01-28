import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 800px;
    width: 100%;
    gap: 15px;
    margin: auto;
    position: relative;
`;

export const DivLine = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;


export const InputSearch = styled.input`
    line-height: 24px;
    border: 1px solid #000;
    border-radius: 5px;
    outline: 0;
    padding: 5px;
    max-width: 300px;
    width: 100%;
    height: 2rem;
`;

export const InputItems = styled.div`
    position: absolute;
    z-index: 100;
    max-width: 300px;
    width: 100%;
    overflow-y: auto;
    max-height: 300px;
    display: flex; 
    flex-direction: column;
    border-radius: 5px;
    position: fixed;
    top: 125px; 
    border-radius: 5px;
`;



export const Item = styled.div`
    background-color: #ffffff;
    display: flex;
    gap: 5px;
    color: #000;
    cursor: pointer;
    padding: 5px;
    &:hover{
        background-color: #000;
        color: #ffffff;
    }
`;


export const ButtonSearch = styled.button`
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #fff;
    color: #000;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    cursor: pointer;
    transition: color 0.3s, border-bottom 0.3s;
    border: 2px solid transparent;

    &:hover {
    background-color: #c0c0c0;
    border-bottom: 2px solid #fff;
  }
`;

export const CryptoCard = styled.div`
  background-color: #c0c0c0;
  color: #000;
  display: flex;
  gap: 10px;
  border-radius: 5px;
  margin: 10px 0;
  max-width: 350px;
  width: 100%;
  padding: 10px;
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: #fff;

    &::after {
      opacity: 1; 
      transform: translateY(0);
    }
  }

  &::after {
    content: "Saiba mais";
    position: absolute;
    bottom: -25px; 
    left: 50%; 
    transform: translateX(-50%) translateY(10px);
    background-color: #c0c0c0;
    color: #000;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 14px;
    white-space: nowrap;
    opacity: 0;
    transition: opacity 0.3s, transform 0.3s;
  }
`;

export const CryptoImage = styled.img`
    width: 45px;
    height: 45px;
`;

export const CryptoDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #000;
`;