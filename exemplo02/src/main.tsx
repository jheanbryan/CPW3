import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { FontStyles } from "./assets/fonts";
import { GlobalStyles } from "./globalStyles.ts";

createRoot(document.getElementById("root")!).render(
  <>
    <GlobalStyles />
    <FontStyles />
    <App />
  </>
);
