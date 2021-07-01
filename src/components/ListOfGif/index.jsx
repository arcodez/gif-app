import React, { Fragment, useContext } from "react";
import { useGetGifs } from "../../hooks/useGetGifs";
import { Gif } from "../Gif";
import "./style.css";

export function ListOfGif() {
  const { loading, gifs } = useGetGifs(undefined);
  return (
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
  );
}
