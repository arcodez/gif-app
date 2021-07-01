import React, { Fragment } from "react";
import { ListOfGif } from "./components/ListOfGif";
import { Galeria } from "./styles/App";
import { GlobalStyle } from "./styles/GlobalStyle";

export default function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Galeria>
        <h1>App de Gifs by Arcodez</h1>
        <ListOfGif />
      </Galeria>
    </Fragment>
  );
}
