import styled from "styled-components";

const primaryColor = "#1C1E26";
const secondaryColor = "#2a2d37";
const textColor = "#fff";
const borderColor = "#fff";
const backgroundColorLight = "#ffffff";
const backgroundColorDark = "#000";
const hoverBackgroundColor = "#c0c0c0";
const paddingSize = "0.8rem 1.2rem";
const fontSize = "1rem";
const borderRadius = "5px";

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
    border: 1px solid ${backgroundColorDark};
    border-radius: ${borderRadius};
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
    border-radius: ${borderRadius};
    position: fixed;
    top: 125px; 
`;

export const Item = styled.div`
    background-color: ${backgroundColorLight};
    display: flex;
    gap: 5px;
    color: ${backgroundColorDark};
    cursor: pointer;
    padding: 5px;
    &:hover {
        background-color: ${backgroundColorDark};
        color: ${backgroundColorLight};
    }
`;

export const ButtonSearch = styled.button`
    padding: 5px 10px;
    border-radius: ${borderRadius};
    background-color: ${backgroundColorLight};
    color: ${backgroundColorDark};
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    cursor: pointer;
    transition: color 0.3s, border-bottom 0.3s;
    border: 2px solid transparent;

    &:hover {
        background-color: ${hoverBackgroundColor};
        border-bottom: 2px solid ${borderColor};
    }
`;

export const CryptoCard = styled.div`
    background-color: ${hoverBackgroundColor};
    color: ${backgroundColorDark};
    display: flex;
    gap: 10px;
    border-radius: ${borderRadius};
    margin: 10px 0;
    max-width: 350px;
    width: 100%;
    padding: 10px;
    cursor: pointer;
    position: relative;

    &:hover {
        background-color: ${backgroundColorLight};

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
        background-color: ${hoverBackgroundColor};
        color: ${backgroundColorDark};
        padding: 5px 10px;
        border-radius: ${borderRadius};
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
    color: ${backgroundColorDark};
`;
