import React, { Fragment, useContext } from "react";
import { useGetGifs } from "../../hooks/useGetGifs";
import { Gif } from "../Gif";
import "./style.css";

export function ListOfGif() {
  const { loading, gifs, searchTerm, handleChange } = useGetGifs(undefined);
  return (
    <Fragment>
      <div className="buscador">
        <input type="text" value={searchTerm} onChange={handleChange} />
      </div>
      <div className="linea"></div>
      <div className="contenedor-imagenes">
        {loading ? (
          <p>cargando</p>
        ) : (
          gifs.map((g, index) => (
            <Fragment key={g.id}>
              <Gif index={index} g={g} />
            </Fragment>
          ))
        )}
      </div>
    </Fragment>
  );
}
