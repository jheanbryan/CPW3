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

export const InputSearch = styled.input`
    line-height: 24px;
    border: 1px solid #000;
    border-radius: 5px;
    outline: 0;
    padding: 5px;
    max-width: 300px;
    width: 100%;
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