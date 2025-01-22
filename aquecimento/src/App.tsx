import BlocoTexto from "./components/BlocoTexto";
import styles from "./App.module.css";
import css from "./assets/img/css.png";
import html from "./assets/img/html.png";
import typescript from "./assets/img/typescript.png";

const App = () => {
  return (
    <>
      <BlocoTexto
        titulo="Primeiro bloco"
        paragrafo="Este é o texto do primeiro bloco"
      />

      <BlocoTexto
        titulo="CSS"
        paragrafo="Linguagem de estilização de elementos web."
        thumb={css}
      />

      <BlocoTexto
        titulo="HTML"
        paragrafo="Linguagem de estruturação de páginas web."
        thumb={html}
      />

      <BlocoTexto
        titulo="TypeScript"
        paragrafo="Linguagem de programação voltada tanto para o frontend quanto ao backend."
        thumb={typescript}
      />
    </>
  );
};

export default App;
