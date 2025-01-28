import { createGlobalStyle } from "styled-components";

export const MyGlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        font-size: 16px; 
        background-color: #2f343f;
        color: #fff;
    }
`;
