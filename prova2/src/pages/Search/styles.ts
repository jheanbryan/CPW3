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
    flex-direction: column;
    position: absolute;
    z-index: 100;
    max-width: 300px;
    width: 100%;
    overflow-y: auto;
    max-height: 300px;
    display: flex; 
    margin-top: 335px;
`;

export const Item = styled.div`
    background-color: #50fa7b;
    display: flex;
    gap: 5px;
    color: #000;
    cursor: pointer;
    padding: 5px;
    border-radius: 5px;
    &:hover{
        background-color: #000;
        color: #50fa7b;
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
    background-color: #50fa7b;
    border-bottom: 2px solid #fff;
  }
`;

export const CryptoCard = styled.div`
    background-color: #fff;
    color: #000;
    display: flex;
    gap: 5px;
    border-radius: 5px;
    margin: 10px 0;
`;

export const CryptoImage = styled.img`
    max-width: 100%;
    width: 95%;
`;

export const CryptoDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #000;
`;