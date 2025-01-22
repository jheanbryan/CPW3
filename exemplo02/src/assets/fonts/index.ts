import { createGlobalStyle } from "styled-components";

import BoldFont from "./Poppins-Bold.ttf";
import RegularFont from "./Poppins-Regular.ttf";

export const FontStyles = createGlobalStyle`
    @font-face {
        font-family: "bold";
        src: url(${BoldFont});
    }

    @font-face {
        font-family: "regular";
        src: url(${RegularFont});
    }
`;
