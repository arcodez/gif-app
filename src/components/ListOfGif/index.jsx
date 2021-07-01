import React, { Fragment } from "react";
import { useGetGifs } from "../../hooks/useGetGifs";
import { Gif } from "../Gif";
import { Buscador, ContenedorImagenes, Input, Linea, Spinner } from "./style";

export function ListOfGif() {
  const { loading, gifs, searchTerm, handleChange } = useGetGifs(undefined);
  return (
    <Fragment>
      <Buscador>
        <Input type="text" value={searchTerm} onChange={handleChange} />
      </Buscador>

      <Linea />

      <ContenedorImagenes>
        {loading ? (
          <Spinner />
        ) : (
          gifs.map((g, index) => <Gif key={g.id} index={index} g={g} />)
        )}
      </ContenedorImagenes>
    </Fragment>
  );
}
