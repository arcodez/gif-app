import React, { Fragment, useEffect, useState } from "react";
import { ListOfGif } from "./components/ListOfGif";
import { useGetGifs } from "./hooks/useGetGifs";
import "./styles/styles.css";

export default function App() {
  const { searchTerm, handleChange } = useGetGifs;
  return (
    <div className="galeria">
      <h1>App de Gifs</h1>

      <input type="text" value={searchTerm} onChange={handleChange} />
      <div className="linea"></div>
      <ListOfGif />
    </div>
  );
}
