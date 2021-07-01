import React from "react";
import { ListOfGif } from "./components/ListOfGif";
import "./styles/styles.css";

export default function App() {
  return (
    <div className="galeria">
      <h1>App de Gifs</h1>
      <ListOfGif />
    </div>
  );
}
